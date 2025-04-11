import Promise from 'bluebird';
import { expect } from 'chai';
import { config } from 'dotenv';
import { Cached, Redis } from '../index.ts';

import { CacheTimestampInterface } from '../cache.ts';

config();

describe('cached integration tests', () => {
  let redis: Redis;

  beforeEach(async () => {
    redis = new Redis({
      host: process.env.REDIS_HOST,

      port: Number.parseInt(process.env.REDIS_PORT as string),
    });

    await redis.flushdb();
  });

  after(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    redis && (await redis.disconnect());
  });

  it('set and get values in cache', async () => {
    const cached = new Cached<string>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 10,
      }
    );

    await cached.cache.set('foo', 'bar');
    expect(await cached.cache.get('foo')).to.eql('bar');
  });

  it('set and get complex values in cache', async () => {
    const cached = new Cached<{ foo: string; bar: number }>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => JSON.parse(result),
        prefix: 'something',
        stringifyForCache: (result) => JSON.stringify(result),
        ttlSec: 10,
      }
    );

    await cached.cache.set('foo', { bar: 9, foo: 'something' });
    expect(await cached.cache.get('foo')).to.eql({ bar: 9, foo: 'something' });
  });

  it('set and get complex list values in cache', async () => {
    const cached = new Cached<{ foo: string; bar: number }>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => JSON.parse(result),
        prefix: 'something',
        stringifyForCache: (result) => JSON.stringify(result),
        ttlSec: 10,
      }
    );

    await cached.cache.set('foo', { bar: 90, foo: 'no-conflict' });

    await cached.cache.setList('foo', [
      { bar: 9, foo: 'something' },
      { bar: 1, foo: 'another' },
    ]);
    expect(await cached.cache.getList('foo')).to.eql([
      { bar: 9, foo: 'something' },
      { bar: 1, foo: 'another' },
    ]);

    expect(await cached.cache.get('foo')).to.eql({
      bar: 90,
      foo: 'no-conflict',
    });
  });

  it('clear specific list values in cache', async () => {
    const cached = new Cached<{ foo: string; bar: number }>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => JSON.parse(result),
        prefix: 'something',
        stringifyForCache: (result) => JSON.stringify(result),
        ttlSec: 10,
      }
    );

    await cached.cache.set('foo', { bar: 90, foo: 'no-conflict' });

    await cached.cache.setList('foo', [
      { bar: 9, foo: 'something' },
      { bar: 1, foo: 'another' },
    ]);
    await cached.cache.setList('other-foo', [
      { bar: 9, foo: 'something' },
      { bar: 1, foo: 'another' },
    ]);
    await cached.cache.delList('foo');

    expect(await cached.cache.getList('foo')).to.eql(null);
    expect(await cached.cache.getList('other-foo')).to.eql([
      { bar: 9, foo: 'something' },
      { bar: 1, foo: 'another' },
    ]);

    expect(await cached.cache.get('foo')).to.eql({
      bar: 90,
      foo: 'no-conflict',
    });
  });

  it('clear all list values in cache', async () => {
    const cached = new Cached<{ foo: string; bar: number }>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => JSON.parse(result),
        prefix: 'something',
        stringifyForCache: (result) => JSON.stringify(result),
        ttlSec: 10,
      }
    );

    await cached.cache.set('foo', { bar: 90, foo: 'no-conflict' });

    await cached.cache.setList('foo', [
      { bar: 9, foo: 'something' },
      { bar: 1, foo: 'another' },
    ]);
    await cached.cache.setList('other-foo', [
      { bar: 9, foo: 'something' },
      { bar: 1, foo: 'another' },
    ]);
    await cached.cache.delLists();

    expect(await cached.cache.getList('foo')).to.eql(null);
    expect(await cached.cache.getList('other-foo')).to.eql(null);

    expect(await cached.cache.get('foo')).to.eql({
      bar: 90,
      foo: 'no-conflict',
    });
  });

  it('clear empty lists', async () => {
    const cached = new Cached<{ foo: string; bar: number }>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => JSON.parse(result),
        prefix: 'something',
        stringifyForCache: (result) => JSON.stringify(result),
        ttlSec: 10,
      }
    );

    // Was throwing an exception
    await cached.cache.delLists();

    expect(await cached.cache.getList('foo')).to.eql(null);
  });

  it('honors prefix', async () => {
    const cached = new Cached<string>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 10,
      }
    );
    const otherCached = new Cached<string>();
    otherCached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something-else',
        stringifyForCache: (result) => result,
        ttlSec: 10,
      }
    );

    await cached.cache.set('foo', 'bar');
    expect(await otherCached.cache.get('foo')).to.eql(null);
  });

  it('expires', async () => {
    const cached = new Cached<string>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 1,
      }
    );

    await cached.cache.set('foo', 'bar');
    await new Promise((resolve) => setTimeout(resolve, 1400));
    expect(await cached.cache.get('foo')).to.eql(null);
  });

  it('expires with overridden ttl', async () => {
    const cached = new Cached<string>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 10,
      }
    );

    await cached.cache.set('foo', 'bar', 1);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    expect(await cached.cache.get('foo')).to.eql(null);
  });

  it('deletes', async () => {
    const cached = new Cached<string>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 10,
      }
    );

    await cached.cache.set('foo', 'bar');
    await cached.cache.del('foo');
    expect(await cached.cache.get('foo')).to.eql(null);
  });

  it('invalidates', async () => {
    const cached = new Cached<string>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 10,
      }
    );
    const otherCached = new Cached<string>();
    otherCached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something-else',
        stringifyForCache: (result) => result,
        ttlSec: 10,
      }
    );

    await cached.cache.set('foo', 'bar1');
    await otherCached.cache.set('foo', 'bar2');

    await cached.cache.invalidate();

    expect(await cached.cache.get('foo')).to.eql(null);
    expect(await otherCached.cache.get('foo')).to.eql('bar2');
  });

  it('wraps class nicely', async () => {
    class Foo extends Cached<string> {
      constructor() {
        super();

        this.configureCache(
          { redis },
          {
            parseFromCache: (result) => result,
            prefix: 'something',
            stringifyForCache: (result) => result,
            ttlSec: 10,
          }
        );
      }

      async set(key: string, value: string) {
        await this.cache.set(key, value);
      }

      async get(key: string) {
        return this.cache.get(key);
      }
    }

    const foo = new Foo();

    await foo.set('foo', 'bar');
    expect(await foo.get('foo')).to.eql('bar');
  });

  it('with bad connection, get returns null', async () => {
    const notHereRedis = new Redis('not-here:6379', {
      enableOfflineQueue: false,
    });
    const cached = new Cached<string>();
    cached.configureCache(
      { redis: notHereRedis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 1,
      }
    );

    await cached.cache.set('foo', 'bar');
    expect(await cached.cache.get('foo')).to.eql(null);
    notHereRedis.disconnect();
  });

  it('with bad connection, invalidate on reconnection', async () => {
    const cached = new Cached<string>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 1,
      }
    );

    await cached.cache.set('foo', 'bar');
    expect(await cached.cache.get('foo')).to.eql('bar');

    const oldSetex = redis.setex;
    redis.setex = () => Promise.reject(new Error("stream isn't writeable"));

    await cached.cache.set('foo', 'bar');
    expect(await cached.cache.get('foo')).to.eql(null);
    expect(await cached.cache.get('foo')).to.eql(null);

    redis.setex = oldSetex;

    await cached.cache.set('foo', 'bar');
    expect(await cached.cache.get('foo')).to.eql('bar');
  });
});

