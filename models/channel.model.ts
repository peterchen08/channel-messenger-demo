import { model, models, Schema, Types } from 'mongoose';
import { definitionType, IChannel } from '../types';

const definition: definitionType<IChannel> = () => ({
	_id: Types.ObjectId,
	name: {
		type: String,
		max: 50,
		min: 6,
		unique: true,
		required: true,
		index: true,
	},
});

export const channelMongoModel = (collection: string): unknown => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const schema = new Schema<IChannel>(definition(), { autoIndex: true });
	return models[collection] || model(collection, schema);
};
