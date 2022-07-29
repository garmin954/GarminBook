---
title: React类型
  nav:
  path: /react
  title: 类型
  order: 100
group:
  path: /react/type
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
