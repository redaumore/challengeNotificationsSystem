import { Container } from 'inversify';
import TYPES from './container.types';
import { Recipient } from './domain/Recipient';
import { Notification } from './domain/Notification';

const container = new Container();
container.bind<Recipient>(TYPES.Recipient).to(Recipient);
container.bind<Notification>(TYPES.Notification).to(Notification);

export default container;
