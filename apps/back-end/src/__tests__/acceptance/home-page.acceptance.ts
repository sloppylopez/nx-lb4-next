import {Client, expect} from '@loopback/testlab';
import {BackEndApplication} from '../../';
import {setupApplication} from './test-helper';

describe('HomePage', () => {
  let app: BackEndApplication;
  let client: Client;

  beforeAll(async () => {
    ({app, client} = await setupApplication());
  });

  afterAll(async () => {
    await app.stop();
  });

  it('exposes a default home page', async () => {
    await client
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/);
  });

  it('exposes self-hosted explorer', async () => {
    await client
      .get('/explorer/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .expect(/<title>LoopBack API Explorer/);
  });

  it('invokes GET /ping', async () => {
    const res = await client.get('/ping').expect(200);
    expect(res.body).to.containEql({greeting: 'Hello from LoopBack'});
  });
});
