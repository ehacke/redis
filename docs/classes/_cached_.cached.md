[@ehacke/redis](../README.md) › ["cached"](../modules/_cached_.md) › [Cached](_cached_.cached.md)

# Class: Cached <**T**>

**`class`** 

## Type parameters

▪ **T**

## Hierarchy

* **Cached**

## Index

### Constructors

* [constructor](_cached_.cached.md#constructor)

### Properties

* [_cache](_cached_.cached.md#private-_cache)

### Accessors

* [cache](_cached_.cached.md#cache)

### Methods

* [configureCache](_cached_.cached.md#configurecache)

## Constructors

###  constructor

\+ **new Cached**(): *[Cached](_cached_.cached.md)*

*Defined in [cached.ts:53](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L53)*

**Returns:** *[Cached](_cached_.cached.md)*

## Properties

### `Private` _cache

• **_cache**: *[CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›*

*Defined in [cached.ts:78](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L78)*

## Accessors

###  cache

• **get cache**(): *[CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›*

*Defined in [cached.ts:74](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L74)*

Cache getter

**Returns:** *[CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›*

## Methods

###  configureCache

▸ **configureCache**(`services`: [ServicesInterface](../interfaces/_cache_.servicesinterface.md), `config`: [ConfigInterface](../interfaces/_cache_.configinterface.md)‹T›): *void*

*Defined in [cached.ts:66](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L66)*

Initialize cache configuration

**Parameters:**

Name | Type |
------ | ------ |
`services` | [ServicesInterface](../interfaces/_cache_.servicesinterface.md) |
`config` | [ConfigInterface](../interfaces/_cache_.configinterface.md)‹T› |

**Returns:** *void*
