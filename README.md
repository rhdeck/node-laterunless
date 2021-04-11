
<a name="readmemd"></a>



<a name="__climd"></a>

# Usage
```bash
npx laterunless [options]
```

<a name="_librarymd"></a>

laterunless - v1.2.0

# laterunless - v1.2.0

## Index

### Functions

* [cancel](#cancel)
* [init](#init)
* [list](#list)
* [listPage](#listpage)
* [send](#send)
* [sendWithoutWaiting](#sendwithoutwaiting)
* [setDebug](#setdebug)

## Functions

### cancel

▸ **cancel**(`id`: *string*, `laterUnlessKey?`: *string*): *Promise*<*boolean*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<*boolean*\>

Defined in: [index.ts:168](https://github.com/rhdeck/node-laterunless/blob/b1086fb/src/index.ts#L168)

___

### init

▸ **init**(`laterUnlessKey`: *string*, `host?`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`laterUnlessKey` | *string* |
`host?` | *string* |

**Returns:** *void*

Defined in: [index.ts:5](https://github.com/rhdeck/node-laterunless/blob/b1086fb/src/index.ts#L5)

___

### list

▸ **list**(`laterUnlessKey?`: *string*): *Promise*<{ `date`: Date ; `id`: *string*  }[]\>

#### Parameters:

Name | Type |
------ | ------ |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<{ `date`: Date ; `id`: *string*  }[]\>

Defined in: [index.ts:263](https://github.com/rhdeck/node-laterunless/blob/b1086fb/src/index.ts#L263)

___

### listPage

▸ **listPage**(`lastCursor?`: *string*, `laterUnlessKey?`: *string*): *Promise*<[nextCursor: string, data: object[]]\>

#### Parameters:

Name | Type |
------ | ------ |
`lastCursor?` | *string* |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<[nextCursor: string, data: object[]]\>

Defined in: [index.ts:218](https://github.com/rhdeck/node-laterunless/blob/b1086fb/src/index.ts#L218)

___

### send

▸ **send**(`__namedParameters`: { `date`: Date ; `debug?`: *boolean* ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id?`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string*  }, `laterUnlessKey?`: *string*): *Promise*<*string*\>

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { `date`: Date ; `debug?`: *boolean* ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id?`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string*  } |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<*string*\>

Defined in: [index.ts:13](https://github.com/rhdeck/node-laterunless/blob/b1086fb/src/index.ts#L13)

___

### sendWithoutWaiting

▸ **sendWithoutWaiting**(`__namedParameters`: { `date`: Date ; `debug?`: *boolean* ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string*  }, `laterUnlessKey?`: *string*): *Promise*<*string*\>

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { `date`: Date ; `debug?`: *boolean* ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string*  } |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<*string*\>

Defined in: [index.ts:95](https://github.com/rhdeck/node-laterunless/blob/b1086fb/src/index.ts#L95)

___

### setDebug

▸ **setDebug**(`debug?`: *boolean*): *void*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`debug` | *boolean* | true |

**Returns:** *void*

Defined in: [index.ts:9](https://github.com/rhdeck/node-laterunless/blob/b1086fb/src/index.ts#L9)