describe('safely operate on cache', () => {
  let redis: Redis;

  beforeEach(async () => {
    redis = new Redis({
      host: process.env.REDIS_HOST,

      port: Number.parseInt(process.env.REDIS_PORT as string),
    });

    await redis.flushdb();
  });

  after(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    redis && (await redis.disconnect());
  });

  it('do not set if old', async () => {
    const cached = new Cached<string>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 1,
      }
    );

    const someKey = 'foobar';
    expect(await cached.cache.get(someKey)).to.eql(null);

    const firstSetTime: CacheTimestampInterface = {
      microseconds: 5,
      seconds: 10,
    };

    await cached.cache.setSafe(someKey, 'first', firstSetTime);
    expect(await cached.cache.get(someKey)).to.eql('first');

    const secondSetTime: CacheTimestampInterface = {
      microseconds: 5,
      seconds: 12,
    };

    await cached.cache.setSafe(someKey, 'second', secondSetTime);
    expect(await cached.cache.get(someKey)).to.eql('second');

    await cached.cache.setSafe(someKey, 'first', firstSetTime);
    expect(await cached.cache.get(someKey)).to.eql('second');
  });

  it('del if old, but still update times', async () => {
    const cached = new Cached<string>();
    cached.configureCache(
      { redis },
      {
        parseFromCache: (result) => result,
        prefix: 'something',
        stringifyForCache: (result) => result,
        ttlSec: 1,
      }
    );

    const someKey = 'foobar';
    expect(await cached.cache.get(someKey)).to.eql(null);

    const firstSetTime: CacheTimestampInterface = {
      microseconds: 5,
      seconds: 10,
    };

    await cached.cache.setSafe(someKey, 'first', firstSetTime);
    expect(await cached.cache.get(someKey)).to.eql('first');

    const secondSetTime: CacheTimestampInterface = {
      microseconds: 5,
      seconds: 12,
    };

    await cached.cache.setSafe(someKey, 'second', secondSetTime);
    expect(await cached.cache.get(someKey)).to.eql('second');

    await cached.cache.delSafe(someKey, firstSetTime);
    expect(await cached.cache.get(someKey)).to.eql(null);

    const thirdSetTime: CacheTimestampInterface = {
      microseconds: 5,
      seconds: 16,
    };

    await cached.cache.setSafe(someKey, 'first', firstSetTime);
    expect(await cached.cache.get(someKey)).to.eql(null);

    await cached.cache.setSafe(someKey, 'third', thirdSetTime);
    expect(await cached.cache.get(someKey)).to.eql('third');
  });
});
