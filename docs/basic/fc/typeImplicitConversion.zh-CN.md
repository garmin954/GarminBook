---
title: 类型和隐式转换
nav:
  path: /basic
  title: 基础
  order: 100
group:
  path: /basic/bs
  title: 复习
  order: 100

---
### 类型
-- **基础类型**
* number
* string
* null
* undefined
* symbol
* bigint

-- **引用类型**
* array
* object _（function, arguments...）_

### 类型转换
> 需要注意点的

|原始数据|值类型|字符类型|布尔类型|
|-|-|-|-|
|[ ]|	0|	""|	true|
|[20]|	20|	"20"|	true|
|function(){}|	NaN|	"function(){}"|	true|
|{ }	|NaN	|"[object Object]"|	true|
|null	|0|	"null"|	false|
|undefined|	NaN	|"undefined"|	false|

### 隐式转换
> js是`弱类型语言`, 不需要声明变量类型，js自动分配类型以最后一次赋值为准。也叫`动态语言`。当变量做运算时，js同样会进行自动类型转换叫隐式转换

**运算时的隐式转换**
1. 当+号作为`一元操作符`操作单操作数的时候，他就会将这个数转换`为数字类型`
2. 当+号作为`二元操作符`时，如果两个操作数中`存在一个字符类型`的话，那么另外一个操作数也会无条件地`转换为字符串`
3. 当+号作为`二元操作符`时，如果两个操作数`一个都不是字符串`的话，两个操作数会`隐式转换成数字类型`(如果无法成功转换成数字，则变成NaN，再往下操作)，再进行加法算数操作
4. 当算数运算的操作符是`+号以外的其他操作符`时，两个操作数都会转成`数字类型`进行数字运算。

**ToPrimitive**
> 隐式转换实际上执行了 `ToPrimitive` 规则：
1. 当 obj[Symbol.toPrimitive](preferredType) 方法存在时，优先调用该方法；
2. 如果 preferredType 参数为 String，则依次尝试 obj.toString() 与 obj.valueOf() ；
3. 如果 preferredType 参数为 Number 或者默认值，则依次尝试 obj.valueOf() 与 obj.toString() 。
而 [Symbol.toPrimitive] 方法的签名为：
```javascript
const obj = {
  [Symbol.toPrimitive]:function(hint) {
    // return a primitive value
    // hint = one of "string", "number", "default"
  }
}
```


