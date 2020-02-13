[@ehacke/redis](../README.md) › ["redis"](_redis_.md)

# External module: "redis"

## Index

### Enumerations

* [SEARCH_FIELD_TYPES](../enums/_redis_.search_field_types.md)

### Classes

* [Redis](../classes/_redis_.redis.md)

### Functions

* [processMultiResults](_redis_.md#processmultiresults)

## Functions

###  processMultiResults

▸ **processMultiResults**(`results`: null | string | number[][]): *null | string | number[]*

*Defined in [redis.ts:21](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L21)*

Process the returned array from a transaction, throwing errors if any exist

**Parameters:**

Name | Type |
------ | ------ |
`results` | null &#124; string &#124; number[][] |

**Returns:** *null | string | number[]*
