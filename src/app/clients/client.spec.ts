import { Client } from './client';

describe('Client', () => {
  it('should create an instance', () => {
    const client: Client = new Client(
      1,
      'Name',
      'surname',
      'email@email.com',
      '1983-10-06',
      '2023-08-28',
      '');
    expect(client).toBeTruthy();
  });
});
