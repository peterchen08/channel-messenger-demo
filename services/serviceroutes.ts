export const serviceRoutes = [
	{
		// auth endpoint
		path: '/auth',
		authorization: false,
		authentication: false,
		whitelist: ['v1.user.login'],
		aliases: {
			'POST /login': 'v1.user.login',
		},
	},
	{
		// for internal services communication only
		path: '/admin',
		whitelist: ['$node.*', 'api.listAliases'],
		authorization: false,
		authentication: false,
		// roles: [UserRole.SUPERADMIN],
		aliases: {
			'GET /health': '$node.health',
			'GET /services': '$node.services',
			'GET /actions': '$node.actions',
			'GET /list': '$node.list',
			'GET /metrics': '$node.metrics',
			'GET /events': '$node.events',
			'GET /options': '$node.options',
			'GET /aliases': 'api.listAliases',
		},
	},
	{
		// for internal services communication only
		path: '/api/v1/greeter',
		cors: {
			origin: ['*'],
			methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
			credentials: false,
			maxAge: 3600,
		},
		whitelist: [
			// Access to any actions in all services under "/api" URL
			'v1.greeter.*',
		],
		// Enable authentication. Implement the logic into `authenticate` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authentication
		authentication: false,

		// Enable authorization. Implement the logic into `authorize` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authorization
		authorization: false,
		autoAliases: true,
	},
	{
		// for internal services communication only
		path: '/api/v1/products',
		cors: {
			origin: ['*'],
			methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
			credentials: false,
			maxAge: 3600,
		},
		whitelist: [
			// Access to any actions in all services under "/api" URL
			'v1.products.*',
		],
		// Enable authentication. Implement the logic into `authenticate` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authentication
		authentication: false,

		// Enable authorization. Implement the logic into `authorize` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authorization
		authorization: false,
		autoAliases: true,
	},
	{
		// for internal services communication only
		path: '/api/v1/channels',
		cors: {
			origin: ['*'],
			methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
			credentials: false,
			maxAge: 3600,
		},
		whitelist: [
			// Access to any actions in all services under "/api" URL
			'v1.channels.*',
		],
		// Enable authentication. Implement the logic into `authenticate` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authentication
		authentication: false,

		// Enable authorization. Implement the logic into `authorize` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authorization
		authorization: false,
		autoAliases: true,
	},
	{
		// for internal services communication only
		path: '/api/v1/messages',
		cors: {
			origin: ['*'],
			methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
			credentials: false,
			maxAge: 3600,
		},
		whitelist: [
			// Access to any actions in all services under "/api" URL
			'v1.messages.*',
		],
		// Enable authentication. Implement the logic into `authenticate` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authentication
		authentication: false,

		// Enable authorization. Implement the logic into `authorize` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authorization
		authorization: false,
		autoAliases: true,
	},
	{
		// for internal services communication only
		path: '/api/v1/user',
		cors: {
			origin: ['*'],
			methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
			credentials: false,
			maxAge: 3600,
		},
		whitelist: [
			// Access to any actions in all services under "/api" URL
			'v1.user.*',
		],
		// Enable authentication. Implement the logic into `authenticate` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authentication
		authentication: true,

		// Enable authorization. Implement the logic into `authorize` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authorization
		authorization: true,
		autoAliases: true,
	},
];
