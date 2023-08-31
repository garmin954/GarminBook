---
title: 基础
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

type Cat = CatExclude<'cat' | 'name' | 'age', 'age'>;
const cat: Cat = 'name';
```

### Omit

从 Type 类型中排除指定的属性 Keys

```ts
type CatOmit<T, U extends keyof T> = {
  [K in Exclude<keyof T, U>]: K extends U ? never : T[K];
};

interface Sleep {
  name?: string;
  age?: number;
}

type Cat = CatOmit<Sleep, 'age'>;
const cat: Cat = {
  name: 'jubao',
};
```

### Pick

从 Type 类型中仅选取指定的属性 Keys

```ts
type CatPick<T, U extends keyof T> = {
  [K in U]: T[K];
};

interface Sleep {
  name?: string;
  age?: number;
}

type Cat = CatPick<Sleep, 'age'>;
const cat: Cat = {
  age: 99,
};
```

### ReturnType

获取函数类型的返回值类型

```ts
type CatReturnType<T> = T extends (...args: unknown[]) => infer U ? U : T;

function sleep(): string {
  return 'jubao';
}

type Cat = CatReturnType<typeof sleep>;
const cat: Cat = 'jubao';
```

### Parameters

获取函数类型的参数类型元组

```ts
type CatParameters<T extends (...args: any) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;

function sleep(name: string, age: number): string {
  return name + age;
}

type Cat = CatParameters<typeof sleep>;
const cat: Cat = ['jubao', 99];
```

### ConstructorParameters

获取构造函数类型的参数类型元组

```ts
type CatConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer U) => any ? U : never;

class Person {
  constructor(public name: string, public age: number) {}
}

type Cat = CatConstructorParameters<typeof Person>;
const cat: Cat = ['jubao', 99];
```

### ThisParameterType

获取函数类型中的 this 参数类型

```ts
type CatThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;

function sleep(this: { name: string }, name: string, age: number): string {
  this.name = name;
  return name + age;
}

type Cat = CatThisParameterType<typeof sleep>;
const cat: Cat = {
  name: 'jubao',
};
```

### RequiredKeys

获取类型 Type 中所有必须的属性名组成的联合类型。

```ts
type CatRequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

interface Sleep {
  name: string;
  age: number;
  eye?: string;
}

type Cat = CatRequiredKeys<Sleep>;
const cat: Cat = {
  name: 'jubao',
  age: 99,
};
```

### OptionalKeys

获取类型 Type 中所有必须的属性名组成的联合类型。

```ts
type CatOptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

interface Sleep {
  name?: string;
  age?: number;
  eye: string;
}

type Cat = CatOptionalKeys<Sleep>;
const cat: Cat = {
  name: 'jubao',
  age: 99,
};
```

## 配置文件 tsconfig

```json lines
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "es5" /* 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', 'ESNext' */,
    "module": "commonjs" /* 指定模块代码生成: 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES2015', 'ES2020', 'ESNext' */,
    "lib": [] /* 指定要包含在编译中的库文件 */,
    "allowJs": true /* 允许编译 javascript 文件 */,
    "checkJs": true /* 报告 javascript 文件中的错误 */,
    "jsx": "preserve" /* 指定 JSX 代码的生成: 'preserve', 'react-native', 'react' */,
    "declaration": true /* 生成相应的 '.d.ts' 文件 */,
    "declarationMap": true /* 生成相应的 '.d.ts.map' 文件 */,
    "sourceMap": true /* 生成相应的 '.js.map' 文件 */,
    "outFile": "./out.js" /* 将输出文件合并为一个文件 */,
    "outDir": "./dist" /* 指定输出目录 */,
    "rootDir": "./src" /* 用来控制输出目录结构 --outDir. */,
    "composite": true /* 启动项目编译 */,
    "incremental": true /* 增量编译 */,
    "tsBuildInfoFile": "./buildFile" /* 指定增量编译信息存储文件 */,
    "removeComments": true /* 删除编译后的所有的注释 */,
    "noEmit": true /* 不生成输出文件 */,
    "importHelpers": true /* 从 tslib 导入辅助工具函数 */,
    "downlevelIteration": true /* 降级遍历器实现为 ES5 */,
    "isolatedModules": true /* 将每个文件做为单独的模块 (与 'ts.transpileModule' 类似). */,
    "esModuleInterop": true /* 生成 ES Modules 兼容的代码, 从而启用互操作性 */,
    "preserveConstEnums": true /* 保留 const enums 以便提高迭代速度 */,
    "allowUmdGlobalAccess": true /* 在 UMD 库模块中允许全局访问 */,

    /* 严格的类型检查选项 */
    "strict": true /* 启用所有严格类型检查选项 */,
    "noImplicitAny": true /* 在表达式和声明上有隐含的 any 类型时报错 */,
    "strictNullChecks": true /* 启用严格的 null 检查 */,
    "strictFunctionTypes": true /* 启用严格的函数类型检查 */,
    "strictBindCallApply": true /* 启用严格的 bind/call/apply 检查 */,
    "strictPropertyInitialization": true /* 启用严续的属性初始化检查*/,
    "noImplicitThis": true /* 当 this 表达式值为 any 类型的时候，生成一个错误 */,
    "alwaysStrict": true /* 以严格模式检查每个模块，并在每个文件中输出 'use strict' */,
    /* 额外的检查 */
    "noUnusedLocals": true /* 报告未使用的局部变量 */,
    "noUnusedParameters": true /* 报告未使用的参数 */,
    "noImplicitReturns": true /* 报告缺失的返回类型 */,
    "noFallthroughCasesInSwitch": true /* 报告 switch 语句中的 fallthrough 错误 */,

    /* 模块解析选项 */
    "moduleResolution": "node" /* 选择模块解析策略: 'node' (Node.js) 或 'classic' (TypeScript pre-1.6) */,
    "baseUrl": "./" /* 用于解析非相对模块名称的基目录 */,
    "paths": {} /* 模块名到基于 baseUrl 的路径映射的列表 */,
    "rootDirs": [] /* 根文件夹列表，其组合内容表示项目运行时的结构内容 */,
    "typeRoots": [] /* 包含类型声明的文件列表 */,
    "types": [] /* 需要包含的类型声明文件名列表 */,

    /* Source Map Options */
    "sourceRoot": "./" /* 指定调试器应该找到 TypeScript 文件而不是源文件的位置 */,
    "mapRoot": "./" /* 指定调试器应该找到映射文件而不是生成文件的位置 */,
    "inlineSourceMap": true /* 生成单个文件的内联 source map */,
    "inlineSources": true /* 将代码与 sourcemap 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性 */,

    /* 实验性的选项 */
    "experimentalDecorators": true /* 启用装饰器 */,
    "emitDecoratorMetadata": true /* 在生成的代码中输出装饰器的元数据 */
  },
  "include": ["src//*"],
  "exclude": ["node_modules", "/*.test.ts"]
}
```
