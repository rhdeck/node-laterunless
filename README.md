
<a name="readmemd"></a>



<a name="__climd"></a>

# Usage
```bash
npx laterunless [options]
```

<a name="_librarymd"></a>

laterunless - v1.1.0

# laterunless - v1.1.0

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

Defined in: [index.ts:52](https://github.com/rhdeck/node-laterunless/blob/220a159/src/index.ts#L52)

___

### init

▸ **init**(`laterUnlessKey`: *string*): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`laterUnlessKey` | *string* |

**Returns:** *Promise*<*void*\>

Defined in: [index.ts:3](https://github.com/rhdeck/node-laterunless/blob/220a159/src/index.ts#L3)

___

### list

▸ **list**(`laterUnlessKey?`: *string*): *Promise*<{ `date`: Date ; `id`: *string*  }[]\>

#### Parameters:

Name | Type |
------ | ------ |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<{ `date`: Date ; `id`: *string*  }[]\>

Defined in: [index.ts:102](https://github.com/rhdeck/node-laterunless/blob/220a159/src/index.ts#L102)

___

### listPage

▸ **listPage**(`lastCursor?`: *string*, `laterUnlessKey?`: *string*): *Promise*<[nextCursor: string, data: object[]]\>

#### Parameters:

Name | Type |
------ | ------ |
`lastCursor?` | *string* |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<[nextCursor: string, data: object[]]\>

Defined in: [index.ts:74](https://github.com/rhdeck/node-laterunless/blob/220a159/src/index.ts#L74)

___

### send

▸ **send**(`__namedParameters`: { `date`: Date ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id?`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string*  }, `laterUnlessKey?`: *string*): *Promise*<*string*\>

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { `date`: Date ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id?`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string*  } |
`laterUnlessKey?` | *string* |

**Returns:** *Promise*<*string*\>

Defined in: [index.ts:6](https://github.com/rhdeck/node-laterunless/blob/220a159/src/index.ts#L6)
