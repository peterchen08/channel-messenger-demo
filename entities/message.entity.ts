import { JsonObject, JsonProperty } from 'json2typescript';
import { Types } from 'mongoose';
import { Config } from '../common';

export interface IMessage {
	_id: Types.ObjectId | string | null;
	title: string;
	content: string;
    channel: string;
    createdAt: Date | null;
}

@JsonObject('Message')
export class MessageEntity implements IMessage {
	@JsonProperty('_id', String, true)
	public _id = Config.DB_MESSAGE.dialect === 'local' ? new Types.ObjectId() : null;

	@JsonProperty('title', String)
	public title = '';

	@JsonProperty('content', String)
	public content = '';

	@JsonProperty('channel', String)
    public channel = '';
    
    @JsonProperty('createdAt', Date)
	public createdAt = null;

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public getMongoEntity() {
		// eslint-disable-next-line no-underscore-dangle
		return { ...this, _id: this._id && (this._id as Types.ObjectId).toString() };
	}
}
