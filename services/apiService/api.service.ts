/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IncomingMessage, ServerResponse } from 'http';
import moleculer, { Context, Errors } from 'moleculer';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import ApiGateway from 'moleculer-web';
import { Service, Method } from '@ourparentcenter/moleculer-decorators-extended';
import pick from 'lodash/pick';
import { openAPIMixin } from '../../mixins/openapi/openapi.mixin';
import { editorMixin } from '../../mixins/editor/editor.mixin';
import { Config } from '../../common';
import {
	RequestMessage,
} from '../../types';
import { serviceRoutes } from '../serviceroutes';
 import { swMiddleware, swStats } from '../../mixins/swstats'; 

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 * @typedef {import('http').IncomingMessage} IncomingRequest Incoming HTTP Request
 * @typedef {import('http').ServerResponse} ServerResponse HTTP Server Response
 */
@Service({
	name: 'api',
	authToken: Config.API_AUTH_TOKEN,
	mixins: [ApiGateway, openAPIMixin(), editorMixin()],
	// More info about settings: https://moleculer.services/docs/0.14/moleculer-web.html
	settings: {
		// rate limiter default for all routes
		rateLimit: {
			// How long to keep record of requests in memory (in milliseconds).
			// Defaults to 60000 (1 min)
			window: 60 * 1000,

			// Max number of requests during window. Defaults to 30
			limit: 30,

			// Set rate limit headers to response. Defaults to false
			headers: true,

			// Function used to generate keys. Defaults to:
			key: (req: RequestMessage) => {
				return req.headers['x-forwarded-for'] || req.socket.remoteAddress;
			},
		},

		port: Config.PORT || 3000,

		use: [
			cookieParser(),
			helmet({
				contentSecurityPolicy: {
					directives: {
						'default-src': ["'self'"],
						'base-uri': ["'self'"],
						// 'block-all-mixed-content',
						'font-src': ["'self'"],
						'frame-ancestors': ["'self'"],
						'img-src': ["'self'", 'data:'],
						'object-src': ["'none'"],
						'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
						'script-src-attr': ["'none'"],
						'style-src': ["'self'", "'unsafe-inline'"],
						'upgrade-insecure-requests': [],
						'worker-src': ['blob:'],
						'connect-src': [
							"'self'",
							'https://generator3.swagger.io/openapi.json',
							'https://generator3.swagger.io/api/clients',
							'https://generator3.swagger.io/api/servers',
							'https://generator.swagger.io/api/swagger.json',
							'https://generator.swagger.io/api/gen/clients',
							'https://generator.swagger.io/api/gen/servers',
							'https://converter.swagger.io/api/convert',
						],
					},
				},
			}),
		],
		routes: [
			{
				// api dashboard thorugh swagger stats
				path: '/api',
				cors: {
					origin: ['*'],
					methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
					credentials: false,
					maxAge: 3600,
				},
				whitelist: [
					// Access to any actions in all services under "/api" URL
					'**',
				],
				// Route-level Express middlewares. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Middlewares
				// usign swagger stats dachboard
				use: [swMiddleware],
				// Enable/disable parameter merging method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Disable-merging
				mergeParams: true,

				// Enable authentication. Implement the logic into `authenticate` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authentication
				authentication: false,

				// Enable authorization. Implement the logic into `authorize` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authorization
				authorization: false,

				// The auto-alias feature allows you to declare your route alias directly in your services.
				// The gateway will dynamically build the full routes from service schema.
				autoAliases: false,

				aliases: {
					// swagger stats dashboard route at root
					'GET /'(req: any, res: any) {
						res.statusCode = 302;
						res.setHeader('Location', '/api/dashboard/');
						return res.end();
					},
					'GET /stats'(req: any, res: any) {
						res.setHeader('Content-Type', 'application/json; charset=utf-8');
						return res.end(JSON.stringify(swStats.getCoreStats()));
					},
					'GET /metrics'(req: any, res: any) {
						res.setHeader('Content-Type', 'application/json; charset=utf-8');
						return res.end(JSON.stringify(swStats.getPromStats()));
					},
				},
				/**
				 * Before call hook. You can check the request.
				 * @param {Context} ctx
				 * @param {Object} route
				 * @param {IncomingMessage} req
				 * @param {ServerResponse} res
				 * @param {Object} data
				onBeforeCall(ctx: Context<any,{userAgent: string}>,
					route: object, req: IncomingMessage, res: ServerResponse) {
					Set request headers to context meta
					ctx.meta.userAgent = req.headers["user-agent"];
				},
				*/

				/**
				 * After call hook. You can modify the data.
				 * @param {Context} ctx
				 * @param {Object} route
				 * @param {IncomingMessage} req
				 * @param {ServerResponse} res
				 * @param {Object} data
				 *
				 onAfterCall(ctx: Context, route: object, req: IncomingMessage, res: ServerResponse, data: object) {
					// Async function which return with Promise
					return doSomething(ctx, res, data);
				},
				*/

				// Calling options. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Calling-options
				callingOptions: {},

				bodyParsers: {
					json: {
						strict: false,
						limit: '1MB',
					},
					urlencoded: {
						extended: true,
						limit: '1MB',
					},
				},

				// Mapping policy setting. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Mapping-policy
				mappingPolicy: Config.MAPPING_POLICY, // Available values: "all", "restrict"

				// Enable/disable logging
				logging: true,
			},
			...serviceRoutes,
		],
		// Do not log client side errors (does not log an error response when the error.code is 400<=X<500)
		log4XXResponses: false,
		// Logging the request parameters. Set to any log level to enable it. E.g. "info"
		logRequestParams: 'info',
		// Logging the response data. Set to any log level to enable it. E.g. "info"
		logResponseData: null,
		// Serve assets from "public" folder
		assets: {
			folder: 'public',
			// Options to `server-static` module
			options: {},
		},
	},
})
export default class ApiService extends moleculer.Service {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public onError(req: RequestMessage, res: ServerResponse, err: any): void {
		// Return with the error as JSON object
		res.setHeader('Content-type', 'application/json; charset=utf-8');
		res.writeHead(err.code || 500);

		if (err.code === 422) {
			const o: any = {};
			err.data.forEach((e: any) => {
				const field = e.field.split('.').pop();
				o[field] = e.message;
			});

			res.end(JSON.stringify({ errors: o }, null, 2));
		} else {
			const errObj = pick(err, ['name', 'message', 'code', 'type', 'data']);
			res.end(JSON.stringify(errObj, null, 2));
		}
		this.logResponse(req, res, err ? err.ctx : null);
	}

	async stopped() {
		swStats.stop();
	}
}
