---
title: React类型
nav:
  path: /frame
  title: 框架工具
  order: 10
group:
  path: /frame/react
  title: React
  order: 100

---

```react
// 类型集合，主要用途是用来做动态标签使用，最终生成 element
React.ElementType;
```
**ref类型**
```
const mRef = ref<HTMLDivElement>() 
React.MutableRefObject<HTMLDivElement>
```

```tsx
import { Foo } from '/src/'
import React from 'react';

export default () => <Foo/>;

```
