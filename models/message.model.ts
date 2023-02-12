import { model, models, Schema, Types } from 'mongoose';
import { definitionType, IMessage } from '../types';

const definition: definitionType<IMessage> = () => ({
	_id: Types.ObjectId,
	title: {
		type: String,
		max: 50,
		min: 2,
		unique: false,
		required: true,
		index: false,
    },
    content: {
		type: String,
		max: 200,
		min: 4,
		unique: false,
		required: true,
		index: false,
	},
    channel: {
		type: String,
		max: 200,
		min: 3,
		unique: false,
		required: true,
		index: true,
	},
	createdAt: {
		type: Date,
		required: false,
	},
});

export const messageMongoModel = (collection: string): unknown => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const schema = new Schema<IMessage>(definition(), { autoIndex: true });
	return models[collection] || model(collection, schema);
};
