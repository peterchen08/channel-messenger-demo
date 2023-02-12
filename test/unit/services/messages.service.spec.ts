import Moleculer, { Context, ServiceBroker } from 'moleculer';
import TestService from '../../../services/messageService/messages.service';
import ValidationError = Moleculer.Errors.ValidationError;

describe('Test "messages" service', () => {

  describe('Test hooks', () => {
    // const broker = new ServiceBroker({ logger: false });
    const createActionFn = jest.fn();

    const broker = new ServiceBroker({ logger: false });
    const service = broker.createService(TestService);
    service.actions.create = createActionFn;

    beforeAll(() => broker.start());
    afterAll(() => broker.stop());

    xdescribe('Test before "create" hook', () => {
      it('should add quantity with zero', async () => {
        await broker.call('messages.create', {
          _id: '111',
		  title: 'Test message',
		  content:'Test content',
		  channel:'123'
        });

        expect(createActionFn).toBeCalledTimes(1);
        expect(createActionFn.mock.calls[0][0].params).toEqual({
          _id: '111',
		  title: 'Test message',
		  content:'Test content',
		  channel:'123'
        });
      });
    });
  });
});