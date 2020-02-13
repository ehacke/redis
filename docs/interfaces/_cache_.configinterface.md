[@ehacke/redis](../README.md) › ["cache"](../modules/_cache_.md) › [ConfigInterface](_cache_.configinterface.md)

# Interface: ConfigInterface <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **ConfigInterface**

## Index

### Properties

* [prefix](_cache_.configinterface.md#prefix)
* [resetOnReconnection](_cache_.configinterface.md#optional-resetonreconnection)
* [ttlSec](_cache_.configinterface.md#ttlsec)

### Methods

* [parseFromCache](_cache_.configinterface.md#parsefromcache)
* [stringifyForCache](_cache_.configinterface.md#stringifyforcache)

## Properties

###  prefix

• **prefix**: *string*

*Defined in [cache.ts:11](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L11)*

___

### `Optional` resetOnReconnection

• **resetOnReconnection**? : *undefined | false | true*

*Defined in [cache.ts:13](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L13)*

___

###  ttlSec

• **ttlSec**: *number*

*Defined in [cache.ts:12](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L12)*

## Methods

###  parseFromCache

▸ **parseFromCache**(`instance`: string): *Promise‹T› | T*

*Defined in [cache.ts:15](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | string |

**Returns:** *Promise‹T› | T*

___

###  stringifyForCache

▸ **stringifyForCache**(`instance`: T): *Promise‹string› | string*

*Defined in [cache.ts:14](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | T |

**Returns:** *Promise‹string› | string*
