import { Trainer } from './trainer';
import { Client } from './client';

export class ClientAssignation {
  constructor(public trainer: Trainer, public clientList: Client[] = []) {}
}
