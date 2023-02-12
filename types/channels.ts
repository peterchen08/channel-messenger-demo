import { Options } from '@ourparentcenter/moleculer-decorators-extended';
import { DbServiceSettings } from 'moleculer-db';
import { IChannel } from '../entities';

export interface ChannelServiceSettingsOptions extends DbServiceSettings {
	// rest?: '/v1/channels';
	rest?: string;
	fields: (keyof Required<IChannel>)[];
}

export interface ChannelsServiceOptions extends Options {
	name: 'channels';
	settings: ChannelServiceSettingsOptions;
}

export interface ChannelsManipulateValueParams {
	id: string;
}

export interface ChannelsRecordParams {
	name: string;
}
