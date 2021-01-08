
<a name="readmemd"></a>



<a name="__climd"></a>

# Usage
```bash
npx laterunless [options]
```

<a name="_librarymd"></a>

laterunless - v1.0.0

# laterunless - v1.0.0

## Index

### Functions

* [cancel](#cancel)
* [list](#list)
* [send](#send)

## Functions

### cancel

▸ **cancel**(`id`: *string*, `webhookKey`: *string*): *Promise*<*boolean*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`webhookKey` | *string* |

**Returns:** *Promise*<*boolean*\>

Defined in: [index.ts:45](https://github.com/rhdeck/node-laterunless/blob/0741b68/src/index.ts#L45)

___

### list

▸ **list**(`webhookKey`: *string*): *Promise*<{ `date`: Date ; `id`: *string*  }[]\>

#### Parameters:

Name | Type |
------ | ------ |
`webhookKey` | *string* |

**Returns:** *Promise*<{ `date`: Date ; `id`: *string*  }[]\>

Defined in: [index.ts:65](https://github.com/rhdeck/node-laterunless/blob/0741b68/src/index.ts#L65)

___

### send

▸ **send**(`__namedParameters`: { `date`: Date ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id?`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string* ; `webhookKey`: *string*  }): *Promise*<*string*\>

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { `date`: Date ; `encoding?`: *JSON* \| *FORM* ; `headers?`: { [key: string]: *string*;  } ; `id?`: *string* ; `method?`: *GET* \| *POST* ; `payload`: { [key: string]: *any*;  } ; `url`: *string* ; `webhookKey`: *string*  } |

**Returns:** *Promise*<*string*\>

Defined in: [index.ts:2](https://github.com/rhdeck/node-laterunless/blob/0741b68/src/index.ts#L2)
