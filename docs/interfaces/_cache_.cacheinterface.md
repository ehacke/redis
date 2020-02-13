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
* [delLists](_cache_.cacheinterface.md#dellists)
* [disable](_cache_.cacheinterface.md#disable)
* [enable](_cache_.cacheinterface.md#enable)
* [get](_cache_.cacheinterface.md#get)
* [getList](_cache_.cacheinterface.md#getlist)
* [invalidate](_cache_.cacheinterface.md#invalidate)
* [set](_cache_.cacheinterface.md#set)
* [setList](_cache_.cacheinterface.md#setlist)

## Methods

###  del

▸ **del**(`key`: string): *Promise‹void›*

*Defined in [cache.ts:25](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  delList

▸ **delList**(`key`: string): *Promise‹void›*

*Defined in [cache.ts:26](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  delLists

▸ **delLists**(): *Promise‹void›*

*Defined in [cache.ts:27](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L27)*

**Returns:** *Promise‹void›*

___

###  disable

▸ **disable**(): *void*

*Defined in [cache.ts:20](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L20)*

**Returns:** *void*

___

###  enable

▸ **enable**(): *void*

*Defined in [cache.ts:19](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L19)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *Promise‹T | null›*

*Defined in [cache.ts:23](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹T | null›*

___

###  getList

▸ **getList**(`key`: string): *Promise‹T[] | null›*

*Defined in [cache.ts:24](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹T[] | null›*

___

###  invalidate

▸ **invalidate**(`prefix?`: any): *Promise‹void›*

*Defined in [cache.ts:28](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix?` | any |

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(`key`: string, `instance`: T, `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Defined in [cache.ts:21](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L21)*

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

*Defined in [cache.ts:22](https://github.com/ehacke/redis/blob/0881c54/cache.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instances` | T[] |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*
