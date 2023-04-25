[@ehacke/redis](../README.md) / Cache

# Class: Cache<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`CacheInterface`](../interfaces/CacheInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](Cache.md#constructor)

### Properties

- [config](Cache.md#config)
- [enabled](Cache.md#enabled)
- [invalidateOnConnection](Cache.md#invalidateonconnection)
- [services](Cache.md#services)
- [LIST\_PREFIX](Cache.md#list_prefix)
- [PREFIX\_TERMINATOR](Cache.md#prefix_terminator)
- [TIMESTAMP\_SEC\_PREFIX](Cache.md#timestamp_sec_prefix)
- [TIMESTAMP\_US\_PREFIX](Cache.md#timestamp_us_prefix)

### Methods

- [del](Cache.md#del)
- [delList](Cache.md#dellist)
- [delListSafe](Cache.md#dellistsafe)
- [delLists](Cache.md#dellists)
- [delSafe](Cache.md#delsafe)
- [disable](Cache.md#disable)
- [enable](Cache.md#enable)
- [get](Cache.md#get)
- [getKey](Cache.md#getkey)
- [getList](Cache.md#getlist)
- [getListKey](Cache.md#getlistkey)
- [getTime](Cache.md#gettime)
- [getTimeKeys](Cache.md#gettimekeys)
- [getTimeListKeys](Cache.md#gettimelistkeys)
- [getTtlSec](Cache.md#getttlsec)
- [invalidate](Cache.md#invalidate)
- [invalidateOnReconnection](Cache.md#invalidateonreconnection)
- [set](Cache.md#set)
- [setList](Cache.md#setlist)
- [setListSafe](Cache.md#setlistsafe)
- [setSafe](Cache.md#setsafe)
- [suppressConnectionError](Cache.md#suppressconnectionerror)

## Constructors

### constructor

• **new Cache**<`T`\>(`services`, `config`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `services` | `ServicesInterface` |
| `config` | `ConfigInterface`<`T`\> |

#### Defined in

[cache.ts:77](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L77)

## Properties

### config

• `Private` `Readonly` **config**: `ConfigInterface`<`T`\>

#### Defined in

[cache.ts:115](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L115)

___

### enabled

• `Private` **enabled**: `boolean`

#### Defined in

[cache.ts:117](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L117)

___

### invalidateOnConnection

• `Private` **invalidateOnConnection**: `boolean`

#### Defined in

[cache.ts:119](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L119)

___

### services

• `Private` `Readonly` **services**: `ServicesInterface`

#### Defined in

[cache.ts:113](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L113)

___

### LIST\_PREFIX

▪ `Static` `Readonly` **LIST\_PREFIX**: ``"--<<$$LIST$$>>--"``

#### Defined in

[cache.ts:67](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L67)

___

### PREFIX\_TERMINATOR

▪ `Static` `Readonly` **PREFIX\_TERMINATOR**: ``"--<<$$PRE_TERM$$>>--"``

#### Defined in

[cache.ts:65](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L65)

___

### TIMESTAMP\_SEC\_PREFIX

▪ `Static` `Readonly` **TIMESTAMP\_SEC\_PREFIX**: ``"--<<$$T_SEC$$>>--"``

#### Defined in

[cache.ts:69](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L69)

___

### TIMESTAMP\_US\_PREFIX

▪ `Static` `Readonly` **TIMESTAMP\_US\_PREFIX**: ``"--<<$$T_US$$>>--"``

#### Defined in

[cache.ts:71](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L71)

## Methods

### del

▸ **del**(`key`): `Promise`<`void`\>

Delete value from cache by key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[del](../interfaces/CacheInterface.md#del)

#### Defined in

[cache.ts:467](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L467)

___

### delList

▸ **delList**(`key`): `Promise`<`void`\>

Delete list value from cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[delList](../interfaces/CacheInterface.md#dellist)

#### Defined in

[cache.ts:512](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L512)

___

### delListSafe

▸ **delListSafe**(`key`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

Delete list value from cache by key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `setTime` | [`CacheTimestampInterface`](../interfaces/CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[delListSafe](../interfaces/CacheInterface.md#dellistsafe)

#### Defined in

[cache.ts:488](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L488)

___

### delLists

▸ **delLists**(): `Promise`<`void`\>

Delete all lists with prefix from cache

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[delLists](../interfaces/CacheInterface.md#dellists)

#### Defined in

[cache.ts:530](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L530)

___

### delSafe

▸ **delSafe**(`key`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

Safe delete value from cache by key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `setTime` | [`CacheTimestampInterface`](../interfaces/CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[delSafe](../interfaces/CacheInterface.md#delsafe)

#### Defined in

[cache.ts:443](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L443)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[disable](../interfaces/CacheInterface.md#disable)

#### Defined in

[cache.ts:226](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L226)

___

### enable

▸ **enable**(): `void`

#### Returns

`void`

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[enable](../interfaces/CacheInterface.md#enable)

#### Defined in

[cache.ts:219](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L219)

___

### get

▸ **get**(`key`): `Promise`<``null`` \| `T`\>

Get value from cache by key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `T`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[get](../interfaces/CacheInterface.md#get)

#### Defined in

[cache.ts:394](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L394)

___

### getKey

▸ **getKey**(`key`): `string`

Get prefixed key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[cache.ts:188](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L188)

___

### getList

▸ **getList**(`key`): `Promise`<``null`` \| `T`[]\>

Get list from cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `T`[]\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[getList](../interfaces/CacheInterface.md#getlist)

#### Defined in

[cache.ts:414](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L414)

___

### getListKey

▸ **getListKey**(`key`): `string`

Get prefixed list key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[cache.ts:198](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L198)

___

### getTime

▸ **getTime**(): `Promise`<[`CacheTimestampInterface`](../interfaces/CacheTimestampInterface.md)\>

Get time from redis

#### Returns

`Promise`<[`CacheTimestampInterface`](../interfaces/CacheTimestampInterface.md)\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[getTime](../interfaces/CacheInterface.md#gettime)

#### Defined in

[cache.ts:235](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L235)

___

### getTimeKeys

▸ **getTimeKeys**(`key`): `Object`

Get setTime keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `timestampMicrosecondKey` | `string` |
| `timestampSecondKey` | `string` |

#### Defined in

[cache.ts:162](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L162)

___

### getTimeListKeys

▸ **getTimeListKeys**(`key`): `Object`

Get setTime list keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `timestampMicrosecondKey` | `string` |
| `timestampSecondKey` | `string` |

#### Defined in

[cache.ts:175](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L175)

___

### getTtlSec

▸ **getTtlSec**(`overrideTtlSec?`): `number`

Get ttl seconds

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrideTtlSec?` | `number` |

#### Returns

`number`

#### Defined in

[cache.ts:208](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L208)

___

### invalidate

▸ **invalidate**(`prefix?`): `Promise`<`void`\>

Invalidate any entries for this cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[invalidate](../interfaces/CacheInterface.md#invalidate)

#### Defined in

[cache.ts:541](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L541)

___

### invalidateOnReconnection

▸ `Private` **invalidateOnReconnection**<`I`\>(`result`): `Promise`<``null`` \| `I`\>

Invalidate on reconnection

#### Type parameters

| Name |
| :------ |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `I` |

#### Returns

`Promise`<``null`` \| `I`\>

#### Defined in

[cache.ts:144](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L144)

___

### set

▸ **set**(`key`, `instance`, `overrideTtlSec?`): `Promise`<`void`\>

Set value in cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instance` | `T` |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[set](../interfaces/CacheInterface.md#set)

#### Defined in

[cache.ts:291](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L291)

___

### setList

▸ **setList**(`key`, `instances`, `overrideTtlSec?`): `Promise`<`void`\>

Set list in cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instances` | `T`[] |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[setList](../interfaces/CacheInterface.md#setlist)

#### Defined in

[cache.ts:363](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L363)

___

### setListSafe

▸ **setListSafe**(`key`, `instances`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

Set list in cache if setTime is latest

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instances` | `T`[] |
| `setTime` | [`CacheTimestampInterface`](../interfaces/CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[setListSafe](../interfaces/CacheInterface.md#setlistsafe)

#### Defined in

[cache.ts:325](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L325)

___

### setSafe

▸ **setSafe**(`key`, `instance`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

Set the cache, but only if the provided times are the latest

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instance` | `T` |
| `setTime` | [`CacheTimestampInterface`](../interfaces/CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/CacheInterface.md).[setSafe](../interfaces/CacheInterface.md#setsafe)

#### Defined in

[cache.ts:253](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L253)

___

### suppressConnectionError

▸ `Private` **suppressConnectionError**(`error`): ``null``

Suppress connection errors

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Object` |
| `error.message` | `string` |

#### Returns

``null``

#### Defined in

[cache.ts:128](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L128)
