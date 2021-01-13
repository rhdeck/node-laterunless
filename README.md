
<a name="readmemd"></a>



<a name="__climd"></a>

# Usage
```bash
npx laterunless [options]
```

<a name="_librarymd"></a>

laterunless - v1.1.2

# laterunless - v1.1.2

## Index

### Functions

* [cancel](#cancel)
* [init](#init)
* [list](#list)
* [listPage](#listpage)
* [send](#send)

## Functions

### cancel

▸ **cancel**(`id`: *string*, `laterUnlessKey?`: *string*): *Promise*<*boolean*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<*boolean*\>

Defined in: [index.ts:55](https://github.com/rhdeck/node-laterunless/blob/baf7ebb/src/index.ts#L55)

___

### init

▸ **init**(`laterUnlessKey`: *string*, `host?`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`laterUnlessKey` | *string* |
`host?` | *string* |

**Returns:** *void*

Defined in: [index.ts:4](https://github.com/rhdeck/node-laterunless/blob/baf7ebb/src/index.ts#L4)

___

### list

▸ **list**(`laterUnlessKey?`: *string*): *Promise*<{ `date`: Date ; `id`: *string*  }[]\>

#### Parameters:

Name | Type |
------ | ------ |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<{ `date`: Date ; `id`: *string*  }[]\>

Defined in: [index.ts:105](https://github.com/rhdeck/node-laterunless/blob/baf7ebb/src/index.ts#L105)

___

### listPage

▸ **listPage**(`lastCursor?`: *string*, `laterUnlessKey?`: *string*): *Promise*<[nextCursor: string, data: object[]]\>

#### Parameters:

Name | Type |
------ | ------ |
`lastCursor?` | *string* |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<[nextCursor: string, data: object[]]\>

Defined in: [index.ts:77](https://github.com/rhdeck/node-laterunless/blob/baf7ebb/src/index.ts#L77)

___

### send

▸ **send**(`__namedParameters`: { `date`: Date ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id?`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string*  }, `laterUnlessKey?`: *string*): *Promise*<*string*\>

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { `date`: Date ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id?`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string*  } |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<*string*\>

Defined in: [index.ts:9](https://github.com/rhdeck/node-laterunless/blob/baf7ebb/src/index.ts#L9)
