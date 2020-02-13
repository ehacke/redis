[@ehacke/redis](../README.md) › ["cached"](../modules/_cached_.md) › [NoCache](_cached_.nocache.md)

# Class: NoCache <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **NoCache**

## Implements

* [CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›

## Index

### Methods

* [del](_cached_.nocache.md#del)
* [delList](_cached_.nocache.md#dellist)
* [delLists](_cached_.nocache.md#dellists)
* [disable](_cached_.nocache.md#disable)
* [enable](_cached_.nocache.md#enable)
* [get](_cached_.nocache.md#get)
* [getList](_cached_.nocache.md#getlist)
* [invalidate](_cached_.nocache.md#invalidate)
* [set](_cached_.nocache.md#set)
* [setList](_cached_.nocache.md#setlist)

## Methods

###  del

▸ **del**(): *Promise‹void›*

*Defined in [cached.ts:19](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L19)*

**Returns:** *Promise‹void›*

___

###  delList

▸ **delList**(): *Promise‹void›*

*Defined in [cached.ts:21](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L21)*

**Returns:** *Promise‹void›*

___

###  delLists

▸ **delLists**(): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cached.ts:25](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L25)*

**Returns:** *Promise‹void›*

___

###  disable

▸ **disable**(): *void*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cached.ts:29](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L29)*

**Returns:** *void*

___

###  enable

▸ **enable**(): *void*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cached.ts:31](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L31)*

**Returns:** *void*

___

###  get

▸ **get**(): *Promise‹T | null›*

*Defined in [cached.ts:33](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L33)*

**Returns:** *Promise‹T | null›*

___

###  getList

▸ **getList**(): *Promise‹T[] | null›*

*Defined in [cached.ts:37](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L37)*

**Returns:** *Promise‹T[] | null›*

___

###  invalidate

▸ **invalidate**(): *Promise‹void›*

*Defined in [cached.ts:41](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L41)*

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(): *Promise‹void›*

*Defined in [cached.ts:43](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L43)*

**Returns:** *Promise‹void›*

___

###  setList

▸ **setList**(): *Promise‹void›*

*Defined in [cached.ts:45](https://github.com/ehacke/redis/blob/0881c54/cached.ts#L45)*

**Returns:** *Promise‹void›*
