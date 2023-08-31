---
title: 基础
order: 0
nav:
  path: /go
  title: Go
  order: 100
group:
  path: /go/concurrency
  title: 并发
  order: 50
---

## Goroutine

- 使用`go`关键词创建 goroutine

```go
go 函数
go func(){}() // 使用隐名函数
```

- 例子

```go
package main

import (
	"fmt"
	"time"
)

func running() {

	var times int
	// 构建一个无限循环
	for {
		times++
		fmt.Println("tick", times)

		// 延时1秒
		time.Sleep(time.Second)
	}

}

func main() {

	// 并发执行程序
	go running()

	// 接受命令行输入, 不做任何事情
	var input string
	fmt.Scanln(&input)
}
```

> 执行`running`无线循环，`Scanln`还是可以接受命令输入并打印， 并不需要等待`running`执行完！

## 通道(Channel)

## sync

## 选择语句（Select）

## 定时器（Timer）

## 计时器（Ticker
