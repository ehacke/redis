[@ehacke/redis](../README.md) › ["cache"](../modules/_cache_.md) › [CacheInterface](_cache_.cacheinterface.md)

# Interface: CacheInterface <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **CacheInterface**

## Implemented by

* [Cache](../classes/_cache_.cache.md)
* [NoCache](../classes/_cached_.nocache.md)

## Index

### Methods

* [del](_cache_.cacheinterface.md#del)
* [delList](_cache_.cacheinterface.md#dellist)
* [delListSafe](_cache_.cacheinterface.md#dellistsafe)
* [delLists](_cache_.cacheinterface.md#dellists)
* [delSafe](_cache_.cacheinterface.md#delsafe)
* [disable](_cache_.cacheinterface.md#disable)
* [enable](_cache_.cacheinterface.md#enable)
* [get](_cache_.cacheinterface.md#get)
* [getList](_cache_.cacheinterface.md#getlist)
* [getTime](_cache_.cacheinterface.md#gettime)
* [invalidate](_cache_.cacheinterface.md#invalidate)
* [set](_cache_.cacheinterface.md#set)
* [setList](_cache_.cacheinterface.md#setlist)
* [setListSafe](_cache_.cacheinterface.md#setlistsafe)
* [setSafe](_cache_.cacheinterface.md#setsafe)

## Methods

###  del

▸ **del**(`key`: string): *Promise‹void›*

*Defined in [cache.ts:29](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  delList

▸ **delList**(`key`: string): *Promise‹void›*

*Defined in [cache.ts:31](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  delListSafe

▸ **delListSafe**(`key`: string, `setTime`: [SetTimeInterface](_cache_.settimeinterface.md), `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Defined in [cache.ts:32](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`setTime` | [SetTimeInterface](_cache_.settimeinterface.md) |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  delLists

▸ **delLists**(): *Promise‹void›*

*Defined in [cache.ts:33](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L33)*

**Returns:** *Promise‹void›*

___

###  delSafe

▸ **delSafe**(`key`: string, `setTime`: [SetTimeInterface](_cache_.settimeinterface.md), `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Defined in [cache.ts:30](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`setTime` | [SetTimeInterface](_cache_.settimeinterface.md) |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  disable

▸ **disable**(): *void*

*Defined in [cache.ts:22](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L22)*

**Returns:** *void*

___

###  enable

▸ **enable**(): *void*

*Defined in [cache.ts:21](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L21)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *Promise‹T | null›*

*Defined in [cache.ts:27](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹T | null›*

___

###  getList

▸ **getList**(`key`: string): *Promise‹T[] | null›*

*Defined in [cache.ts:28](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹T[] | null›*

___

###  getTime

▸ **getTime**(): *Promise‹[SetTimeInterface](_cache_.settimeinterface.md)›*

*Defined in [cache.ts:35](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L35)*

**Returns:** *Promise‹[SetTimeInterface](_cache_.settimeinterface.md)›*

___

###  invalidate

▸ **invalidate**(`prefix?`: any): *Promise‹void›*

*Defined in [cache.ts:34](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix?` | any |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`key`: string, `instance`: T, `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Defined in [cache.ts:23](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L23)*

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

*Defined in [cache.ts:25](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instances` | T[] |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  setListSafe

▸ **setListSafe**(`key`: string, `instances`: T[], `setTime`: [SetTimeInterface](_cache_.settimeinterface.md), `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Defined in [cache.ts:26](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instances` | T[] |
`setTime` | [SetTimeInterface](_cache_.settimeinterface.md) |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  setSafe

▸ **setSafe**(`key`: string, `instance`: T, `setTime`: [SetTimeInterface](_cache_.settimeinterface.md), `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Defined in [cache.ts:24](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instance` | T |
`setTime` | [SetTimeInterface](_cache_.settimeinterface.md) |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*
