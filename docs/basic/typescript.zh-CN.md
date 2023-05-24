---
title: Typescript
nav:
  path: /basic
  title: 基础
  order: 10
group:
  path: /basic/ts
  title: Typescript
  order: 20
---

## 基础

### 数据类型

#### js 类型

布尔 ,数值 ,字符串 ,数组 ,null, undefined ,object ,symbol

#### ts 类型

- 元组： 可以包含多种类型的数组`[string, number]`
- 枚举: 键和值是映射关系
- any： 所有类型集合
- void： 没有返回，但可以返回 null, undefined
- never: 可以返回错误
- unknown： 可以是任何类型

### 接口和类型别名

interface 可以重复声明并合并

```ts
interface Cat {
  hair: string;
  eye: 'small' | 'middle' | 'large';
}
interface Cat {
  tail: string;
}
const cat: Cat = { hair: 'with', eye: 'large', tail: 'large' };
interface JuBao extends Cat {
  name: string;
}
```

type

```ts
type Dog = {
  hair: string;
  eye: 'small' | 'middle' | 'large';
};

type JuGou = { name: string } & Dog;
```

### 函数重载

```ts
function sleep(name: string): string;
function sleep(name: string, time: string): string {}
sleep('jubao');
sleep('jubao', '下午');
```

### 泛型

```ts
type CatPartial<T> = {
  [P in keyof T]?: T[P];
};
interface Sleep {
  name: string;
}
type Cat = CatPartial<Sleep>;
```

### 索引签名

### 函数重载

### 类型方法

## 用类型方法

### Partial

将类型中的所有属性变为可选属性

```ts
type CatPartial<T> = {
  [P in keyof T]?: T[P];
};
interface Sleep {
  name: string;
  age: number;
}
type Cat = CatPartial<Sleep>;
```

### Required

将类型中的所有属性变为必选属性

```ts
type CatRequired<T> = {
  [P in keyof T]-?: T[P];
};
interface Sleep {
  name?: string;
  age?: number;
}
type Cat = CatRequired<Sleep>;
```

### Readonly

将类型中的所有属性变为只读属性

```ts
type CatReadonly<T> = {
  readonly [P in keyof T]-?: T[P];
};
interface Sleep {
  name?: string;
  age?: number;
}
type Cat = CatReadonly<Sleep>;
```

### Record

创建一个由 KeyType 类型的键和 ValueType 类型的值组成的对象类型

```ts
type CatRecord<T, U> = {
  [K in K]: U;
};
interface Sleep {
  name?: string;
  age?: number;
}
type Cat = CatRecord<string, Sleep>;
```

### Exclude

从 Type 类型中排除 ExcludedUnion 类型。

```ts
type CatExclude<T, U> = T extends U ? never : T;
interface Sleep {
  name: string;
  age: number;
}
type Cat = CatExclude<Sleep, string>;
const cat: Cat = {
  age: 33,
};
```

- `Omit<Type, Keys>`：从 Type 类型中排除指定的属性 Keys。
- `Pick<Type, Keys>`：从 Type 类型中仅选取指定的属性 Keys。
- `ReturnType<Type>`：获取函数类型的返回值类型。
- `Parameters<Type>`：获取函数类型的参数类型元组。
- `ConstructorParameters<Type>`：获取构造函数类型的参数类型元组。
- `ThisParameterType<Type>`：获取函数类型中的 this 参数类型。
- `RequiredKeys<Type>`：获取类型 Type 中所有必须的属性名组成的联合类型。
- `OptionalKeys<Type>`：获取类型 Type 中所有可选的属性名组成的联合类型。
