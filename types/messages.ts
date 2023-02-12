import { Options } from '@ourparentcenter/moleculer-decorators-extended';
import { DbServiceSettings } from 'moleculer-db';
import { IMessage } from '../entities';

export interface MessageServiceSettingsOptions extends DbServiceSettings {
	// rest?: '/v1/messages';
	rest?: string;
	fields: (keyof Required<IMessage>)[];
}

export interface MessagesServiceOptions extends Options {
	name: 'messages';
	settings: MessageServiceSettingsOptions;
}

export interface MessagesManipulateValueParams {
	id: string;
	value: number;
}

export interface MessagesListManipulateValueParams {
	channelId: string;
	page: number;
}

export interface MessagesRecordParams {
	name: string;
	price: number;
}
