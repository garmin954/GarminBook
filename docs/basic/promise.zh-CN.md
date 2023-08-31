---
title: Promise
nav:
  path: /basic
  title: 基础
  order: 100
group:
  path: /basic/es6
  title: ES6
  order: 100
---

### Promise

在 generator 函数中，

yield 相当于设置了一个断点，执行到这就暂停当前函数的运行，并返回值或执行语句的结果 value。它和 return 的区别在于，return 的返回意味着函数生命周期的结束，而 yield 的返回只是挂起了函数的运行。

next 相当于从之前的 yield 断点或函数起始位置按 F5 执行，并在下一个 yield 断点，
或 return 正常结束时停下脚步，后获得返回的 value。next 同样可以传参数，
其参数会占领上一轮 yield 的结束位置，如果未指定则替代值为 undefined。next 和 yield 是一一对应的开始与暂停符，而最后一个 next 对应 return。
generator 函数如果正常结束(以 return 结束)，则视为完成任务(done == true).

yield 如果想在其后嵌套调用 generator 函数，则必须在其后加个`*`号,yield* generatorFunc() 会继续自动调用 generatorFunc().next()，
而不会暂停当前函数。yield* 必须是一个 generator 函数对象，否则会将其当成字符串以 yield 的方式逐个字符输出。

举例：

```

function* g(i) {
    yield i++;
    yield* g(i);
}

const gg = g(0);

let IntervalId = setInterval(() => {

    console.log(gg.next());

    // clearInterval(IntervalId);

}, 1000);

```

这是一个无限返回自加的 generator 构造函数，通过 let gg= g(0) 创建对象，gg.next()返回自加值，但这么写开销大，每次都要新建 g(i)对象并调用 g(i).next()，正常不这么写。

练习

```

function* next_id() {

    let current_id = 1;

    while(true)yield current_id++;

}

```

这个函数的生命永远不会结束。
