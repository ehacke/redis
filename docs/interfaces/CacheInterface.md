[@ehacke/redis](../README.md) / CacheInterface

# Interface: CacheInterface<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`Cache`](../classes/Cache.md)

## Table of contents

### Methods

- [del](CacheInterface.md#del)
- [delList](CacheInterface.md#dellist)
- [delListSafe](CacheInterface.md#dellistsafe)
- [delLists](CacheInterface.md#dellists)
- [delSafe](CacheInterface.md#delsafe)
- [disable](CacheInterface.md#disable)
- [enable](CacheInterface.md#enable)
- [get](CacheInterface.md#get)
- [getList](CacheInterface.md#getlist)
- [getTime](CacheInterface.md#gettime)
- [invalidate](CacheInterface.md#invalidate)
- [set](CacheInterface.md#set)
- [setList](CacheInterface.md#setlist)
- [setListSafe](CacheInterface.md#setlistsafe)
- [setSafe](CacheInterface.md#setsafe)

## Methods

### del

▸ **del**(`key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:34](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L34)

___

### delList

▸ **delList**(`key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:36](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L36)

___

### delListSafe

▸ **delListSafe**(`key`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `setTime` | [`CacheTimestampInterface`](CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:37](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L37)

___

### delLists

▸ **delLists**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:38](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L38)

___

### delSafe

▸ **delSafe**(`key`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `setTime` | [`CacheTimestampInterface`](CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:35](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L35)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Defined in

[cache.ts:27](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L27)

___

### enable

▸ **enable**(): `void`

#### Returns

`void`

#### Defined in

[cache.ts:26](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L26)

___

### get

▸ **get**(`key`): `Promise`<``null`` \| `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `T`\>

#### Defined in

[cache.ts:32](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L32)

___

### getList

▸ **getList**(`key`): `Promise`<``null`` \| `T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `T`[]\>

#### Defined in

[cache.ts:33](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L33)

___

### getTime

▸ **getTime**(): `Promise`<[`CacheTimestampInterface`](CacheTimestampInterface.md)\>

#### Returns

`Promise`<[`CacheTimestampInterface`](CacheTimestampInterface.md)\>

#### Defined in

[cache.ts:40](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L40)

___

### invalidate

▸ **invalidate**(`prefix?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:39](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L39)

___

### set

▸ **set**(`key`, `instance`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instance` | `T` |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:28](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L28)

___

### setList

▸ **setList**(`key`, `instances`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instances` | `T`[] |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:30](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L30)

___

### setListSafe

▸ **setListSafe**(`key`, `instances`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instances` | `T`[] |
| `setTime` | [`CacheTimestampInterface`](CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:31](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L31)

___

### setSafe

▸ **setSafe**(`key`, `instance`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instance` | `T` |
| `setTime` | [`CacheTimestampInterface`](CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:29](https://github.com/ehacke/redis/blob/1b97b81/cache.ts#L29)
