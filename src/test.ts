type NonEmptyArray<T> = {
  [K in PropertyKey]: K extends T ? K : never
}

const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使用
