/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
'use strict';
import { Context } from 'moleculer';
import { Put, Method, Service } from '@ourparentcenter/moleculer-decorators-extended';
import { dbChannelMixin, eventsChannelMixin } from '../../mixins/dbMixins';
import { Config } from '../../common';
import {
	IChannel,
	MoleculerDBService,
	ChannelServiceSettingsOptions,
	ChannelsManipulateValueParams,
	ChannelsServiceOptions,
	RestOptions,
} from '../../types';

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
@Service<ChannelsServiceOptions>({
	name: 'channels',
	version: 1,
	/**
	 * Service guard token
	 */
	authToken: Config.CHANNEL_AUTH_TOKEN,
	/**
	 * Mixins
	 */
	mixins: [dbChannelMixin, eventsChannelMixin],
	/**
	 * Settings
	 */
	settings: {
		idField: '_id',
		// Available fields in the responses
		fields: ['_id', 'name'],
		// rest endpoint
		rest: '/',
		// rest: '/v1/channels',
		// Validator for the `create` & `insert` actions.
		entityValidator: {
			name: 'string|min:3',
		},
	},
})
export default class ChannelService extends MoleculerDBService<
	ChannelServiceSettingsOptions,
	IChannel
> {
	/**
	 * Loading sample data to the collection.
	 * It is called in the DB.mixin after the database
	 * connection establishing & the collection is empty.
	 */
	/**@Method
	async seedDB() {
		await this.adapter.insertMany([
			{ name: 'Java开发'},
			{ name: 'C++开发'},
			{ name: 'nodejs开发'},
		]);
	} 
	*/

	/**
	 * Fired after database connection establishing.
	 */
	@Method
	async afterConnected() {
		// After db connection
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
	 *  /api/v1/channels:
	 *    get:
	 *      tags:
	 *      - "Channels"
	 *      summary: Get all channels (auto generated)
	 *      description: Get all channels
	 *      responses:
	 *        200:
	 *          description: Channels result
	 *          content: {}
	 *        403:
	 *          description: Server error
	 *          content: {}
	 */

	/**
	 *  @swagger
	 *
	 *  /api/v1/channels:
	 *    post:
	 *      tags:
	 *      - "Channels"
	 *      summary: Create a channel (auto generated)
	 *      description: Create a channel
	 *      requestBody:
	 *        content:
	 *          application/json:
	 *            schema:
	 *              required:
	 *              - name
	 *              type: object
	 *              properties:
	 *                name:
	 *                  type: string
	 *                  description: Name to be used
	 *                  default: channel name
	 *        required: false
	 *      responses:
	 *        200:
	 *          description: Create channel result
	 *          content: {}
	 *        422:
	 *          description: Missing parameters
	 *          content: {}
	 *      x-codegen-request-body-name: params
	 */

	/**
	 *  @swagger
	 *
	 *  /api/v1/channels/{id}:
	 *    get:
	 *      tags:
	 *      - "Channels"
	 *      summary: Get channel by id (auto generated)
	 *      description: Get channel by id
	 *      parameters:
	 *      - name: id
	 *        in: path
	 *        description: Id of channel
	 *        required: true
	 *        schema:
	 *          type: string
	 *      responses:
	 *        200:
	 *          description: Channels result
	 *          content: {}
	 *        403:
	 *          description: Server error
	 *          content: {}
	 */

	/**
	 *  @swagger
	 *
	 *  /api/v1/channels/{id}:
	 *    put:
	 *      tags:
	 *      - "Channels"
	 *      summary: Update a channel (auto generated)
	 *      description: Update channel.
	 *      parameters:
	 *      - name: id
	 *        in: path
	 *        description: Id of Channel
	 *        required: true
	 *        schema:
	 *          type: string
	 *      requestBody:
	 *        content:
	 *          application/json:
	 *            schema:
	 *              required:
	 *              - name
	 *              type: object
	 *              properties:
	 *                name:
	 *                  type: string
	 *                  description: Name of channel
	 *                  default: channel name
	 *        required: false
	 *      responses:
	 *        200:
	 *          description: Channel update result
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
	 *  /api/v1/channels/{id}:
	 *    delete:
	 *      tags:
	 *      - "Channels"
	 *      summary: Delete a channel (auto generated)
	 *      description: Delete channel by id
	 *      parameters:
	 *      - name: id
	 *        in: path
	 *        description: Id of channel
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
