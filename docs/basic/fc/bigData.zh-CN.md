---
title: 大数据处理
nav:
  path: /basic
  title: 基础
  order: 100
group:
  path: /basic/bs
  title: 复习
  order: 100

---
### 10000000条弹幕数据循环怎么优化？

```tsx
import React, { useCallback, useEffect, useRef, useState } from 'react';
import RandomClass from '/src/utils/randomName';

console.time('genarate time')
let bigData = []
const generateData = () => {
  bigData = (new Array(100000).fill(1)).map((_, i) => {
    const name = RandomClass.randomName()
    const nameb = RandomClass.randomName()
    return {
      id: i,
      msg: `${name}: ${nameb}在吃屎你敢信？`,
      time: parseInt(Math.random() * 10000),
    }
  })
}
generateData()
console.timeEnd('genarate time')
console.log(bigData)
let timer = 0
export default () => {

  const index = useRef(0)
  const [state, setState] = useState({
    list: [],
    index: 0
  })

  const getTheBarrage = useCallback(() => {
    clearInterval(timer)
    timer = setInterval(() => {
      let i = index.current
      const list = state.list
      while (index.current - i < 10) {
        if (!bigData[index.current]) {
          clearInterval(timer)
          break
          return
        }
        if (state.list.length > 10){
          list.shift()
        }
        list.push(bigData[index.current])
        setState(() => ({ ...state, list }))
        index.current += 1
      }
    },10)
  }, [])

  useEffect(() => {
    // getTheBarrage()
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div style={{ width: '500px', height: '500px', border: '1px' }}>

      {state.list.map((item, i) => (
        <div key={item.id}>{item.msg}</div>
      ))}
    </div>
  )
}
```
