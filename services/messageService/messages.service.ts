/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
'use strict';
import { Context } from 'moleculer';
import { Put, Post,Method, Service } from '@ourparentcenter/moleculer-decorators-extended';
import { dbMessageMixin, eventsMessageMixin } from '../../mixins/dbMixins';
import { Config } from '../../common';
import {
	IMessage,
	MoleculerDBService,
	MessageServiceSettingsOptions,
	MessagesManipulateValueParams,
	MessagesListManipulateValueParams,
	MessagesServiceOptions,
	RestOptions,
} from '../../types';

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
@Service<MessagesServiceOptions>({
	name: 'messages',
	version: 1,
	/**
	 * Service guard token
	 */
	authToken: Config.MESSAGES_AUTH_TOKEN,
	/**
	 * Mixins
	 */
	mixins: [dbMessageMixin, eventsMessageMixin],
	/**
	 * Settings
	 */
	settings: {
		idField: '_id',
		// Available fields in the responses
		fields: ['_id', 'title', 'content', 'channel','createdAt'],
		// rest endpoint
		rest: '/',
		// rest: '/v1/Messages',
		// Validator for the `create` & `insert` actions.
		entityValidator: {
			title: 'string|min:2',
            content: 'string|min:4',
            channel: 'string|min:3',
		},
	},
	/**
	 * Action Hooks
	 */
	hooks: {
		before: {
			/**
			 * Register a before hook for the `create` action.
			 * It sets a default value for the createdAt field.
			 *
			 * @param {Context} ctx
			 */
			create: (ctx: Context<{ createdAt: Date }>) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				ctx.params.createdAt = new Date();
			},
		},
	},
})
export default class MessageService extends MoleculerDBService<
	MessageServiceSettingsOptions,
	IMessage
