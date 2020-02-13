[@ehacke/redis](../README.md) › ["redis"](../modules/_redis_.md) › [Redis](_redis_.redis.md)

# Class: Redis

**`class`** 

## Hierarchy

* Redis

  ↳ **Redis**

## Index

### Constructors

* [constructor](_redis_.redis.md#constructor)

### Properties

* [NAME](_redis_.redis.md#name)
* [Promise](_redis_.redis.md#promise)
* [debounced](_redis_.redis.md#debounced)
* [redlock](_redis_.redis.md#redlock)
* [status](_redis_.redis.md#status)

### Methods

* [addListener](_redis_.redis.md#addlistener)
* [append](_redis_.redis.md#append)
* [auth](_redis_.redis.md#auth)
* [bgrewriteaof](_redis_.redis.md#bgrewriteaof)
* [bgsave](_redis_.redis.md#bgsave)
* [bitcount](_redis_.redis.md#bitcount)
* [blpop](_redis_.redis.md#blpop)
* [brpop](_redis_.redis.md#brpop)
* [brpoplpush](_redis_.redis.md#brpoplpush)
* [client](_redis_.redis.md#client)
* [cluster](_redis_.redis.md#cluster)
* [config](_redis_.redis.md#config)
* [connect](_redis_.redis.md#connect)
* [createBuiltinCommand](_redis_.redis.md#createbuiltincommand)
* [createRedlock](_redis_.redis.md#createredlock)
* [dbsize](_redis_.redis.md#dbsize)
* [debounce](_redis_.redis.md#debounce)
* [debug](_redis_.redis.md#debug)
* [decr](_redis_.redis.md#decr)
* [decrby](_redis_.redis.md#decrby)
* [defineCommand](_redis_.redis.md#definecommand)
* [del](_redis_.redis.md#del)
* [discard](_redis_.redis.md#discard)
* [disconnect](_redis_.redis.md#disconnect)
* [dump](_redis_.redis.md#dump)
* [duplicate](_redis_.redis.md#duplicate)
* [echo](_redis_.redis.md#echo)
* [emit](_redis_.redis.md#emit)
* [eval](_redis_.redis.md#eval)
* [evalsha](_redis_.redis.md#evalsha)
* [eventNames](_redis_.redis.md#eventnames)
* [exec](_redis_.redis.md#exec)
* [exists](_redis_.redis.md#exists)
* [expire](_redis_.redis.md#expire)
* [expireat](_redis_.redis.md#expireat)
* [flushall](_redis_.redis.md#flushall)
* [flushdb](_redis_.redis.md#flushdb)
* [get](_redis_.redis.md#get)
* [getBuffer](_redis_.redis.md#getbuffer)
* [getBuiltinCommands](_redis_.redis.md#getbuiltincommands)
* [getMaxListeners](_redis_.redis.md#getmaxlisteners)
* [getbit](_redis_.redis.md#getbit)
* [getrange](_redis_.redis.md#getrange)
* [getset](_redis_.redis.md#getset)
* [hdel](_redis_.redis.md#hdel)
* [hexists](_redis_.redis.md#hexists)
* [hget](_redis_.redis.md#hget)
* [hgetBuffer](_redis_.redis.md#hgetbuffer)
* [hgetall](_redis_.redis.md#hgetall)
* [hincrby](_redis_.redis.md#hincrby)
* [hincrbyfloat](_redis_.redis.md#hincrbyfloat)
* [hkeys](_redis_.redis.md#hkeys)
* [hlen](_redis_.redis.md#hlen)
* [hmget](_redis_.redis.md#hmget)
* [hmset](_redis_.redis.md#hmset)
* [hscan](_redis_.redis.md#hscan)
* [hscanStream](_redis_.redis.md#hscanstream)
* [hset](_redis_.redis.md#hset)
* [hsetBuffer](_redis_.redis.md#hsetbuffer)
* [hsetnx](_redis_.redis.md#hsetnx)
* [hvals](_redis_.redis.md#hvals)
* [incr](_redis_.redis.md#incr)
* [incrby](_redis_.redis.md#incrby)
* [incrbyfloat](_redis_.redis.md#incrbyfloat)
* [info](_redis_.redis.md#info)
* [keys](_redis_.redis.md#keys)
* [lastsave](_redis_.redis.md#lastsave)
* [lindex](_redis_.redis.md#lindex)
* [linsert](_redis_.redis.md#linsert)
* [listenerCount](_redis_.redis.md#listenercount)
* [listeners](_redis_.redis.md#listeners)
* [llen](_redis_.redis.md#llen)
* [lock](_redis_.redis.md#lock)
* [lpop](_redis_.redis.md#lpop)
* [lpopBuffer](_redis_.redis.md#lpopbuffer)
* [lpush](_redis_.redis.md#lpush)
* [lpushx](_redis_.redis.md#lpushx)
* [lrange](_redis_.redis.md#lrange)
* [lrangeBuffer](_redis_.redis.md#lrangebuffer)
* [lrem](_redis_.redis.md#lrem)
* [lset](_redis_.redis.md#lset)
* [ltrim](_redis_.redis.md#ltrim)
* [mget](_redis_.redis.md#mget)
* [migrate](_redis_.redis.md#migrate)
* [monitor](_redis_.redis.md#monitor)
* [move](_redis_.redis.md#move)
* [mset](_redis_.redis.md#mset)
* [msetnx](_redis_.redis.md#msetnx)
* [multi](_redis_.redis.md#multi)
* [object](_redis_.redis.md#object)
* [off](_redis_.redis.md#off)
* [on](_redis_.redis.md#on)
* [once](_redis_.redis.md#once)
* [persist](_redis_.redis.md#persist)
* [pexpire](_redis_.redis.md#pexpire)
* [pexpireat](_redis_.redis.md#pexpireat)
* [pfadd](_redis_.redis.md#pfadd)
* [pfcount](_redis_.redis.md#pfcount)
* [pfmerge](_redis_.redis.md#pfmerge)
* [ping](_redis_.redis.md#ping)
* [pipeline](_redis_.redis.md#pipeline)
* [prependListener](_redis_.redis.md#prependlistener)
* [prependOnceListener](_redis_.redis.md#prependoncelistener)
* [psetex](_redis_.redis.md#psetex)
* [psubscribe](_redis_.redis.md#psubscribe)
* [pttl](_redis_.redis.md#pttl)
* [publish](_redis_.redis.md#publish)
* [publishBuffer](_redis_.redis.md#publishbuffer)
* [punsubscribe](_redis_.redis.md#punsubscribe)
* [quit](_redis_.redis.md#quit)
* [randomkey](_redis_.redis.md#randomkey)
* [rawListeners](_redis_.redis.md#rawlisteners)
* [removeAllListeners](_redis_.redis.md#removealllisteners)
* [removeListener](_redis_.redis.md#removelistener)
* [rename](_redis_.redis.md#rename)
* [renamenx](_redis_.redis.md#renamenx)
* [restore](_redis_.redis.md#restore)
* [rpop](_redis_.redis.md#rpop)
* [rpoplpush](_redis_.redis.md#rpoplpush)
* [rpoplpushBuffer](_redis_.redis.md#rpoplpushbuffer)
* [rpush](_redis_.redis.md#rpush)
* [rpushBuffer](_redis_.redis.md#rpushbuffer)
* [rpushx](_redis_.redis.md#rpushx)
* [sadd](_redis_.redis.md#sadd)
* [save](_redis_.redis.md#save)
* [scan](_redis_.redis.md#scan)
* [scanPromise](_redis_.redis.md#scanpromise)
* [scanStream](_redis_.redis.md#scanstream)
* [scard](_redis_.redis.md#scard)
* [script](_redis_.redis.md#script)
* [sdiff](_redis_.redis.md#sdiff)
* [sdiffstore](_redis_.redis.md#sdiffstore)
* [select](_redis_.redis.md#select)
* [sendCommand](_redis_.redis.md#sendcommand)
* [send_command](_redis_.redis.md#send_command)
* [set](_redis_.redis.md#set)
* [setBuffer](_redis_.redis.md#setbuffer)
* [setMaxListeners](_redis_.redis.md#setmaxlisteners)
* [setbit](_redis_.redis.md#setbit)
* [setex](_redis_.redis.md#setex)
* [setnx](_redis_.redis.md#setnx)
* [setrange](_redis_.redis.md#setrange)
* [shutdown](_redis_.redis.md#shutdown)
* [sinter](_redis_.redis.md#sinter)
* [sinterstore](_redis_.redis.md#sinterstore)
* [sismember](_redis_.redis.md#sismember)
* [slaveof](_redis_.redis.md#slaveof)
* [smembers](_redis_.redis.md#smembers)
* [smove](_redis_.redis.md#smove)
* [sort](_redis_.redis.md#sort)
* [spop](_redis_.redis.md#spop)
* [srandmember](_redis_.redis.md#srandmember)
* [srem](_redis_.redis.md#srem)
* [sscan](_redis_.redis.md#sscan)
* [sscanStream](_redis_.redis.md#sscanstream)
* [strlen](_redis_.redis.md#strlen)
* [subscribe](_redis_.redis.md#subscribe)
* [substr](_redis_.redis.md#substr)
* [sunion](_redis_.redis.md#sunion)
* [sunionstore](_redis_.redis.md#sunionstore)
* [sync](_redis_.redis.md#sync)
* [time](_redis_.redis.md#time)
* [ttl](_redis_.redis.md#ttl)
* [type](_redis_.redis.md#type)
* [unlink](_redis_.redis.md#unlink)
* [unsubscribe](_redis_.redis.md#unsubscribe)
* [unwatch](_redis_.redis.md#unwatch)
* [watch](_redis_.redis.md#watch)
* [xack](_redis_.redis.md#xack)
* [xadd](_redis_.redis.md#xadd)
* [xclaim](_redis_.redis.md#xclaim)
* [xdel](_redis_.redis.md#xdel)
* [xgroup](_redis_.redis.md#xgroup)
* [xinfo](_redis_.redis.md#xinfo)
* [xlen](_redis_.redis.md#xlen)
* [xpending](_redis_.redis.md#xpending)
* [xrange](_redis_.redis.md#xrange)
* [xread](_redis_.redis.md#xread)
* [xreadgroup](_redis_.redis.md#xreadgroup)
* [xrevrange](_redis_.redis.md#xrevrange)
* [xtrim](_redis_.redis.md#xtrim)
* [zadd](_redis_.redis.md#zadd)
* [zaddBuffer](_redis_.redis.md#zaddbuffer)
* [zcard](_redis_.redis.md#zcard)
* [zcount](_redis_.redis.md#zcount)
* [zincrby](_redis_.redis.md#zincrby)
* [zinterstore](_redis_.redis.md#zinterstore)
* [zrange](_redis_.redis.md#zrange)
* [zrangebyscore](_redis_.redis.md#zrangebyscore)
* [zrank](_redis_.redis.md#zrank)
* [zrem](_redis_.redis.md#zrem)
* [zremrangebyrank](_redis_.redis.md#zremrangebyrank)
* [zremrangebyscore](_redis_.redis.md#zremrangebyscore)
* [zrevrange](_redis_.redis.md#zrevrange)
* [zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)
* [zrevrank](_redis_.redis.md#zrevrank)
* [zscan](_redis_.redis.md#zscan)
* [zscanPromise](_redis_.redis.md#zscanpromise)
* [zscanStream](_redis_.redis.md#zscanstream)
* [zscore](_redis_.redis.md#zscore)
* [zunionstore](_redis_.redis.md#zunionstore)

### Object literals

* [CONSTANTS](_redis_.redis.md#static-constants)

## Constructors

###  constructor

\+ **new Redis**(...`args`: any[]): *[Redis](_redis_.redis.md)*

*Defined in [redis.ts:42](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L42)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any[] |   |

**Returns:** *[Redis](_redis_.redis.md)*

## Properties

###  NAME

• **NAME**: *string*

*Defined in [redis.ts:56](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L56)*

___

###  Promise

• **Promise**: *typeof Promise*

*Inherited from [Redis](_redis_.redis.md).[Promise](_redis_.redis.md#promise)*

Defined in node_modules/@types/ioredis/index.d.ts:91

___

###  debounced

• **debounced**: *object*

*Defined in [redis.ts:60](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L60)*

#### Type declaration:

* \[ **k**: *string*\]: Timeout

___

###  redlock

• **redlock**: *Redlock*

*Defined in [redis.ts:58](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L58)*

___

###  status

• **status**: *string*

*Inherited from [Redis](_redis_.redis.md).[status](_redis_.redis.md#status)*

Defined in node_modules/@types/ioredis/index.d.ts:92

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[addListener](_redis_.redis.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:547

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  append

▸ **append**(`key`: KeyType, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[append](_redis_.redis.md#append)*

Defined in node_modules/@types/ioredis/index.d.ts:171

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **append**(`key`: KeyType, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[append](_redis_.redis.md#append)*

Defined in node_modules/@types/ioredis/index.d.ts:172

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  auth

▸ **auth**(`password`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[auth](_redis_.redis.md#auth)*

Defined in node_modules/@types/ioredis/index.d.ts:544

**Parameters:**

▪ **password**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **auth**(`password`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[auth](_redis_.redis.md#auth)*

Defined in node_modules/@types/ioredis/index.d.ts:545

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *Promise‹string›*

___

###  bgrewriteaof

▸ **bgrewriteaof**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[bgrewriteaof](_redis_.redis.md#bgrewriteaof)*

Defined in node_modules/@types/ioredis/index.d.ts:560

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **bgrewriteaof**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[bgrewriteaof](_redis_.redis.md#bgrewriteaof)*

Defined in node_modules/@types/ioredis/index.d.ts:561

**Returns:** *Promise‹string›*

___

###  bgsave

▸ **bgsave**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[bgsave](_redis_.redis.md#bgsave)*

Defined in node_modules/@types/ioredis/index.d.ts:557

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **bgsave**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[bgsave](_redis_.redis.md#bgsave)*

Defined in node_modules/@types/ioredis/index.d.ts:558

**Returns:** *Promise‹string›*

___

###  bitcount

▸ **bitcount**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[bitcount](_redis_.redis.md#bitcount)*

Defined in node_modules/@types/ioredis/index.d.ts:99

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **bitcount**(`key`: KeyType, `start`: number, `end`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[bitcount](_redis_.redis.md#bitcount)*

Defined in node_modules/@types/ioredis/index.d.ts:100

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **end**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **bitcount**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[bitcount](_redis_.redis.md#bitcount)*

Defined in node_modules/@types/ioredis/index.d.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

▸ **bitcount**(`key`: KeyType, `start`: number, `end`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[bitcount](_redis_.redis.md#bitcount)*

Defined in node_modules/@types/ioredis/index.d.ts:102

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`end` | number |

**Returns:** *Promise‹number›*

___

###  blpop

▸ **blpop**(...`keys`: KeyType[]): *Promise‹[string, string]›*

*Inherited from [Redis](_redis_.redis.md).[blpop](_redis_.redis.md#blpop)*

Defined in node_modules/@types/ioredis/index.d.ts:239

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹[string, string]›*

___

###  brpop

▸ **brpop**(...`keys`: KeyType[]): *Promise‹[string, string]›*

*Inherited from [Redis](_redis_.redis.md).[brpop](_redis_.redis.md#brpop)*

Defined in node_modules/@types/ioredis/index.d.ts:237

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹[string, string]›*

___

###  brpoplpush

▸ **brpoplpush**(`source`: string, `destination`: string, `timeout`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[brpoplpush](_redis_.redis.md#brpoplpush)*

Defined in node_modules/@types/ioredis/index.d.ts:241

**Parameters:**

▪ **source**: *string*

▪ **destination**: *string*

▪ **timeout**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **brpoplpush**(`source`: string, `destination`: string, `timeout`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[brpoplpush](_redis_.redis.md#brpoplpush)*

Defined in node_modules/@types/ioredis/index.d.ts:247

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`timeout` | number |

**Returns:** *Promise‹string›*

___

###  client

▸ **client**(...`args`: ValueType[]): *any*

*Inherited from [Redis](_redis_.redis.md).[client](_redis_.redis.md#client)*

Defined in node_modules/@types/ioredis/index.d.ts:649

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *any*

___

###  cluster

▸ **cluster**(...`args`: ValueType[]): *any*

*Inherited from [Redis](_redis_.redis.md).[cluster](_redis_.redis.md#cluster)*

Defined in node_modules/@types/ioredis/index.d.ts:638

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *any*

___

###  config

▸ **config**(`op`: "GET", `cfg`: any[]): *Promise‹[string, string]›*

*Inherited from [Redis](_redis_.redis.md).[config](_redis_.redis.md#config)*

Defined in node_modules/@types/ioredis/index.d.ts:616

**Parameters:**

Name | Type |
------ | ------ |
`op` | "GET" |
`cfg` | any[] |

**Returns:** *Promise‹[string, string]›*

▸ **config**(`op`: "REWRITE"): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[config](_redis_.redis.md#config)*

Defined in node_modules/@types/ioredis/index.d.ts:617

**Parameters:**

Name | Type |
------ | ------ |
`op` | "REWRITE" |

**Returns:** *Promise‹Ok›*

▸ **config**(`op`: "SET", `key`: string, `value`: ValueType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[config](_redis_.redis.md#config)*

Defined in node_modules/@types/ioredis/index.d.ts:618

**Parameters:**

Name | Type |
------ | ------ |
`op` | "SET" |
`key` | string |
`value` | ValueType |

**Returns:** *Promise‹Ok›*

___

###  connect

▸ **connect**(`callback?`: undefined | function): *Promise‹void›*

*Inherited from [Redis](_redis_.redis.md).[connect](_redis_.redis.md#connect)*

Defined in node_modules/@types/ioredis/index.d.ts:93

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *Promise‹void›*

___

###  createBuiltinCommand

▸ **createBuiltinCommand**(`commandName`: string): *object*

*Inherited from [Redis](_redis_.redis.md).[createBuiltinCommand](_redis_.redis.md#createbuiltincommand)*

Defined in node_modules/@types/ioredis/index.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`commandName` | string |

**Returns:** *object*

___

###  createRedlock

▸ **createRedlock**(`config`: Options): *Redlock*

*Defined in [redis.ts:106](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L106)*

Get redlock instance

**`link`** https://www.npmjs.com/package/redlock

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | Options | { retryCount: 0 } |

**Returns:** *Redlock*

___

###  dbsize

▸ **dbsize**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[dbsize](_redis_.redis.md#dbsize)*

Defined in node_modules/@types/ioredis/index.d.ts:541

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **dbsize**(): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[dbsize](_redis_.redis.md#dbsize)*

Defined in node_modules/@types/ioredis/index.d.ts:542

**Returns:** *Promise‹number›*

___

###  debounce

▸ **debounce**(`callback`: Function, `key`: string, `timeoutMs`: number, `skewMs`: number): *Promise‹any›*

*Defined in [redis.ts:164](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L164)*

Debounce a callback using Redis and setTimeout locally

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`callback` | Function | - |
`key` | string | - |
`timeoutMs` | number | - |
`skewMs` | number | Redis.CONSTANTS.DEFAULT_SKEW_MS |

**Returns:** *Promise‹any›*

___

###  debug

▸ **debug**(...`args`: ValueType[]): *Promise‹any›*

*Inherited from [Redis](_redis_.redis.md).[debug](_redis_.redis.md#debug)*

Defined in node_modules/@types/ioredis/index.d.ts:614

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *Promise‹any›*

___

###  decr

▸ **decr**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[decr](_redis_.redis.md#decr)*

Defined in node_modules/@types/ioredis/index.d.ts:202

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **decr**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[decr](_redis_.redis.md#decr)*

Defined in node_modules/@types/ioredis/index.d.ts:203

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  decrby

▸ **decrby**(`key`: KeyType, `decrement`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[decrby](_redis_.redis.md#decrby)*

Defined in node_modules/@types/ioredis/index.d.ts:493

**Parameters:**

▪ **key**: *KeyType*

▪ **decrement**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **decrby**(`key`: KeyType, `decrement`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[decrby](_redis_.redis.md#decrby)*

Defined in node_modules/@types/ioredis/index.d.ts:494

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`decrement` | number |

**Returns:** *Promise‹number›*

___

###  defineCommand

▸ **defineCommand**(`name`: string, `definition`: object): *void*

*Inherited from [Redis](_redis_.redis.md).[defineCommand](_redis_.redis.md#definecommand)*

Defined in node_modules/@types/ioredis/index.d.ts:48

**Parameters:**

▪ **name**: *string*

▪ **definition**: *object*

Name | Type |
------ | ------ |
`lua?` | undefined &#124; string |
`numberOfKeys?` | undefined &#124; number |

**Returns:** *void*

___

###  del

▸ **del**(...`keys`: KeyType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[del](_redis_.redis.md#del)*

Defined in node_modules/@types/ioredis/index.d.ts:177

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹number›*

___

###  discard

▸ **discard**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[discard](_redis_.redis.md#discard)*

Defined in node_modules/@types/ioredis/index.d.ts:578

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **discard**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[discard](_redis_.redis.md#discard)*

Defined in node_modules/@types/ioredis/index.d.ts:579

**Returns:** *Promise‹string›*

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [Redis](_redis_.redis.md).[disconnect](_redis_.redis.md#disconnect)*

Defined in node_modules/@types/ioredis/index.d.ts:94

**Returns:** *void*

___

###  dump

▸ **dump**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[dump](_redis_.redis.md#dump)*

Defined in node_modules/@types/ioredis/index.d.ts:644

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **dump**(`key`: KeyType): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[dump](_redis_.redis.md#dump)*

Defined in node_modules/@types/ioredis/index.d.ts:645

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string›*

___

###  duplicate

▸ **duplicate**(): *Redis*

*Inherited from [Redis](_redis_.redis.md).[duplicate](_redis_.redis.md#duplicate)*

Defined in node_modules/@types/ioredis/index.d.ts:95

**Returns:** *Redis*

___

###  echo

▸ **echo**(`message`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[echo](_redis_.redis.md#echo)*

Defined in node_modules/@types/ioredis/index.d.ts:551

**Parameters:**

▪ **message**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **echo**(`message`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[echo](_redis_.redis.md#echo)*

Defined in node_modules/@types/ioredis/index.d.ts:552

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *Promise‹string›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Redis](_redis_.redis.md).[emit](_redis_.redis.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:557

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eval

▸ **eval**(`script`: string, `numKeys`: number, ...`args`: ValueType[]): *any*

*Inherited from [Redis](_redis_.redis.md).[eval](_redis_.redis.md#eval)*

Defined in node_modules/@types/ioredis/index.d.ts:651

**Parameters:**

Name | Type |
------ | ------ |
`script` | string |
`numKeys` | number |
`...args` | ValueType[] |

**Returns:** *any*

▸ **eval**(`args`: ValueType[], `callback?`: undefined | function): *any*

*Inherited from [Redis](_redis_.redis.md).[eval](_redis_.redis.md#eval)*

Defined in node_modules/@types/ioredis/index.d.ts:655

**Parameters:**

Name | Type |
------ | ------ |
`args` | ValueType[] |
`callback?` | undefined &#124; function |

**Returns:** *any*

___

###  evalsha

▸ **evalsha**(`scriptSha`: string, `numKeys`: string, ...`args`: ValueType[]): *any*

*Inherited from [Redis](_redis_.redis.md).[evalsha](_redis_.redis.md#evalsha)*

Defined in node_modules/@types/ioredis/index.d.ts:657

**Parameters:**

Name | Type |
------ | ------ |
`scriptSha` | string |
`numKeys` | string |
`...args` | ValueType[] |

**Returns:** *any*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Redis](_redis_.redis.md).[eventNames](_redis_.redis.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:562

**Returns:** *Array‹string | symbol›*

___

###  exec

▸ **exec**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[exec](_redis_.redis.md#exec)*

Defined in node_modules/@types/ioredis/index.d.ts:575

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: Array‹[Error | null, string]›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Array‹[Error &#124; null, string]› |

**Returns:** *void*

▸ **exec**(): *Promise‹Array‹[Error | null, string]››*

*Inherited from [Redis](_redis_.redis.md).[exec](_redis_.redis.md#exec)*

Defined in node_modules/@types/ioredis/index.d.ts:576

**Returns:** *Promise‹Array‹[Error | null, string]››*

___

###  exists

▸ **exists**(...`keys`: KeyType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[exists](_redis_.redis.md#exists)*

Defined in node_modules/@types/ioredis/index.d.ts:181

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹number›*

▸ **exists**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[exists](_redis_.redis.md#exists)*

Defined in node_modules/@types/ioredis/index.d.ts:182

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

___

###  expire

▸ **expire**(`key`: KeyType, `seconds`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[expire](_redis_.redis.md#expire)*

Defined in node_modules/@types/ioredis/index.d.ts:522

**Parameters:**

▪ **key**: *KeyType*

▪ **seconds**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **expire**(`key`: KeyType, `seconds`: number): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[expire](_redis_.redis.md#expire)*

Defined in node_modules/@types/ioredis/index.d.ts:523

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`seconds` | number |

**Returns:** *Promise‹BooleanResponse›*

___

###  expireat

▸ **expireat**(`key`: KeyType, `timestamp`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[expireat](_redis_.redis.md#expireat)*

Defined in node_modules/@types/ioredis/index.d.ts:528

**Parameters:**

▪ **key**: *KeyType*

▪ **timestamp**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **expireat**(`key`: KeyType, `timestamp`: number): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[expireat](_redis_.redis.md#expireat)*

Defined in node_modules/@types/ioredis/index.d.ts:529

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`timestamp` | number |

**Returns:** *Promise‹BooleanResponse›*

___

###  flushall

▸ **flushall**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[flushall](_redis_.redis.md#flushall)*

Defined in node_modules/@types/ioredis/index.d.ts:587

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **flushall**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[flushall](_redis_.redis.md#flushall)*

Defined in node_modules/@types/ioredis/index.d.ts:588

**Returns:** *Promise‹string›*

___

###  flushdb

▸ **flushdb**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[flushdb](_redis_.redis.md#flushdb)*

Defined in node_modules/@types/ioredis/index.d.ts:584

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **flushdb**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[flushdb](_redis_.redis.md#flushdb)*

Defined in node_modules/@types/ioredis/index.d.ts:585

**Returns:** *Promise‹string›*

___

###  get

▸ **get**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[get](_redis_.redis.md#get)*

Defined in node_modules/@types/ioredis/index.d.ts:104

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string &#124; null |

**Returns:** *void*

▸ **get**(`key`: KeyType): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[get](_redis_.redis.md#get)*

Defined in node_modules/@types/ioredis/index.d.ts:105

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string | null›*

___

###  getBuffer

▸ **getBuffer**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[getBuffer](_redis_.redis.md#getbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:107

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Buffer |

**Returns:** *void*

▸ **getBuffer**(`key`: KeyType): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[getBuffer](_redis_.redis.md#getbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:108

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹Buffer›*

___

###  getBuiltinCommands

▸ **getBuiltinCommands**(): *string[]*

*Inherited from [Redis](_redis_.redis.md).[getBuiltinCommands](_redis_.redis.md#getbuiltincommands)*

Defined in node_modules/@types/ioredis/index.d.ts:46

**Returns:** *string[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Redis](_redis_.redis.md).[getMaxListeners](_redis_.redis.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:554

**Returns:** *number*

___

###  getbit

▸ **getbit**(`key`: KeyType, `offset`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[getbit](_redis_.redis.md#getbit)*

Defined in node_modules/@types/ioredis/index.d.ts:187

**Parameters:**

▪ **key**: *KeyType*

▪ **offset**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **getbit**(`key`: KeyType, `offset`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[getbit](_redis_.redis.md#getbit)*

Defined in node_modules/@types/ioredis/index.d.ts:188

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`offset` | number |

**Returns:** *Promise‹number›*

___

###  getrange

▸ **getrange**(`key`: KeyType, `start`: number, `end`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[getrange](_redis_.redis.md#getrange)*

Defined in node_modules/@types/ioredis/index.d.ts:193

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **end**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **getrange**(`key`: KeyType, `start`: number, `end`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[getrange](_redis_.redis.md#getrange)*

Defined in node_modules/@types/ioredis/index.d.ts:194

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`end` | number |

**Returns:** *Promise‹string›*

___

###  getset

▸ **getset**(`key`: KeyType, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[getset](_redis_.redis.md#getset)*

Defined in node_modules/@types/ioredis/index.d.ts:496

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string &#124; null |

**Returns:** *void*

▸ **getset**(`key`: KeyType, `value`: ValueType): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[getset](_redis_.redis.md#getset)*

Defined in node_modules/@types/ioredis/index.d.ts:497

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise‹string | null›*

___

###  hdel

▸ **hdel**(`key`: KeyType, ...`fields`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[hdel](_redis_.redis.md#hdel)*

Defined in node_modules/@types/ioredis/index.d.ts:470

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...fields` | string[] |

**Returns:** *Promise‹number›*

___

###  hexists

▸ **hexists**(`key`: KeyType, `field`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hexists](_redis_.redis.md#hexists)*

Defined in node_modules/@types/ioredis/index.d.ts:484

**Parameters:**

▪ **key**: *KeyType*

▪ **field**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **hexists**(`key`: KeyType, `field`: string): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[hexists](_redis_.redis.md#hexists)*

Defined in node_modules/@types/ioredis/index.d.ts:485

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |

**Returns:** *Promise‹BooleanResponse›*

___

###  hget

▸ **hget**(`key`: KeyType, `field`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hget](_redis_.redis.md#hget)*

Defined in node_modules/@types/ioredis/index.d.ts:449

**Parameters:**

▪ **key**: *KeyType*

▪ **field**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string &#124; null |

**Returns:** *void*

▸ **hget**(`key`: KeyType, `field`: string): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[hget](_redis_.redis.md#hget)*

Defined in node_modules/@types/ioredis/index.d.ts:450

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |

**Returns:** *Promise‹string | null›*

___

###  hgetBuffer

▸ **hgetBuffer**(`key`: KeyType, `field`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hgetBuffer](_redis_.redis.md#hgetbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:451

**Parameters:**

▪ **key**: *KeyType*

▪ **field**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Buffer |

**Returns:** *void*

▸ **hgetBuffer**(`key`: KeyType, `field`: string): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[hgetBuffer](_redis_.redis.md#hgetbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:452

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |

**Returns:** *Promise‹Buffer›*

___

###  hgetall

▸ **hgetall**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hgetall](_redis_.redis.md#hgetall)*

Defined in node_modules/@types/ioredis/index.d.ts:481

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Record‹string, string›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Record‹string, string› |

**Returns:** *void*

▸ **hgetall**(`key`: KeyType): *Promise‹Record‹string, string››*

*Inherited from [Redis](_redis_.redis.md).[hgetall](_redis_.redis.md#hgetall)*

Defined in node_modules/@types/ioredis/index.d.ts:482

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹Record‹string, string››*

___

###  hincrby

▸ **hincrby**(`key`: KeyType, `field`: string, `increment`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hincrby](_redis_.redis.md#hincrby)*

Defined in node_modules/@types/ioredis/index.d.ts:464

**Parameters:**

▪ **key**: *KeyType*

▪ **field**: *string*

▪ **increment**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **hincrby**(`key`: KeyType, `field`: string, `increment`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[hincrby](_redis_.redis.md#hincrby)*

Defined in node_modules/@types/ioredis/index.d.ts:465

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`increment` | number |

**Returns:** *Promise‹number›*

___

###  hincrbyfloat

▸ **hincrbyfloat**(`key`: KeyType, `field`: string, `increment`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hincrbyfloat](_redis_.redis.md#hincrbyfloat)*

Defined in node_modules/@types/ioredis/index.d.ts:467

**Parameters:**

▪ **key**: *KeyType*

▪ **field**: *string*

▪ **increment**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **hincrbyfloat**(`key`: KeyType, `field`: string, `increment`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[hincrbyfloat](_redis_.redis.md#hincrbyfloat)*

Defined in node_modules/@types/ioredis/index.d.ts:468

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`increment` | number |

**Returns:** *Promise‹number›*

___

###  hkeys

▸ **hkeys**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hkeys](_redis_.redis.md#hkeys)*

Defined in node_modules/@types/ioredis/index.d.ts:475

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **hkeys**(`key`: KeyType): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[hkeys](_redis_.redis.md#hkeys)*

Defined in node_modules/@types/ioredis/index.d.ts:476

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string[]›*

___

###  hlen

▸ **hlen**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hlen](_redis_.redis.md#hlen)*

Defined in node_modules/@types/ioredis/index.d.ts:472

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **hlen**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[hlen](_redis_.redis.md#hlen)*

Defined in node_modules/@types/ioredis/index.d.ts:473

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  hmget

▸ **hmget**(`key`: KeyType, ...`fields`: string[]): *Promise‹Array‹string | null››*

*Inherited from [Redis](_redis_.redis.md).[hmget](_redis_.redis.md#hmget)*

Defined in node_modules/@types/ioredis/index.d.ts:462

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...fields` | string[] |

**Returns:** *Promise‹Array‹string | null››*

___

###  hmset

▸ **hmset**(`key`: KeyType, ...`args`: ValueType[]): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[hmset](_redis_.redis.md#hmset)*

Defined in node_modules/@types/ioredis/index.d.ts:454

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...args` | ValueType[] |

**Returns:** *Promise‹BooleanResponse›*

▸ **hmset**(`key`: KeyType, `data`: object | Map‹string, ValueType›, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hmset](_redis_.redis.md#hmset)*

Defined in node_modules/@types/ioredis/index.d.ts:455

**Parameters:**

▪ **key**: *KeyType*

▪ **data**: *object | Map‹string, ValueType›*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **hmset**(`key`: KeyType, `data`: object | Map‹string, ValueType›): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[hmset](_redis_.redis.md#hmset)*

Defined in node_modules/@types/ioredis/index.d.ts:460

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`data` | object &#124; Map‹string, ValueType› |

**Returns:** *Promise‹BooleanResponse›*

___

###  hscan

▸ **hscan**(`key`: KeyType, `cursor`: number, ...`args`: ValueType[]): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[hscan](_redis_.redis.md#hscan)*

Defined in node_modules/@types/ioredis/index.d.ts:686

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`cursor` | number |
`...args` | ValueType[] |

**Returns:** *Promise‹[string, string[]]›*

___

###  hscanStream

▸ **hscanStream**(`key`: KeyType, `options?`: ScanStreamOption): *Readable*

*Inherited from [Redis](_redis_.redis.md).[hscanStream](_redis_.redis.md#hscanstream)*

Defined in node_modules/@types/ioredis/index.d.ts:700

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Readable*

___

###  hset

▸ **hset**(`key`: KeyType, `field`: string, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hset](_redis_.redis.md#hset)*

Defined in node_modules/@types/ioredis/index.d.ts:431

**Parameters:**

▪ **key**: *KeyType*

▪ **field**: *string*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **hset**(`key`: KeyType, `field`: string, `value`: ValueType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[hset](_redis_.redis.md#hset)*

Defined in node_modules/@types/ioredis/index.d.ts:432

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`value` | ValueType |

**Returns:** *Promise‹BooleanResponse›*

___

###  hsetBuffer

▸ **hsetBuffer**(`key`: KeyType, `field`: string, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hsetBuffer](_redis_.redis.md#hsetbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:433

**Parameters:**

▪ **key**: *KeyType*

▪ **field**: *string*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **hsetBuffer**(`key`: KeyType, `field`: string, `value`: ValueType): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[hsetBuffer](_redis_.redis.md#hsetbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:439

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`value` | ValueType |

**Returns:** *Promise‹Buffer›*

___

###  hsetnx

▸ **hsetnx**(`key`: KeyType, `field`: string, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hsetnx](_redis_.redis.md#hsetnx)*

Defined in node_modules/@types/ioredis/index.d.ts:441

**Parameters:**

▪ **key**: *KeyType*

▪ **field**: *string*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **hsetnx**(`key`: KeyType, `field`: string, `value`: ValueType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[hsetnx](_redis_.redis.md#hsetnx)*

Defined in node_modules/@types/ioredis/index.d.ts:447

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`value` | ValueType |

**Returns:** *Promise‹BooleanResponse›*

___

###  hvals

▸ **hvals**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[hvals](_redis_.redis.md#hvals)*

Defined in node_modules/@types/ioredis/index.d.ts:478

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **hvals**(`key`: KeyType): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[hvals](_redis_.redis.md#hvals)*

Defined in node_modules/@types/ioredis/index.d.ts:479

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string[]›*

___

###  incr

▸ **incr**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[incr](_redis_.redis.md#incr)*

Defined in node_modules/@types/ioredis/index.d.ts:199

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **incr**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[incr](_redis_.redis.md#incr)*

Defined in node_modules/@types/ioredis/index.d.ts:200

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  incrby

▸ **incrby**(`key`: KeyType, `increment`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[incrby](_redis_.redis.md#incrby)*

Defined in node_modules/@types/ioredis/index.d.ts:487

**Parameters:**

▪ **key**: *KeyType*

▪ **increment**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **incrby**(`key`: KeyType, `increment`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[incrby](_redis_.redis.md#incrby)*

Defined in node_modules/@types/ioredis/index.d.ts:488

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`increment` | number |

**Returns:** *Promise‹number›*

___

###  incrbyfloat

▸ **incrbyfloat**(`key`: KeyType, `increment`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[incrbyfloat](_redis_.redis.md#incrbyfloat)*

Defined in node_modules/@types/ioredis/index.d.ts:490

**Parameters:**

▪ **key**: *KeyType*

▪ **increment**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **incrbyfloat**(`key`: KeyType, `increment`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[incrbyfloat](_redis_.redis.md#incrbyfloat)*

Defined in node_modules/@types/ioredis/index.d.ts:491

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`increment` | number |

**Returns:** *Promise‹number›*

___

###  info

▸ **info**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[info](_redis_.redis.md#info)*

Defined in node_modules/@types/ioredis/index.d.ts:592

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **info**(`section`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[info](_redis_.redis.md#info)*

Defined in node_modules/@types/ioredis/index.d.ts:593

**Parameters:**

▪ **section**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **info**(`section?`: undefined | string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[info](_redis_.redis.md#info)*

Defined in node_modules/@types/ioredis/index.d.ts:594

**Parameters:**

Name | Type |
------ | ------ |
`section?` | undefined &#124; string |

**Returns:** *Promise‹string›*

___

###  keys

▸ **keys**(`pattern`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[keys](_redis_.redis.md#keys)*

Defined in node_modules/@types/ioredis/index.d.ts:538

**Parameters:**

▪ **pattern**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **keys**(`pattern`: string): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[keys](_redis_.redis.md#keys)*

Defined in node_modules/@types/ioredis/index.d.ts:539

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | string |

**Returns:** *Promise‹string[]›*

___

###  lastsave

▸ **lastsave**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[lastsave](_redis_.redis.md#lastsave)*

Defined in node_modules/@types/ioredis/index.d.ts:566

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **lastsave**(): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[lastsave](_redis_.redis.md#lastsave)*

Defined in node_modules/@types/ioredis/index.d.ts:567

**Returns:** *Promise‹number›*

___

###  lindex

▸ **lindex**(`key`: KeyType, `index`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[lindex](_redis_.redis.md#lindex)*

Defined in node_modules/@types/ioredis/index.d.ts:252

**Parameters:**

▪ **key**: *KeyType*

▪ **index**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **lindex**(`key`: KeyType, `index`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[lindex](_redis_.redis.md#lindex)*

Defined in node_modules/@types/ioredis/index.d.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`index` | number |

**Returns:** *Promise‹string›*

___

###  linsert

▸ **linsert**(`key`: KeyType, `direction`: "BEFORE" | "AFTER", `pivot`: string, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[linsert](_redis_.redis.md#linsert)*

Defined in node_modules/@types/ioredis/index.d.ts:219

**Parameters:**

▪ **key**: *KeyType*

▪ **direction**: *"BEFORE" | "AFTER"*

▪ **pivot**: *string*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **linsert**(`key`: KeyType, `direction`: "BEFORE" | "AFTER", `pivot`: string, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[linsert](_redis_.redis.md#linsert)*

Defined in node_modules/@types/ioredis/index.d.ts:226

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`direction` | "BEFORE" &#124; "AFTER" |
`pivot` | string |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Redis](_redis_.redis.md).[listenerCount](_redis_.redis.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Redis](_redis_.redis.md).[listeners](_redis_.redis.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  llen

▸ **llen**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[llen](_redis_.redis.md#llen)*

Defined in node_modules/@types/ioredis/index.d.ts:249

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **llen**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[llen](_redis_.redis.md#llen)*

Defined in node_modules/@types/ioredis/index.d.ts:250

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  lock

▸ **lock**(`key`: string, `ttl`: number): *Promise‹Lock | null›*

*Defined in [redis.ts:68](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L68)*

Acquire lock in Redis

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`ttl` | number |

**Returns:** *Promise‹Lock | null›*

___

###  lpop

▸ **lpop**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[lpop](_redis_.redis.md#lpop)*

Defined in node_modules/@types/ioredis/index.d.ts:231

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **lpop**(`key`: KeyType): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[lpop](_redis_.redis.md#lpop)*

Defined in node_modules/@types/ioredis/index.d.ts:232

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string›*

___

###  lpopBuffer

▸ **lpopBuffer**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[lpopBuffer](_redis_.redis.md#lpopbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:234

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Buffer |

**Returns:** *void*

▸ **lpopBuffer**(`key`: KeyType): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[lpopBuffer](_redis_.redis.md#lpopbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:235

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹Buffer›*

___

###  lpush

▸ **lpush**(`key`: KeyType, ...`values`: ValueType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[lpush](_redis_.redis.md#lpush)*

Defined in node_modules/@types/ioredis/index.d.ts:211

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...values` | ValueType[] |

**Returns:** *Promise‹number›*

___

###  lpushx

▸ **lpushx**(`key`: KeyType, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[lpushx](_redis_.redis.md#lpushx)*

Defined in node_modules/@types/ioredis/index.d.ts:216

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **lpushx**(`key`: KeyType, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[lpushx](_redis_.redis.md#lpushx)*

Defined in node_modules/@types/ioredis/index.d.ts:217

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  lrange

▸ **lrange**(`key`: KeyType, `start`: number, `stop`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[lrange](_redis_.redis.md#lrange)*

Defined in node_modules/@types/ioredis/index.d.ts:258

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **stop**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **lrange**(`key`: KeyType, `start`: number, `stop`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[lrange](_redis_.redis.md#lrange)*

Defined in node_modules/@types/ioredis/index.d.ts:259

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |

**Returns:** *Promise‹string[]›*

___

###  lrangeBuffer

▸ **lrangeBuffer**(`key`: KeyType, `start`: number, `stop`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[lrangeBuffer](_redis_.redis.md#lrangebuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:261

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **stop**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Buffer[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Buffer[] |

**Returns:** *void*

▸ **lrangeBuffer**(`key`: KeyType, `start`: number, `stop`: number): *Promise‹Buffer[]›*

*Inherited from [Redis](_redis_.redis.md).[lrangeBuffer](_redis_.redis.md#lrangebuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:262

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |

**Returns:** *Promise‹Buffer[]›*

___

###  lrem

▸ **lrem**(`key`: KeyType, `count`: number, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[lrem](_redis_.redis.md#lrem)*

Defined in node_modules/@types/ioredis/index.d.ts:267

**Parameters:**

▪ **key**: *KeyType*

▪ **count**: *number*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **lrem**(`key`: KeyType, `count`: number, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[lrem](_redis_.redis.md#lrem)*

Defined in node_modules/@types/ioredis/index.d.ts:268

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`count` | number |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  lset

▸ **lset**(`key`: KeyType, `index`: number, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[lset](_redis_.redis.md#lset)*

Defined in node_modules/@types/ioredis/index.d.ts:255

**Parameters:**

▪ **key**: *KeyType*

▪ **index**: *number*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Ok): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Ok |

**Returns:** *void*

▸ **lset**(`key`: KeyType, `index`: number, `value`: ValueType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[lset](_redis_.redis.md#lset)*

Defined in node_modules/@types/ioredis/index.d.ts:256

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`index` | number |
`value` | ValueType |

**Returns:** *Promise‹Ok›*

___

###  ltrim

▸ **ltrim**(`key`: KeyType, `start`: number, `stop`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[ltrim](_redis_.redis.md#ltrim)*

Defined in node_modules/@types/ioredis/index.d.ts:264

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **stop**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Ok): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Ok |

**Returns:** *void*

▸ **ltrim**(`key`: KeyType, `start`: number, `stop`: number): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[ltrim](_redis_.redis.md#ltrim)*

Defined in node_modules/@types/ioredis/index.d.ts:265

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |

**Returns:** *Promise‹Ok›*

___

###  mget

▸ **mget**(...`keys`: KeyType[]): *Promise‹Array‹string | null››*

*Inherited from [Redis](_redis_.redis.md).[mget](_redis_.redis.md#mget)*

Defined in node_modules/@types/ioredis/index.d.ts:205

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹Array‹string | null››*

___

###  migrate

▸ **migrate**(...`args`: ValueType[]): *Promise‹Ok | "NOKEY"›*

*Inherited from [Redis](_redis_.redis.md).[migrate](_redis_.redis.md#migrate)*

Defined in node_modules/@types/ioredis/index.d.ts:642

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *Promise‹Ok | "NOKEY"›*

___

###  monitor

▸ **monitor**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[monitor](_redis_.redis.md#monitor)*

Defined in node_modules/@types/ioredis/index.d.ts:599

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: EventEmitter): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | EventEmitter |

**Returns:** *void*

▸ **monitor**(): *Promise‹EventEmitter›*

*Inherited from [Redis](_redis_.redis.md).[monitor](_redis_.redis.md#monitor)*

Defined in node_modules/@types/ioredis/index.d.ts:600

**Returns:** *Promise‹EventEmitter›*

___

###  move

▸ **move**(`key`: KeyType, `db`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[move](_redis_.redis.md#move)*

Defined in node_modules/@types/ioredis/index.d.ts:513

**Parameters:**

▪ **key**: *KeyType*

▪ **db**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **move**(`key`: KeyType, `db`: string): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[move](_redis_.redis.md#move)*

Defined in node_modules/@types/ioredis/index.d.ts:514

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`db` | string |

**Returns:** *Promise‹BooleanResponse›*

___

###  mset

▸ **mset**(...`args`: ValueType[]): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[mset](_redis_.redis.md#mset)*

Defined in node_modules/@types/ioredis/index.d.ts:499

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *Promise‹Ok›*

▸ **mset**(`data`: object | Map‹string, ValueType›, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[mset](_redis_.redis.md#mset)*

Defined in node_modules/@types/ioredis/index.d.ts:500

**Parameters:**

▪ **data**: *object | Map‹string, ValueType›*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Ok): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Ok |

**Returns:** *void*

▸ **mset**(`data`: object | Map‹string, ValueType›): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[mset](_redis_.redis.md#mset)*

Defined in node_modules/@types/ioredis/index.d.ts:501

**Parameters:**

Name | Type |
------ | ------ |
`data` | object &#124; Map‹string, ValueType› |

**Returns:** *Promise‹Ok›*

___

###  msetnx

▸ **msetnx**(...`args`: ValueType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[msetnx](_redis_.redis.md#msetnx)*

Defined in node_modules/@types/ioredis/index.d.ts:503

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *Promise‹number›*

▸ **msetnx**(`data`: object | Map‹string, ValueType›, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[msetnx](_redis_.redis.md#msetnx)*

Defined in node_modules/@types/ioredis/index.d.ts:504

**Parameters:**

▪ **data**: *object | Map‹string, ValueType›*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **msetnx**(`data`: object | Map‹string, ValueType›): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[msetnx](_redis_.redis.md#msetnx)*

Defined in node_modules/@types/ioredis/index.d.ts:505

**Parameters:**

Name | Type |
------ | ------ |
`data` | object &#124; Map‹string, ValueType› |

**Returns:** *Promise‹BooleanResponse›*

___

###  multi

▸ **multi**(`commands?`: string[][], `options?`: MultiOptions): *Pipeline*

*Inherited from [Redis](_redis_.redis.md).[multi](_redis_.redis.md#multi)*

Defined in node_modules/@types/ioredis/index.d.ts:572

**Parameters:**

Name | Type |
------ | ------ |
`commands?` | string[][] |
`options?` | MultiOptions |

**Returns:** *Pipeline*

▸ **multi**(`options`: object): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[multi](_redis_.redis.md#multi)*

Defined in node_modules/@types/ioredis/index.d.ts:573

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`pipeline` | false |

**Returns:** *Promise‹string›*

___

###  object

▸ **object**(`subcommand`: string, ...`args`: ValueType[]): *Promise‹any›*

*Inherited from [Redis](_redis_.redis.md).[object](_redis_.redis.md#object)*

Defined in node_modules/@types/ioredis/index.d.ts:647

**Parameters:**

Name | Type |
------ | ------ |
`subcommand` | string |
`...args` | ValueType[] |

**Returns:** *Promise‹any›*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[off](_redis_.redis.md#off)*

Defined in node_modules/@types/node/globals.d.ts:551

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[on](_redis_.redis.md#on)*

Defined in node_modules/@types/node/globals.d.ts:548

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[once](_redis_.redis.md#once)*

Defined in node_modules/@types/node/globals.d.ts:549

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  persist

▸ **persist**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[persist](_redis_.redis.md#persist)*

Defined in node_modules/@types/ioredis/index.d.ts:608

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **persist**(`key`: KeyType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[persist](_redis_.redis.md#persist)*

Defined in node_modules/@types/ioredis/index.d.ts:609

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹BooleanResponse›*

___

###  pexpire

▸ **pexpire**(`key`: KeyType, `milliseconds`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[pexpire](_redis_.redis.md#pexpire)*

Defined in node_modules/@types/ioredis/index.d.ts:525

**Parameters:**

▪ **key**: *KeyType*

▪ **milliseconds**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **pexpire**(`key`: KeyType, `milliseconds`: number): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[pexpire](_redis_.redis.md#pexpire)*

Defined in node_modules/@types/ioredis/index.d.ts:526

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`milliseconds` | number |

**Returns:** *Promise‹BooleanResponse›*

___

###  pexpireat

▸ **pexpireat**(`key`: KeyType, `millisecondsTimestamp`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[pexpireat](_redis_.redis.md#pexpireat)*

Defined in node_modules/@types/ioredis/index.d.ts:531

**Parameters:**

▪ **key**: *KeyType*

▪ **millisecondsTimestamp**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **pexpireat**(`key`: KeyType, `millisecondsTimestamp`: number): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[pexpireat](_redis_.redis.md#pexpireat)*

Defined in node_modules/@types/ioredis/index.d.ts:536

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`millisecondsTimestamp` | number |

**Returns:** *Promise‹BooleanResponse›*

___

###  pfadd

▸ **pfadd**(`key`: KeyType, ...`elements`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[pfadd](_redis_.redis.md#pfadd)*

Defined in node_modules/@types/ioredis/index.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...elements` | string[] |

**Returns:** *Promise‹number›*

___

###  pfcount

▸ **pfcount**(...`keys`: KeyType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[pfcount](_redis_.redis.md#pfcount)*

Defined in node_modules/@types/ioredis/index.d.ts:694

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹number›*

___

###  pfmerge

▸ **pfmerge**(`destkey`: KeyType, ...`sourcekeys`: KeyType[]): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[pfmerge](_redis_.redis.md#pfmerge)*

Defined in node_modules/@types/ioredis/index.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`destkey` | KeyType |
`...sourcekeys` | KeyType[] |

**Returns:** *Promise‹Ok›*

___

###  ping

▸ **ping**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[ping](_redis_.redis.md#ping)*

Defined in node_modules/@types/ioredis/index.d.ts:547

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **ping**(`message`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[ping](_redis_.redis.md#ping)*

Defined in node_modules/@types/ioredis/index.d.ts:548

**Parameters:**

▪ **message**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **ping**(`message?`: undefined | string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[ping](_redis_.redis.md#ping)*

Defined in node_modules/@types/ioredis/index.d.ts:549

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |

**Returns:** *Promise‹string›*

___

###  pipeline

▸ **pipeline**(`commands?`: string[][]): *Pipeline*

*Inherited from [Redis](_redis_.redis.md).[pipeline](_redis_.redis.md#pipeline)*

Defined in node_modules/@types/ioredis/index.d.ts:696

**Parameters:**

Name | Type |
------ | ------ |
`commands?` | string[][] |

**Returns:** *Pipeline*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[prependListener](_redis_.redis.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[prependOnceListener](_redis_.redis.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:561

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  psetex

▸ **psetex**(`key`: KeyType, `milliseconds`: number, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[psetex](_redis_.redis.md#psetex)*

Defined in node_modules/@types/ioredis/index.d.ts:168

**Parameters:**

▪ **key**: *KeyType*

▪ **milliseconds**: *number*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Ok): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Ok |

**Returns:** *void*

▸ **psetex**(`key`: KeyType, `milliseconds`: number, `value`: ValueType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[psetex](_redis_.redis.md#psetex)*

Defined in node_modules/@types/ioredis/index.d.ts:169

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`milliseconds` | number |
`value` | ValueType |

**Returns:** *Promise‹Ok›*

___

###  psubscribe

▸ **psubscribe**(...`patterns`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[psubscribe](_redis_.redis.md#psubscribe)*

Defined in node_modules/@types/ioredis/index.d.ts:624

**Parameters:**

Name | Type |
------ | ------ |
`...patterns` | string[] |

**Returns:** *Promise‹number›*

___

###  pttl

▸ **pttl**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[pttl](_redis_.redis.md#pttl)*

Defined in node_modules/@types/ioredis/index.d.ts:605

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **pttl**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[pttl](_redis_.redis.md#pttl)*

Defined in node_modules/@types/ioredis/index.d.ts:606

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  publish

▸ **publish**(`channel`: string, `message`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[publish](_redis_.redis.md#publish)*

Defined in node_modules/@types/ioredis/index.d.ts:628

**Parameters:**

▪ **channel**: *string*

▪ **message**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **publish**(`channel`: string, `message`: string): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[publish](_redis_.redis.md#publish)*

Defined in node_modules/@types/ioredis/index.d.ts:629

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`message` | string |

**Returns:** *Promise‹number›*

___

###  publishBuffer

▸ **publishBuffer**(`channel`: string, `message`: Buffer): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[publishBuffer](_redis_.redis.md#publishbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:631

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`message` | Buffer |

**Returns:** *Promise‹number›*

___

###  punsubscribe

▸ **punsubscribe**(...`patterns`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[punsubscribe](_redis_.redis.md#punsubscribe)*

Defined in node_modules/@types/ioredis/index.d.ts:626

**Parameters:**

Name | Type |
------ | ------ |
`...patterns` | string[] |

**Returns:** *Promise‹number›*

___

###  quit

▸ **quit**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[quit](_redis_.redis.md#quit)*

Defined in node_modules/@types/ioredis/index.d.ts:661

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **quit**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[quit](_redis_.redis.md#quit)*

Defined in node_modules/@types/ioredis/index.d.ts:662

**Returns:** *Promise‹string›*

___

###  randomkey

▸ **randomkey**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[randomkey](_redis_.redis.md#randomkey)*

Defined in node_modules/@types/ioredis/index.d.ts:507

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **randomkey**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[randomkey](_redis_.redis.md#randomkey)*

Defined in node_modules/@types/ioredis/index.d.ts:508

**Returns:** *Promise‹string›*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [Redis](_redis_.redis.md).[rawListeners](_redis_.redis.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Redis](_redis_.redis.md).[removeAllListeners](_redis_.redis.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:552

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[removeListener](_redis_.redis.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:550

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rename

▸ **rename**(`key`: KeyType, `newkey`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[rename](_redis_.redis.md#rename)*

Defined in node_modules/@types/ioredis/index.d.ts:516

**Parameters:**

▪ **key**: *KeyType*

▪ **newkey**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Ok): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Ok |

**Returns:** *void*

▸ **rename**(`key`: KeyType, `newkey`: KeyType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[rename](_redis_.redis.md#rename)*

Defined in node_modules/@types/ioredis/index.d.ts:517

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`newkey` | KeyType |

**Returns:** *Promise‹Ok›*

___

###  renamenx

▸ **renamenx**(`key`: KeyType, `newkey`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[renamenx](_redis_.redis.md#renamenx)*

Defined in node_modules/@types/ioredis/index.d.ts:519

**Parameters:**

▪ **key**: *KeyType*

▪ **newkey**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **renamenx**(`key`: KeyType, `newkey`: KeyType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[renamenx](_redis_.redis.md#renamenx)*

Defined in node_modules/@types/ioredis/index.d.ts:520

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`newkey` | KeyType |

**Returns:** *Promise‹BooleanResponse›*

___

###  restore

▸ **restore**(...`args`: ValueType[]): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[restore](_redis_.redis.md#restore)*

Defined in node_modules/@types/ioredis/index.d.ts:640

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *Promise‹Ok›*

___

###  rpop

▸ **rpop**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[rpop](_redis_.redis.md#rpop)*

Defined in node_modules/@types/ioredis/index.d.ts:228

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **rpop**(`key`: KeyType): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[rpop](_redis_.redis.md#rpop)*

Defined in node_modules/@types/ioredis/index.d.ts:229

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string›*

___

###  rpoplpush

▸ **rpoplpush**(`source`: string, `destination`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[rpoplpush](_redis_.redis.md#rpoplpush)*

Defined in node_modules/@types/ioredis/index.d.ts:270

**Parameters:**

▪ **source**: *string*

▪ **destination**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **rpoplpush**(`source`: string, `destination`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[rpoplpush](_redis_.redis.md#rpoplpush)*

Defined in node_modules/@types/ioredis/index.d.ts:271

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |

**Returns:** *Promise‹string›*

___

###  rpoplpushBuffer

▸ **rpoplpushBuffer**(`source`: string, `destination`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[rpoplpushBuffer](_redis_.redis.md#rpoplpushbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:273

**Parameters:**

▪ **source**: *string*

▪ **destination**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Buffer |

**Returns:** *void*

▸ **rpoplpushBuffer**(`source`: string, `destination`: string): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[rpoplpushBuffer](_redis_.redis.md#rpoplpushbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:274

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |

**Returns:** *Promise‹Buffer›*

___

###  rpush

▸ **rpush**(`key`: KeyType, ...`values`: ValueType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[rpush](_redis_.redis.md#rpush)*

Defined in node_modules/@types/ioredis/index.d.ts:207

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...values` | ValueType[] |

**Returns:** *Promise‹number›*

___

###  rpushBuffer

▸ **rpushBuffer**(`key`: string, ...`values`: Buffer[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[rpushBuffer](_redis_.redis.md#rpushbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:209

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`...values` | Buffer[] |

**Returns:** *Promise‹number›*

___

###  rpushx

▸ **rpushx**(`key`: KeyType, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[rpushx](_redis_.redis.md#rpushx)*

Defined in node_modules/@types/ioredis/index.d.ts:213

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **rpushx**(`key`: KeyType, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[rpushx](_redis_.redis.md#rpushx)*

Defined in node_modules/@types/ioredis/index.d.ts:214

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  sadd

▸ **sadd**(`key`: KeyType, ...`members`: ValueType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[sadd](_redis_.redis.md#sadd)*

Defined in node_modules/@types/ioredis/index.d.ts:276

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...members` | ValueType[] |

**Returns:** *Promise‹number›*

___

###  save

▸ **save**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[save](_redis_.redis.md#save)*

Defined in node_modules/@types/ioredis/index.d.ts:554

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **save**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[save](_redis_.redis.md#save)*

Defined in node_modules/@types/ioredis/index.d.ts:555

**Returns:** *Promise‹string›*

___

###  scan

▸ **scan**(`cursor`: number | string): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:664

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |

**Returns:** *Promise‹[string, string[]]›*

▸ **scan**(`cursor`: number | string, `matchOption`: "match" | "MATCH", `pattern`: string): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:666

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |

**Returns:** *Promise‹[string, string[]]›*

▸ **scan**(`cursor`: number | string, `countOption`: "count" | "COUNT", `count`: number): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:667

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |

**Returns:** *Promise‹[string, string[]]›*

▸ **scan**(`cursor`: number | string, `matchOption`: "match" | "MATCH", `pattern`: string, `countOption`: "count" | "COUNT", `count`: number): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:669

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |

**Returns:** *Promise‹[string, string[]]›*

▸ **scan**(`cursor`: number | string, `countOption`: "count" | "COUNT", `count`: number, `matchOption`: "match" | "MATCH", `pattern`: string): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:676

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |

**Returns:** *Promise‹[string, string[]]›*

___

###  scanPromise

▸ **scanPromise**(`options?`: ScanStreamOption): *Promise‹string[]›*

*Defined in [redis.ts:115](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L115)*

Wrapper for scanStream that returns a promise

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ScanStreamOption |

**Returns:** *Promise‹string[]›*

___

###  scanStream

▸ **scanStream**(`options?`: ScanStreamOption): *Readable*

*Inherited from [Redis](_redis_.redis.md).[scanStream](_redis_.redis.md#scanstream)*

Defined in node_modules/@types/ioredis/index.d.ts:698

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ScanStreamOption |

**Returns:** *Readable*

___

###  scard

▸ **scard**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[scard](_redis_.redis.md#scard)*

Defined in node_modules/@types/ioredis/index.d.ts:291

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **scard**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[scard](_redis_.redis.md#scard)*

Defined in node_modules/@types/ioredis/index.d.ts:292

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  script

▸ **script**(...`args`: ValueType[]): *any*

*Inherited from [Redis](_redis_.redis.md).[script](_redis_.redis.md#script)*

Defined in node_modules/@types/ioredis/index.d.ts:659

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *any*

___

###  sdiff

▸ **sdiff**(...`keys`: KeyType[]): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[sdiff](_redis_.redis.md#sdiff)*

Defined in node_modules/@types/ioredis/index.d.ts:312

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹string[]›*

___

###  sdiffstore

▸ **sdiffstore**(`destination`: string, ...`keys`: KeyType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[sdiffstore](_redis_.redis.md#sdiffstore)*

Defined in node_modules/@types/ioredis/index.d.ts:314

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`...keys` | KeyType[] |

**Returns:** *Promise‹number›*

___

###  select

▸ **select**(`index`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[select](_redis_.redis.md#select)*

Defined in node_modules/@types/ioredis/index.d.ts:510

**Parameters:**

▪ **index**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **select**(`index`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[select](_redis_.redis.md#select)*

Defined in node_modules/@types/ioredis/index.d.ts:511

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Promise‹string›*

___

###  sendCommand

▸ **sendCommand**(): *void*

*Inherited from [Redis](_redis_.redis.md).[sendCommand](_redis_.redis.md#sendcommand)*

Defined in node_modules/@types/ioredis/index.d.ts:55

**Returns:** *void*

___

###  send_command

▸ **send_command**(`command`: string, ...`args`: ValueType[]): *Promise‹any›*

*Inherited from [Redis](_redis_.redis.md).[send_command](_redis_.redis.md#send_command)*

Defined in node_modules/@types/ioredis/index.d.ts:97

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`...args` | ValueType[] |

**Returns:** *Promise‹any›*

___

###  set

▸ **set**(`key`: KeyType, `value`: ValueType, `expiryMode?`: string | any[], `time?`: number | string, `setMode?`: number | string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:110

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode?` | string &#124; any[] |
`time?` | number &#124; string |
`setMode?` | number &#124; string |

**Returns:** *Promise‹string›*

▸ **set**(`key`: KeyType, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:118

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **set**(`key`: KeyType, `value`: ValueType, `setMode`: string | any[], `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:119

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **setMode**: *string | any[]*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **set**(`key`: KeyType, `value`: ValueType, `expiryMode`: string, `time`: number | string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:120

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **expiryMode**: *string*

▪ **time**: *number | string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **set**(`key`: KeyType, `value`: ValueType, `expiryMode`: string, `time`: number | string, `setMode`: number | string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:127

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **expiryMode**: *string*

▪ **time**: *number | string*

▪ **setMode**: *number | string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

___

###  setBuffer

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `expiryMode?`: string | any[], `time?`: number | string, `setMode?`: number | string): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:136

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode?` | string &#124; any[] |
`time?` | number &#124; string |
`setMode?` | number &#124; string |

**Returns:** *Promise‹Buffer›*

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:144

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Buffer |

**Returns:** *void*

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `setMode`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:145

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **setMode**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Buffer |

**Returns:** *void*

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `expiryMode`: string, `time`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:146

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **expiryMode**: *string*

▪ **time**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Buffer |

**Returns:** *void*

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `expiryMode`: string, `time`: number | string, `setMode`: number | string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:153

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **expiryMode**: *string*

▪ **time**: *number | string*

▪ **setMode**: *number | string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Buffer |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Redis](_redis_.redis.md).[setMaxListeners](_redis_.redis.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:553

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setbit

▸ **setbit**(`key`: KeyType, `offset`: number, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[setbit](_redis_.redis.md#setbit)*

Defined in node_modules/@types/ioredis/index.d.ts:184

**Parameters:**

▪ **key**: *KeyType*

▪ **offset**: *number*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **setbit**(`key`: KeyType, `offset`: number, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[setbit](_redis_.redis.md#setbit)*

Defined in node_modules/@types/ioredis/index.d.ts:185

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`offset` | number |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  setex

▸ **setex**(`key`: KeyType, `seconds`: number, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[setex](_redis_.redis.md#setex)*

Defined in node_modules/@types/ioredis/index.d.ts:165

**Parameters:**

▪ **key**: *KeyType*

▪ **seconds**: *number*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: Ok): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | Ok |

**Returns:** *void*

▸ **setex**(`key`: KeyType, `seconds`: number, `value`: ValueType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[setex](_redis_.redis.md#setex)*

Defined in node_modules/@types/ioredis/index.d.ts:166

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`seconds` | number |
`value` | ValueType |

**Returns:** *Promise‹Ok›*

___

###  setnx

▸ **setnx**(`key`: KeyType, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[setnx](_redis_.redis.md#setnx)*

Defined in node_modules/@types/ioredis/index.d.ts:162

**Parameters:**

▪ **key**: *KeyType*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **setnx**(`key`: KeyType, `value`: ValueType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[setnx](_redis_.redis.md#setnx)*

Defined in node_modules/@types/ioredis/index.d.ts:163

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise‹BooleanResponse›*

___

###  setrange

▸ **setrange**(`key`: KeyType, `offset`: number, `value`: ValueType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[setrange](_redis_.redis.md#setrange)*

Defined in node_modules/@types/ioredis/index.d.ts:190

**Parameters:**

▪ **key**: *KeyType*

▪ **offset**: *number*

▪ **value**: *ValueType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **setrange**(`key`: KeyType, `offset`: number, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[setrange](_redis_.redis.md#setrange)*

Defined in node_modules/@types/ioredis/index.d.ts:191

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`offset` | number |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  shutdown

▸ **shutdown**(`save`: "SAVE" | "NOSAVE", `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[shutdown](_redis_.redis.md#shutdown)*

Defined in node_modules/@types/ioredis/index.d.ts:563

**Parameters:**

▪ **save**: *"SAVE" | "NOSAVE"*

▪ **callback**: *function*

▸ (`err`: Error, `res`: never): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | never |

**Returns:** *void*

▸ **shutdown**(`save`: "SAVE" | "NOSAVE"): *Promise‹never›*

*Inherited from [Redis](_redis_.redis.md).[shutdown](_redis_.redis.md#shutdown)*

Defined in node_modules/@types/ioredis/index.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`save` | "SAVE" &#124; "NOSAVE" |

**Returns:** *Promise‹never›*

___

###  sinter

▸ **sinter**(...`keys`: KeyType[]): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[sinter](_redis_.redis.md#sinter)*

Defined in node_modules/@types/ioredis/index.d.ts:304

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹string[]›*

___

###  sinterstore

▸ **sinterstore**(`destination`: string, ...`keys`: KeyType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[sinterstore](_redis_.redis.md#sinterstore)*

Defined in node_modules/@types/ioredis/index.d.ts:306

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`...keys` | KeyType[] |

**Returns:** *Promise‹number›*

___

###  sismember

▸ **sismember**(`key`: KeyType, `member`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[sismember](_redis_.redis.md#sismember)*

Defined in node_modules/@types/ioredis/index.d.ts:288

**Parameters:**

▪ **key**: *KeyType*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **sismember**(`key`: KeyType, `member`: string): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[sismember](_redis_.redis.md#sismember)*

Defined in node_modules/@types/ioredis/index.d.ts:289

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |

**Returns:** *Promise‹BooleanResponse›*

___

###  slaveof

▸ **slaveof**(`host`: string, `port`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[slaveof](_redis_.redis.md#slaveof)*

Defined in node_modules/@types/ioredis/index.d.ts:611

**Parameters:**

▪ **host**: *string*

▪ **port**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **slaveof**(`host`: string, `port`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[slaveof](_redis_.redis.md#slaveof)*

Defined in node_modules/@types/ioredis/index.d.ts:612

**Parameters:**

Name | Type |
------ | ------ |
`host` | string |
`port` | number |

**Returns:** *Promise‹string›*

___

###  smembers

▸ **smembers**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[smembers](_redis_.redis.md#smembers)*

Defined in node_modules/@types/ioredis/index.d.ts:316

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **smembers**(`key`: KeyType): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[smembers](_redis_.redis.md#smembers)*

Defined in node_modules/@types/ioredis/index.d.ts:317

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string[]›*

___

###  smove

▸ **smove**(`source`: string, `destination`: string, `member`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[smove](_redis_.redis.md#smove)*

Defined in node_modules/@types/ioredis/index.d.ts:280

**Parameters:**

▪ **source**: *string*

▪ **destination**: *string*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: BooleanResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | BooleanResponse |

**Returns:** *void*

▸ **smove**(`source`: string, `destination`: string, `member`: string): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[smove](_redis_.redis.md#smove)*

Defined in node_modules/@types/ioredis/index.d.ts:286

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`member` | string |

**Returns:** *Promise‹BooleanResponse›*

___

###  sort

▸ **sort**(`key`: KeyType, ...`args`: string[]): *Promise‹string[] | number›*

*Inherited from [Redis](_redis_.redis.md).[sort](_redis_.redis.md#sort)*

Defined in node_modules/@types/ioredis/index.d.ts:590

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...args` | string[] |

**Returns:** *Promise‹string[] | number›*

___

###  spop

▸ **spop**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[spop](_redis_.redis.md#spop)*

Defined in node_modules/@types/ioredis/index.d.ts:294

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string &#124; null |

**Returns:** *void*

▸ **spop**(`key`: KeyType): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[spop](_redis_.redis.md#spop)*

Defined in node_modules/@types/ioredis/index.d.ts:295

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string | null›*

▸ **spop**(`key`: KeyType, `count`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[spop](_redis_.redis.md#spop)*

Defined in node_modules/@types/ioredis/index.d.ts:296

**Parameters:**

▪ **key**: *KeyType*

▪ **count**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **spop**(`key`: KeyType, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[spop](_redis_.redis.md#spop)*

Defined in node_modules/@types/ioredis/index.d.ts:297

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`count` | number |

**Returns:** *Promise‹string[]›*

___

###  srandmember

▸ **srandmember**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[srandmember](_redis_.redis.md#srandmember)*

Defined in node_modules/@types/ioredis/index.d.ts:299

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string &#124; null |

**Returns:** *void*

▸ **srandmember**(`key`: KeyType): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[srandmember](_redis_.redis.md#srandmember)*

Defined in node_modules/@types/ioredis/index.d.ts:300

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string | null›*

▸ **srandmember**(`key`: KeyType, `count`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[srandmember](_redis_.redis.md#srandmember)*

Defined in node_modules/@types/ioredis/index.d.ts:301

**Parameters:**

▪ **key**: *KeyType*

▪ **count**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **srandmember**(`key`: KeyType, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[srandmember](_redis_.redis.md#srandmember)*

Defined in node_modules/@types/ioredis/index.d.ts:302

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`count` | number |

**Returns:** *Promise‹string[]›*

___

###  srem

▸ **srem**(`key`: KeyType, ...`members`: ValueType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[srem](_redis_.redis.md#srem)*

Defined in node_modules/@types/ioredis/index.d.ts:278

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...members` | ValueType[] |

**Returns:** *Promise‹number›*

___

###  sscan

▸ **sscan**(`key`: KeyType, `cursor`: number, ...`args`: ValueType[]): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[sscan](_redis_.redis.md#sscan)*

Defined in node_modules/@types/ioredis/index.d.ts:684

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`cursor` | number |
`...args` | ValueType[] |

**Returns:** *Promise‹[string, string[]]›*

___

###  sscanStream

▸ **sscanStream**(`key`: KeyType, `options?`: ScanStreamOption): *Readable*

*Inherited from [Redis](_redis_.redis.md).[sscanStream](_redis_.redis.md#sscanstream)*

Defined in node_modules/@types/ioredis/index.d.ts:699

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Readable*

___

###  strlen

▸ **strlen**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[strlen](_redis_.redis.md#strlen)*

Defined in node_modules/@types/ioredis/index.d.ts:174

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **strlen**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[strlen](_redis_.redis.md#strlen)*

Defined in node_modules/@types/ioredis/index.d.ts:175

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  subscribe

▸ **subscribe**(...`channels`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[subscribe](_redis_.redis.md#subscribe)*

Defined in node_modules/@types/ioredis/index.d.ts:620

**Parameters:**

Name | Type |
------ | ------ |
`...channels` | string[] |

**Returns:** *Promise‹number›*

___

###  substr

▸ **substr**(`key`: KeyType, `start`: number, `end`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[substr](_redis_.redis.md#substr)*

Defined in node_modules/@types/ioredis/index.d.ts:196

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **end**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **substr**(`key`: KeyType, `start`: number, `end`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[substr](_redis_.redis.md#substr)*

Defined in node_modules/@types/ioredis/index.d.ts:197

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`end` | number |

**Returns:** *Promise‹string›*

___

###  sunion

▸ **sunion**(...`keys`: KeyType[]): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[sunion](_redis_.redis.md#sunion)*

Defined in node_modules/@types/ioredis/index.d.ts:308

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹string[]›*

___

###  sunionstore

▸ **sunionstore**(`destination`: string, ...`keys`: KeyType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[sunionstore](_redis_.redis.md#sunionstore)*

Defined in node_modules/@types/ioredis/index.d.ts:310

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`...keys` | KeyType[] |

**Returns:** *Promise‹number›*

___

###  sync

▸ **sync**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[sync](_redis_.redis.md#sync)*

Defined in node_modules/@types/ioredis/index.d.ts:581

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | any |

**Returns:** *void*

▸ **sync**(): *Promise‹any›*

*Inherited from [Redis](_redis_.redis.md).[sync](_redis_.redis.md#sync)*

Defined in node_modules/@types/ioredis/index.d.ts:582

**Returns:** *Promise‹any›*

___

###  time

▸ **time**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[time](_redis_.redis.md#time)*

Defined in node_modules/@types/ioredis/index.d.ts:596

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: [string, string]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | [string, string] |

**Returns:** *void*

▸ **time**(): *Promise‹[string, string]›*

*Inherited from [Redis](_redis_.redis.md).[time](_redis_.redis.md#time)*

Defined in node_modules/@types/ioredis/index.d.ts:597

**Returns:** *Promise‹[string, string]›*

___

###  ttl

▸ **ttl**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[ttl](_redis_.redis.md#ttl)*

Defined in node_modules/@types/ioredis/index.d.ts:602

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **ttl**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[ttl](_redis_.redis.md#ttl)*

Defined in node_modules/@types/ioredis/index.d.ts:603

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  type

▸ **type**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[type](_redis_.redis.md#type)*

Defined in node_modules/@types/ioredis/index.d.ts:569

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **type**(`key`: KeyType): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[type](_redis_.redis.md#type)*

Defined in node_modules/@types/ioredis/index.d.ts:570

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string›*

___

###  unlink

▸ **unlink**(...`keys`: KeyType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[unlink](_redis_.redis.md#unlink)*

Defined in node_modules/@types/ioredis/index.d.ts:179

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹number›*

___

###  unsubscribe

▸ **unsubscribe**(...`channels`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[unsubscribe](_redis_.redis.md#unsubscribe)*

Defined in node_modules/@types/ioredis/index.d.ts:622

**Parameters:**

Name | Type |
------ | ------ |
`...channels` | string[] |

**Returns:** *Promise‹number›*

___

###  unwatch

▸ **unwatch**(`callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[unwatch](_redis_.redis.md#unwatch)*

Defined in node_modules/@types/ioredis/index.d.ts:635

**Parameters:**

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **unwatch**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[unwatch](_redis_.redis.md#unwatch)*

Defined in node_modules/@types/ioredis/index.d.ts:636

**Returns:** *Promise‹string›*

___

###  watch

▸ **watch**(...`keys`: KeyType[]): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[watch](_redis_.redis.md#watch)*

Defined in node_modules/@types/ioredis/index.d.ts:633

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹Ok›*

___

###  xack

▸ **xack**(`key`: KeyType, `group`: string, ...`ids`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[xack](_redis_.redis.md#xack)*

Defined in node_modules/@types/ioredis/index.d.ts:703

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`group` | string |
`...ids` | string[] |

**Returns:** *Promise‹number›*

___

###  xadd

▸ **xadd**(`key`: KeyType, `id`: string, ...`args`: string[]): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[xadd](_redis_.redis.md#xadd)*

Defined in node_modules/@types/ioredis/index.d.ts:705

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`id` | string |
`...args` | string[] |

**Returns:** *Promise‹string›*

▸ **xadd**(`key`: KeyType, `maxLenOption`: "MAXLEN" | "maxlen", `count`: number, ...`args`: string[]): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[xadd](_redis_.redis.md#xadd)*

Defined in node_modules/@types/ioredis/index.d.ts:706

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`maxLenOption` | "MAXLEN" &#124; "maxlen" |
`count` | number |
`...args` | string[] |

**Returns:** *Promise‹string›*

▸ **xadd**(`key`: KeyType, `maxLenOption`: "MAXLEN" | "maxlen", `approximate`: "~", `count`: number, ...`args`: string[]): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[xadd](_redis_.redis.md#xadd)*

Defined in node_modules/@types/ioredis/index.d.ts:707

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`maxLenOption` | "MAXLEN" &#124; "maxlen" |
`approximate` | "~" |
`count` | number |
`...args` | string[] |

**Returns:** *Promise‹string›*

___

###  xclaim

▸ **xclaim**(`key`: KeyType, `group`: string, `consumer`: string, `minIdleTime`: number, ...`args`: ValueType[]): *Promise‹Array‹[string, string[]]››*

*Inherited from [Redis](_redis_.redis.md).[xclaim](_redis_.redis.md#xclaim)*

Defined in node_modules/@types/ioredis/index.d.ts:715

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`group` | string |
`consumer` | string |
`minIdleTime` | number |
`...args` | ValueType[] |

**Returns:** *Promise‹Array‹[string, string[]]››*

___

###  xdel

▸ **xdel**(`key`: KeyType, ...`ids`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[xdel](_redis_.redis.md#xdel)*

Defined in node_modules/@types/ioredis/index.d.ts:723

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...ids` | string[] |

**Returns:** *Promise‹number›*

___

###  xgroup

▸ **xgroup**(...`args`: ValueType[]): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[xgroup](_redis_.redis.md#xgroup)*

Defined in node_modules/@types/ioredis/index.d.ts:725

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *Promise‹Ok›*

___

###  xinfo

▸ **xinfo**(...`args`: ValueType[]): *Promise‹any›*

*Inherited from [Redis](_redis_.redis.md).[xinfo](_redis_.redis.md#xinfo)*

Defined in node_modules/@types/ioredis/index.d.ts:727

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *Promise‹any›*

___

###  xlen

▸ **xlen**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[xlen](_redis_.redis.md#xlen)*

Defined in node_modules/@types/ioredis/index.d.ts:729

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  xpending

▸ **xpending**(`key`: KeyType, `group`: string, ...`args`: ValueType[]): *Promise‹any›*

*Inherited from [Redis](_redis_.redis.md).[xpending](_redis_.redis.md#xpending)*

Defined in node_modules/@types/ioredis/index.d.ts:731

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`group` | string |
`...args` | ValueType[] |

**Returns:** *Promise‹any›*

___

###  xrange

▸ **xrange**(`key`: KeyType, `start`: string, `end`: string, ...`args`: ValueType[]): *Promise‹Array‹[string, string[]]››*

*Inherited from [Redis](_redis_.redis.md).[xrange](_redis_.redis.md#xrange)*

Defined in node_modules/@types/ioredis/index.d.ts:733

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | string |
`end` | string |
`...args` | ValueType[] |

**Returns:** *Promise‹Array‹[string, string[]]››*

___

###  xread

▸ **xread**(...`args`: ValueType[]): *Array‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[xread](_redis_.redis.md#xread)*

Defined in node_modules/@types/ioredis/index.d.ts:735

**Parameters:**

Name | Type |
------ | ------ |
`...args` | ValueType[] |

**Returns:** *Array‹[string, string[]]›*

___

###  xreadgroup

▸ **xreadgroup**(`groupOption`: "GROUP" | "group", `group`: string, `consumer`: string, ...`args`: ValueType[]): *any*

*Inherited from [Redis](_redis_.redis.md).[xreadgroup](_redis_.redis.md#xreadgroup)*

Defined in node_modules/@types/ioredis/index.d.ts:737

**Parameters:**

Name | Type |
------ | ------ |
`groupOption` | "GROUP" &#124; "group" |
`group` | string |
`consumer` | string |
`...args` | ValueType[] |

**Returns:** *any*

___

###  xrevrange

▸ **xrevrange**(`key`: KeyType, `end`: string, `start`: string, ...`args`: ValueType[]): *Promise‹Array‹[string, string[]]››*

*Inherited from [Redis](_redis_.redis.md).[xrevrange](_redis_.redis.md#xrevrange)*

Defined in node_modules/@types/ioredis/index.d.ts:739

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`end` | string |
`start` | string |
`...args` | ValueType[] |

**Returns:** *Promise‹Array‹[string, string[]]››*

___

###  xtrim

▸ **xtrim**(`key`: KeyType, `maxLenOption`: "MAXLEN" | "maxlen", ...`args`: ValueType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[xtrim](_redis_.redis.md#xtrim)*

Defined in node_modules/@types/ioredis/index.d.ts:741

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`maxLenOption` | "MAXLEN" &#124; "maxlen" |
`...args` | ValueType[] |

**Returns:** *Promise‹number›*

___

###  zadd

▸ **zadd**(`key`: KeyType, ...`args`: string[]): *Promise‹number | string›*

*Inherited from [Redis](_redis_.redis.md).[zadd](_redis_.redis.md#zadd)*

Defined in node_modules/@types/ioredis/index.d.ts:319

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...args` | string[] |

**Returns:** *Promise‹number | string›*

___

###  zaddBuffer

▸ **zaddBuffer**(`key`: KeyType, `score1`: number, `member1`: Buffer): *Promise‹string | number›*

*Inherited from [Redis](_redis_.redis.md).[zaddBuffer](_redis_.redis.md#zaddbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:321

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`score1` | number |
`member1` | Buffer |

**Returns:** *Promise‹string | number›*

___

###  zcard

▸ **zcard**(`key`: KeyType, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zcard](_redis_.redis.md#zcard)*

Defined in node_modules/@types/ioredis/index.d.ts:419

**Parameters:**

▪ **key**: *KeyType*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **zcard**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zcard](_redis_.redis.md#zcard)*

Defined in node_modules/@types/ioredis/index.d.ts:420

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  zcount

▸ **zcount**(`key`: KeyType, `min`: number | string, `max`: number | string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zcount](_redis_.redis.md#zcount)*

Defined in node_modules/@types/ioredis/index.d.ts:411

**Parameters:**

▪ **key**: *KeyType*

▪ **min**: *number | string*

▪ **max**: *number | string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **zcount**(`key`: KeyType, `min`: number | string, `max`: number | string): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zcount](_redis_.redis.md#zcount)*

Defined in node_modules/@types/ioredis/index.d.ts:417

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |

**Returns:** *Promise‹number›*

___

###  zincrby

▸ **zincrby**(`key`: KeyType, `increment`: number, `member`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zincrby](_redis_.redis.md#zincrby)*

Defined in node_modules/@types/ioredis/index.d.ts:323

**Parameters:**

▪ **key**: *KeyType*

▪ **increment**: *number*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **zincrby**(`key`: KeyType, `increment`: number, `member`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[zincrby](_redis_.redis.md#zincrby)*

Defined in node_modules/@types/ioredis/index.d.ts:324

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`increment` | number |
`member` | string |

**Returns:** *Promise‹string›*

___

###  zinterstore

▸ **zinterstore**(`destination`: string, `numkeys`: number, `key`: KeyType, ...`args`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zinterstore](_redis_.redis.md#zinterstore)*

Defined in node_modules/@types/ioredis/index.d.ts:341

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`numkeys` | number |
`key` | KeyType |
`...args` | string[] |

**Returns:** *Promise‹number›*

___

###  zrange

▸ **zrange**(`key`: KeyType, `start`: number, `stop`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zrange](_redis_.redis.md#zrange)*

Defined in node_modules/@types/ioredis/index.d.ts:343

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **stop**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **zrange**(`key`: KeyType, `start`: number, `stop`: number, `withScores`: "WITHSCORES", `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zrange](_redis_.redis.md#zrange)*

Defined in node_modules/@types/ioredis/index.d.ts:344

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **stop**: *number*

▪ **withScores**: *"WITHSCORES"*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **zrange**(`key`: KeyType, `start`: number, `stop`: number, `withScores?`: undefined | "WITHSCORES"): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrange](_redis_.redis.md#zrange)*

Defined in node_modules/@types/ioredis/index.d.ts:351

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *Promise‹string[]›*

___

###  zrangebyscore

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `withScores?`: undefined | "WITHSCORES"): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:363

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *Promise‹string[]›*

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `withScores`: "WITHSCORES", `limit`: "LIMIT", `offset`: number, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:369

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`withScores` | "WITHSCORES" |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |

**Returns:** *Promise‹string[]›*

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `limit`: "LIMIT", `offset`: number, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:378

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |

**Returns:** *Promise‹string[]›*

___

###  zrank

▸ **zrank**(`key`: KeyType, `member`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zrank](_redis_.redis.md#zrank)*

Defined in node_modules/@types/ioredis/index.d.ts:425

**Parameters:**

▪ **key**: *KeyType*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number &#124; null |

**Returns:** *void*

▸ **zrank**(`key`: KeyType, `member`: string): *Promise‹number | null›*

*Inherited from [Redis](_redis_.redis.md).[zrank](_redis_.redis.md#zrank)*

Defined in node_modules/@types/ioredis/index.d.ts:426

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |

**Returns:** *Promise‹number | null›*

___

###  zrem

▸ **zrem**(`key`: KeyType, ...`members`: ValueType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zrem](_redis_.redis.md#zrem)*

Defined in node_modules/@types/ioredis/index.d.ts:326

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`...members` | ValueType[] |

**Returns:** *Promise‹number›*

___

###  zremrangebyrank

▸ **zremrangebyrank**(`key`: KeyType, `start`: number, `stop`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zremrangebyrank](_redis_.redis.md#zremrangebyrank)*

Defined in node_modules/@types/ioredis/index.d.ts:336

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **stop**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **zremrangebyrank**(`key`: KeyType, `start`: number, `stop`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zremrangebyrank](_redis_.redis.md#zremrangebyrank)*

Defined in node_modules/@types/ioredis/index.d.ts:337

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |

**Returns:** *Promise‹number›*

___

###  zremrangebyscore

▸ **zremrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zremrangebyscore](_redis_.redis.md#zremrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:328

**Parameters:**

▪ **key**: *KeyType*

▪ **min**: *number | string*

▪ **max**: *number | string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **zremrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zremrangebyscore](_redis_.redis.md#zremrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:334

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |

**Returns:** *Promise‹number›*

___

###  zrevrange

▸ **zrevrange**(`key`: KeyType, `start`: number, `stop`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrange](_redis_.redis.md#zrevrange)*

Defined in node_modules/@types/ioredis/index.d.ts:353

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **stop**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **zrevrange**(`key`: KeyType, `start`: number, `stop`: number, `withScores`: "WITHSCORES", `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrange](_redis_.redis.md#zrevrange)*

Defined in node_modules/@types/ioredis/index.d.ts:354

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **stop**: *number*

▪ **withScores**: *"WITHSCORES"*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string[] |

**Returns:** *void*

▸ **zrevrange**(`key`: KeyType, `start`: number, `stop`: number, `withScores?`: undefined | "WITHSCORES"): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrevrange](_redis_.redis.md#zrevrange)*

Defined in node_modules/@types/ioredis/index.d.ts:361

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *Promise‹string[]›*

___

###  zrevrangebyscore

▸ **zrevrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `withScores?`: undefined | "WITHSCORES"): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:387

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *Promise‹string[]›*

▸ **zrevrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `withScores`: "WITHSCORES", `limit`: "LIMIT", `offset`: number, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:393

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`withScores` | "WITHSCORES" |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |

**Returns:** *Promise‹string[]›*

▸ **zrevrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `limit`: "LIMIT", `offset`: number, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:402

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |

**Returns:** *Promise‹string[]›*

___

###  zrevrank

▸ **zrevrank**(`key`: KeyType, `member`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrank](_redis_.redis.md#zrevrank)*

Defined in node_modules/@types/ioredis/index.d.ts:428

**Parameters:**

▪ **key**: *KeyType*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number &#124; null |

**Returns:** *void*

▸ **zrevrank**(`key`: KeyType, `member`: string): *Promise‹number | null›*

*Inherited from [Redis](_redis_.redis.md).[zrevrank](_redis_.redis.md#zrevrank)*

Defined in node_modules/@types/ioredis/index.d.ts:429

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |

**Returns:** *Promise‹number | null›*

___

###  zscan

▸ **zscan**(`key`: KeyType, `cursor`: number, ...`args`: ValueType[]): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[zscan](_redis_.redis.md#zscan)*

Defined in node_modules/@types/ioredis/index.d.ts:688

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`cursor` | number |
`...args` | ValueType[] |

**Returns:** *Promise‹[string, string[]]›*

___

###  zscanPromise

▸ **zscanPromise**(`key`: KeyType, `options?`: ScanStreamOption): *Promise‹string[]›*

*Defined in [redis.ts:138](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L138)*

Wrapper for scanStream that returns a promise

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Promise‹string[]›*

___

###  zscanStream

▸ **zscanStream**(`key`: KeyType, `options?`: ScanStreamOption): *Readable*

*Inherited from [Redis](_redis_.redis.md).[zscanStream](_redis_.redis.md#zscanstream)*

Defined in node_modules/@types/ioredis/index.d.ts:701

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Readable*

___

###  zscore

▸ **zscore**(`key`: KeyType, `member`: string, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[zscore](_redis_.redis.md#zscore)*

Defined in node_modules/@types/ioredis/index.d.ts:422

**Parameters:**

▪ **key**: *KeyType*

▪ **member**: *string*

▪ **callback**: *function*

▸ (`err`: Error, `res`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | string |

**Returns:** *void*

▸ **zscore**(`key`: KeyType, `member`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[zscore](_redis_.redis.md#zscore)*

Defined in node_modules/@types/ioredis/index.d.ts:423

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |

**Returns:** *Promise‹string›*

___

###  zunionstore

▸ **zunionstore**(`destination`: string, `numkeys`: number, `key`: KeyType, ...`args`: string[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zunionstore](_redis_.redis.md#zunionstore)*

Defined in node_modules/@types/ioredis/index.d.ts:339

**Parameters:**

Name | Type |
------ | ------ |
`destination` | string |
`numkeys` | number |
`key` | KeyType |
`...args` | string[] |

**Returns:** *Promise‹number›*

## Object literals

### `Static` CONSTANTS

### ▪ **CONSTANTS**: *object*

*Defined in [redis.ts:42](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L42)*

###  DEFAULT_SKEW_MS

• **DEFAULT_SKEW_MS**: *number* = 5

*Defined in [redis.ts:42](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L42)*

###  SEARCH_FIELD_TYPES

• **SEARCH_FIELD_TYPES**: *[SEARCH_FIELD_TYPES](../enums/_redis_.search_field_types.md)*

*Defined in [redis.ts:42](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L42)*

###  SEARCH_FIELD_TYPE_VALUES

• **SEARCH_FIELD_TYPE_VALUES**: *[TAG](../enums/_redis_.search_field_types.md#tag) | [TEXT](../enums/_redis_.search_field_types.md#text) | [NUMERIC](../enums/_redis_.search_field_types.md#numeric) | [GEO](../enums/_redis_.search_field_types.md#geo)[]* = Object.values(SEARCH_FIELD_TYPES)

*Defined in [redis.ts:42](https://github.com/ehacke/redis/blob/0881c54/redis.ts#L42)*
