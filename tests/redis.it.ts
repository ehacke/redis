/* eslint-disable no-process-env, no-unused-expressions */

import Promise from 'bluebird';
import { expect } from 'chai';
import { config } from 'dotenv';
import { v4 as uuid } from 'uuid';
import { Redis } from '../index';

config();
describe('integration tests', () => {
  let redis = null as null | Redis;

  afterEach(async () => {
    redis && (await redis.flushdb());
    redis && (await redis.disconnect());
  });

  it('debounces many calls using redis', async () => {
    redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    });

    let counter = 0;
    const updateCounter = () => ++counter;

    let calls = 0;
    const totalCalls = 100;

    const times = [...Array.from({ length: totalCalls }).keys()];
    const timeoutMs = 500;
    await Promise.map(
      times,
      async () => {
        calls++;
        // @ts-ignore
        await redis.debounce(updateCounter, 'foo', timeoutMs);
        await Promise.delay(50);
      },
      { concurrency: 10 }
    );

    await Promise.delay(timeoutMs * 2 + 50);

    expect(calls).to.eql(totalCalls);
    expect(counter).to.eql(2);
  });

  it('gets lock', async () => {
    redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    });

    const lockId = uuid();

    const lock = await redis.lock(lockId, 30);
    expect(lock).not.to.eql(null);

    const otherLock = await redis.lock(lockId, 30);
    expect(otherLock).to.eql(null);

    // @ts-ignore
    await lock.unlock();

    const lastLock = await redis.lock(lockId, 30);
    expect(lastLock).not.to.eql(null);
  });

  it('scan for keys', async () => {
    redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    });

    await redis.set('foo-thing', 10);
    await redis.set('foo-bar', 10);
    await redis.set('bar-foo', 10);

    const keys = await redis.scanPromise({ match: 'foo*' });

    expect(keys.length).to.eql(2);
  });

  it('zscan for keys', async () => {
    redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    });

    await redis.zadd('some-set', 10 as any, 'foo-thing');
    await redis.zadd('some-set', 10 as any, 'foo-bar');
    await redis.zadd('some-set', 10 as any, 'bar-foo');

    const keys = await redis.zscanPromise('some-set', { match: 'foo*' });

    // Includes the scores
    expect(keys.length).to.eql(4);
  });
});
