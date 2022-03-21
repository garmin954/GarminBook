---
title: 事件循环
nav:
  path: /basic
  title: 基础
  order: 100
---

### 单进程
为什么js是单进程， 由于js是对dom操作

### 事件循环
1. 从上往下执行代码
2. 同步代码放到同步队列（执行栈），异步代码放到异步队列, 异步队列有分为宏任务和微任务
3. 执行同步代码直到队列清空
4. 执行所有微任务直至队列为空
5. 执行一条宏任务，如果宏任务里面有异步代码和异步代码就会重新上面的步骤，才再次执行吓一条宏队列，直至清空队列，这种循环就是事件循环

> 宏任务主要包含：script( 整体代码)、setTimeout、setInterval、I/O、UI 交互事件、setImmediate(Node.js 环境)
> 微任务主要包含：Promise、MutaionObserver、process.nextTick(Node.js 环境)