> {
	
	/**
	 * Loading sample data to the collection.
	 * It is called in the DB.mixin after the database
	 * connection establishing & the collection is empty.
	 */
	/* @Method
	async seedDB() {
		await this.adapter.insertMany([
			{ tilte: '消息标题1', content: '消息内容1', channel: '21WdUj2BlQpT6cZN', createdAt: new Date()},
		]);
	} */

	/**
	 * Fired after database connection establishing.
	 */
	@Method
	async afterConnected() {
		// After db connection
	}

	/**
	 *  @swagger
	 *
	 *  /api/v1/messages/listByChannel:
	 *    post:
	 *      tags:
	 *      - "Messages"
	 *      summary: list messages
	 *      description: list messages in a channel and order by descending (pagination is a extra credit).
	 *      operationId: listByChannel
	 *      requestBody:
	 *        content:
	 *          application/json:
	 *            schema:
	 *              required:
	 *              - channelId
	 *              - page
	 *              type: object
	 *              properties:
	 *                channelId:
	 *                  type: string
	 *                  description: the channel id of message
	 *                  default: ''
	 *                page:
	 *                  type: number
	 *                  description: pagination
	 *                  default: 1
	 *        required: false
	 *      responses:
	 *        200:
	 *          description: List message result
	 *          content: {}
	 *        422:
	 *          description: Missing parameters
	 *          content: {}
	 *      x-codegen-request-body-name: params
	 */
	@Post<RestOptions>('/listByChannel', {
		name: 'listByChannel',
		restricted: ['api'],
		params: {
			channelId: 'string',
			page: ['number|integer|positive'],
		},
	})
	async listMessages(ctx: Context<MessagesListManipulateValueParams, Record<string, unknown>>) {
		const count:number = await this.adapter.count({
			query: {
				channel:ctx.params.channelId
			},
		});
		var limit = 2;
		var offset = 0;
		if(ctx.params.page >1){
			if(count - (ctx.params.page-1)*limit > 0){
				offset = (ctx.params.page-1)*limit;
			}
		}
		const doc = await this.adapter.find({
			limit,
			offset,
			query: {
				channel:ctx.params.channelId
			},
			sort: ['-createdAt']
		});
			
		const json = await this.transformDocuments(ctx, ctx.params, doc);
		const result = {
			rows:json,
			total:count,
			page:ctx.params.page,
			pageSize:offset,
			totalPages:Math.ceil(count/offset)
		}
		return result;
	}

	/**
	 * The "moleculer-db" mixin registers the following actions:
	 *  - list
	 *  - find
	 *  - count
	 *  - create
	 *  - insert
	 *  - update
	 *  - remove
	 */

	/**
	 *  @swagger
	 *
	 *  /api/v1/messages:
	 *    get:
	 *      tags:
	 *      - "Messages"
	 *      summary: Get all messages (auto generated)
	 *      description: Get all messages
	 *      responses:
	 *        200:
	 *          description: Messages result
	 *          content: {}
	 *        403:
	 *          description: Server error
	 *          content: {}
	 */

	/**
	 *  @swagger
	 *
	 *  /api/v1/messages:
	 *    post:
	 *      tags:
	 *      - "Messages"
	 *      summary: Create a message (auto generated)
	 *      description: Create a message
	 *      requestBody:
	 *        content:
	 *          application/json:
	 *            schema:
	 *              required:
	 *              - title
	 *              - content
     *              - channel
	 *              type: object
	 *              properties:
	 *                title:
	 *                  type: string
	 *                  description: title of message
	 *                  default: message title
	 *                content:
	 *                  type: string
	 *                  description: content of message
	 *                  default: message content
	 *                channel:
	 *                  type: string
	 *                  description: the channel of message to send
	 *                  default: ''
	 *        required: true
	 *      responses:
	 *        200:
	 *          description: Create message result
	 *          content: {}
	 *        422:
	 *          description: Missing parameters
	 *          content: {}
	 *      x-codegen-request-body-name: params
	 */

	/**
	 *  @swagger
	 *
	 *  /api/v1/messages/{id}:
	 *    get:
	 *      tags:
	 *      - "Messages"
	 *      summary: Get message by id (auto generated)
	 *      description: Get message by id
	 *      parameters:
	 *      - name: id
	 *        in: path
	 *        description: Id of message
	 *        required: true
	 *        schema:
	 *          type: string
	 *      responses:
	 *        200:
	 *          description: messages result
	 *          content: {}
	 *        403:
	 *          description: Server error
	 *          content: {}
	 */

	/**
	 *  @swagger
	 *
	 *  /api/v1/messages/{id}:
	 *    put:
	 *      tags:
	 *      - "Messages"
	 *      summary: Update a message (auto generated)
	 *      description: Update message.
	 *      parameters:
	 *      - name: id
	 *        in: path
	 *        description: Id of message
	 *        required: true
	 *        schema:
	 *          type: string
	 *      requestBody:
	 *        content:
	 *          application/json:
	 *            schema:
	 *              required:
	 *              - title
	 *              - content
	 *              - chennel
	 *              type: object
	 *              properties:
	 *                title:
	 *                  type: string
	 *                  description: title of message
	 *                  default: message tilte
	 *                content:
	 *                  type: string
	 *                  description: content of message
	 *                  default: message content
	 *                channel:
	 *                  type: string
	 *                  description: the channel of message to send
	 *                  default: 
	 *        required: false
	 *      responses:
	 *        200:
	 *          description: Message update result
	 *          content: {}
	 *        403:
	 *          description: Server error
	 *          content: {}
	 *        422:
	 *          description: Missing parameters
	 *          content: {}
	 *      x-codegen-request-body-name: params
	 */

	/**
	 *  @swagger
	 *
	 *  /api/v1/messages/{id}:
	 *    delete:
	 *      tags:
	 *      - "Messages"
	 *      summary: Delete a message (auto generated)
	 *      description: Delete message by id
	 *      parameters:
	 *      - name: id
	 *        in: path
	 *        description: Id of message
	 *        required: true
	 *        schema:
	 *          type: string
	 *      responses:
	 *        200:
	 *          description: Delete result
	 *          content: {}
	 *        403:
	 *          description: Server error
	 *          content: {}
	 */
}
