[@ehacke/redis](../README.md) › ["cached"](../modules/_cached_.md) › [ConfigInterface](_cached_.configinterface.md)

# Interface: ConfigInterface <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **ConfigInterface**

## Index

### Properties

* [prefix](_cached_.configinterface.md#prefix)
* [resetOnReconnection](_cached_.configinterface.md#optional-resetonreconnection)
* [ttlSec](_cached_.configinterface.md#ttlsec)

### Methods

* [parseFromCache](_cached_.configinterface.md#parsefromcache)
* [stringifyForCache](_cached_.configinterface.md#stringifyforcache)

## Properties

###  prefix

• **prefix**: *string*

*Defined in [cached.ts:9](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L9)*

___

### `Optional` resetOnReconnection

• **resetOnReconnection**? : *undefined | false | true*

*Defined in [cached.ts:11](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L11)*

___

###  ttlSec

• **ttlSec**: *number*

*Defined in [cached.ts:10](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L10)*

## Methods

###  parseFromCache

▸ **parseFromCache**(`instance`: string): *Promise‹T› | T*

*Defined in [cached.ts:13](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | string |

**Returns:** *Promise‹T› | T*

___

###  stringifyForCache

▸ **stringifyForCache**(`instance`: T): *Promise‹string› | string*

*Defined in [cached.ts:12](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | T |

**Returns:** *Promise‹string› | string*
