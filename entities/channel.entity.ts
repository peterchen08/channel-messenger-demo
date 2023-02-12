import { JsonObject, JsonProperty } from 'json2typescript';
import { Types } from 'mongoose';
import { Config } from '../common';

export interface IChannel {
	_id: Types.ObjectId | string | null;
	name: string;
}

@JsonObject('Channel')
export class ForumChannelEntity implements IChannel {
	@JsonProperty('_id', String, true)
	public _id = Config.DB_CHANNEL.dialect === 'local' ? new Types.ObjectId() : null;

	@JsonProperty('name', String)
	public name = '';

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public getMongoEntity() {
		// eslint-disable-next-line no-underscore-dangle
		return { ...this, _id: this._id && (this._id as Types.ObjectId).toString() };
	}
}
