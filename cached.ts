import { Cache, CacheInterface, CacheTimestampInterface } from './cache.ts';
import { Redis } from './redis.js';

interface ServicesInterface {
  redis: Redis;
}

interface ConfigInterface<T> {
  prefix: string;
  ttlSec: number;
  resetOnReconnection?: boolean;
  stringifyForCache(instance: T): Promise<string> | string;
  parseFromCache(instance: string): Promise<T> | T;
}



class NoCache<T> implements CacheInterface<T> {
  async del(): Promise<void> {}

  async delSafe(): Promise<void> {}

  async delList(): Promise<void> {
    return undefined;
  }

  async delListSafe(): Promise<void> {
    return undefined;
  }

  async delLists(): Promise<void> {
    return undefined;
  }

  disable(): void {}

  enable(): void {}

  async get(): Promise<T | null> {
    return null;
  }

  async getList(): Promise<T[] | null> {
    return null;
  }

  async invalidate(): Promise<void> {}

  async set(): Promise<void> {}

  async setSafe(): Promise<void> {}

  async setList(): Promise<void> {}

  async setListSafe(): Promise<void> {}

  async getTime(): Promise<CacheTimestampInterface> {
    return {
      microseconds: 0,
      seconds: 0,
    };
  }
}



/**
 * @class
 */
export class Cached<T> {
  /**
   */
  constructor() {
    this._cache = new NoCache<T>();
  }

  /**
   * Initialize cache configuration
   *
   * @param {ServicesInterface} services
   * @param {ConfigInterface} config
   * @returns {void}
   */
  configureCache(services: ServicesInterface, config: ConfigInterface<T>): void {
    this._cache = new Cache<T>(services, config);
  }

  /**
   * Cache getter
   *
   * @returns {CacheInterface<T>}
   */
  get cache(): CacheInterface<T> {
    return this._cache;
  }

  private _cache: CacheInterface<T>;
}
