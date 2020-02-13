[@ehacke/redis](../README.md) › ["cache"](../modules/_cache_.md) › [Cache](_cache_.cache.md)

# Class: Cache <**T**>

**`class`** 

## Type parameters

▪ **T**

## Hierarchy

* **Cache**

## Implements

* [CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›

## Index

### Constructors

* [constructor](_cache_.cache.md#constructor)

### Properties

* [config](_cache_.cache.md#private-config)
* [enabled](_cache_.cache.md#private-enabled)
* [invalidateOnConnection](_cache_.cache.md#private-invalidateonconnection)
* [services](_cache_.cache.md#private-services)
* [LIST_PREFIX](_cache_.cache.md#static-list_prefix)
* [PREFIX_TERMINATOR](_cache_.cache.md#static-prefix_terminator)

### Methods

* [del](_cache_.cache.md#del)
* [delList](_cache_.cache.md#dellist)
* [delLists](_cache_.cache.md#dellists)
* [disable](_cache_.cache.md#disable)
* [enable](_cache_.cache.md#enable)
* [get](_cache_.cache.md#get)
* [getList](_cache_.cache.md#getlist)
* [invalidate](_cache_.cache.md#invalidate)
* [invalidateOnReconnection](_cache_.cache.md#private-invalidateonreconnection)
* [set](_cache_.cache.md#set)
* [setList](_cache_.cache.md#setlist)
* [suppressConnectionError](_cache_.cache.md#private-suppressconnectionerror)

## Constructors

###  constructor

\+ **new Cache**(`services`: [ServicesInterface](../interfaces/_cache_.servicesinterface.md), `config`: [ConfigInterface](../interfaces/_cache_.configinterface.md)‹T›): *[Cache](_cache_.cache.md)*

*Defined in [cache.ts:39](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L39)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`services` | [ServicesInterface](../interfaces/_cache_.servicesinterface.md) | - |
`config` | [ConfigInterface](../interfaces/_cache_.configinterface.md)‹T› |   |

**Returns:** *[Cache](_cache_.cache.md)*

## Properties

### `Private` config

• **config**: *[ConfigInterface](../interfaces/_cache_.configinterface.md)‹T›*

*Defined in [cache.ts:74](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L74)*

___

### `Private` enabled

• **enabled**: *boolean*

*Defined in [cache.ts:76](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L76)*

___

### `Private` invalidateOnConnection

• **invalidateOnConnection**: *boolean*

*Defined in [cache.ts:78](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L78)*

___

### `Private` services

• **services**: *[ServicesInterface](../interfaces/_cache_.servicesinterface.md)*

*Defined in [cache.ts:72](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L72)*

___

### `Static` LIST_PREFIX

▪ **LIST_PREFIX**: *"--<<$$LIST$$>>--"* = "--<<$$LIST$$>>--"

*Defined in [cache.ts:39](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L39)*

___

### `Static` PREFIX_TERMINATOR

▪ **PREFIX_TERMINATOR**: *"--<<$$PRE_TERM$$>>--"* = "--<<$$PRE_TERM$$>>--"

*Defined in [cache.ts:37](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L37)*

## Methods

###  del

▸ **del**(`key`: string): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:252](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L252)*

Delete value from cache by key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  delList

▸ **delList**(`key`: string): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:270](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L270)*

Delete list value from cache

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  delLists

▸ **delLists**(): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:287](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L287)*

Delete all lists with prefix from cache

**Returns:** *Promise‹void›*

___

###  disable

▸ **disable**(): *void*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:122](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L122)*

**Returns:** *void*

___

###  enable

▸ **enable**(): *void*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:115](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L115)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *Promise‹T | null›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:207](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L207)*

Get value from cache by key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹T | null›*

___

###  getList

▸ **getList**(`key`: string): *Promise‹T[] | null›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:226](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L226)*

Get list from cache

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹T[] | null›*

___

###  invalidate

▸ **invalidate**(`prefix`: string): *Promise‹void›*

*Defined in [cache.ts:297](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L297)*

Invalidate any entries for this cache

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`prefix` | string | this.config.prefix |

**Returns:** *Promise‹void›*

___

### `Private` invalidateOnReconnection

▸ **invalidateOnReconnection**<**T**>(`result`: T): *Promise‹T | null›*

*Defined in [cache.ts:100](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L100)*

Invalidate on reconnection

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

**Returns:** *Promise‹T | null›*

___

###  set

▸ **set**(`key`: string, `instance`: T, `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:133](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L133)*

Set value in cache

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instance` | T |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  setList

▸ **setList**(`key`: string, `instances`: T[], `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:171](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L171)*

Set list in cache

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instances` | T[] |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

### `Private` suppressConnectionError

▸ **suppressConnectionError**(`error`: object): *null*

*Defined in [cache.ts:85](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L85)*

Suppress connection errors

**Parameters:**

▪ **error**: *object*

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *null*
