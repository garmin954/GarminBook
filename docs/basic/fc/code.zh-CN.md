---
title: 手写题目
nav:
  path: /basic
  title: 基础
  order: 100
group:
  path: /basic/browser
  title: 复习
  order: 100

---

### 防抖节流
```ts
function debounce(fn, wait=500) {
  let timer
  let that = this
  return (...arg) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.bind(that)(...arg)
    }, wait)
  }
}

function throttle(fn, wait = 500) {
  let time = Date.now()
  let that = this
  return (...arg)=>{
    const now = Date.now()
    if (time+wait > now){
      return
    }
    fn.apply(that, ...arg)
    time = now
  }
}
```
```tsx

/**
 * 防抖： 单位时间内只执行一次连续点击时间重置
 * @param fn
 * @param wait
 */
function debounce(fn, wait=500) {
  let timer
  let that = this
  return (...arg) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.bind(that)(...arg)
    }, wait)
  }
}

/**
 * 节流： 
 * @param fn
 * @param wait
 */
function throttle(fn, wait = 500) {
  let time = Date.now()
  let that = this
  return (...arg)=>{
    const now = Date.now()
    if (time+wait > now){
      return
    }
    fn.apply(that, ...arg)
    time = now
  }
}

import React, { useState } from 'react';

export default () => {
  const [state, updateState] = useState(0)
  
  const handleAdd = debounce(() => {
    updateState(state+1)
  }, 500)

  const handleReduce = throttle(() => {
    updateState(state-1)
  }, 1500)
  return (
    <div>
      <h1>{state}</h1>
      <button className='btn' onClick={()=>handleAdd()}>增加</button>
      <button className='btn' onClick={()=>handleReduce()}>减少</button>
    </div>
  )
}
```

### 深拷贝

```ts
const deepClone = (obj, cache = new WeakMap()) => {
  // 是否null
  if (obj === null || typeof obj !== 'object')return obj
  // 是否时间
  if (obj instanceof Date) return new Date(obj)
  // 是否正则
  if (obj instanceof RegExp) return new RegExp(obj)
  if (cache.has(obj)) return cache.get(obj)
  let cloneObj = new obj.constructor()
  cache.set(obj, cloneObj) // 缓存对象，用于循环引用的情况
  
  for (const k in obj){
    cloneObj[k] = deepClone(obj, cache)
  }
}
```

### 异步控制并发数
```ts


function sleep(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('等待了' + sec + '秒')
      resolve()
    }, sec * 1000)
  })
}

const limitPromise = (limit=5) => {
  const queue = []
  const that = this
  let count = 0
  return (fn: Promise, ...arg)=>{
    const task = function() {
      new Promise((resolve, reject) => {
        fn.apply(that, ...arg).then((res)=>{
          resolve(res)
        }).catch(err=>{
          reject(err)
        }).finally(()=>{
          
        })
      })
    }
    queue.push(task)
    // return
    // 判断限制数量是否满足
    if (count < limit){
      count++
    }
  }
}

const call = limitPromise(10)
call(sleep, 1)
call(sleep, 2)
call(sleep, 3)
call(sleep, 4)
call(sleep, 5)

```

### Event Bus

```ts

class Events {
  private events
  constructor() {
    this.events = new Map();
  }

  // 订阅监听
  on(key:string, fn: <T extends null>(v?:T)=>void){
    this.events.has('key') && this.events.set(key, fn)
  }

  // 关闭
  off(key:string){
    this.events.has('key') && this.events.delete(key)
  }

  // 发布
  emit<T>(key:string, value:T){
    const fn = this.events.get('key')
    fn && fn(value)
  }
}


const events = new Events()

events.on('listener', (value)=>{
  console.log(value);
})

let a = 1
setTimeout(()=>{
  events.emit('listener', a)
  a++
}, 3e3)
```


### instanceof
```ts
export const Instanceof = <T extends { prototype: any }>(ex: Object, pt: any) => {
  let proto = Object.getPrototypeOf(ex)
  const prototype = pt.prototype

  while (proto !== null){
    console.log(proto);
    if (proto === prototype){
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}
```


### call
```ts
export const Call = (fn: any, context: object, ...arg: number[]) => {
  context = context ?? window
  const key = Symbol()
  Reflect.set(context, key, fn )
  // @ts-ignore
  const result = context[key](...arg)
  Reflect.deleteProperty(context, key)
  return result
}
```

### apply

### bind
