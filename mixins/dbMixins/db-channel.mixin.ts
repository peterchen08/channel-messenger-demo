'use strict';
import { channelMongoModel } from '../../models';
import { Config } from '../../common';
import { ForumChannelEntity } from '../../entities';
import { DbBaseMixin } from './db-base.mixin';
import { dbSeed } from './helpers.mixin';

const dbInfo = Config.DB_CHANNEL;

const dbBaseMixin = new DbBaseMixin({
	dbInfo,
	name: 'dbChannelMixin',
	collection: dbInfo.collection,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	model: channelMongoModel(dbInfo.collection),
});

export const dbChannelMixin = dbBaseMixin.getMixin(dbSeed(dbInfo, ForumChannelEntity));
export const eventsChannelMixin = dbBaseMixin.getEvents([dbBaseMixin.cacheCleanEventName]);
