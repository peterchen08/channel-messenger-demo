'use strict';
import { messageMongoModel } from '../../models';
import { Config } from '../../common';
import { MessageEntity } from '../../entities';
import { DbBaseMixin } from './db-base.mixin';
import { dbSeed } from './helpers.mixin';

const dbInfo = Config.DB_MESSAGE;

const dbBaseMixin = new DbBaseMixin({
	dbInfo,
	name: 'dbMessageMixin',
	collection: dbInfo.collection,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	model: messageMongoModel(dbInfo.collection),
});

export const dbMessageMixin = dbBaseMixin.getMixin(dbSeed(dbInfo, MessageEntity));
export const eventsMessageMixin = dbBaseMixin.getEvents([dbBaseMixin.cacheCleanEventName]);
