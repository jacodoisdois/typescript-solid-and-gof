import Client from './Client';

export default class Notify {
  constructor(private client: Client) {}

  sendEmail(): boolean {
    console.log('Sending e-mail...');
    return true;
  }
}
