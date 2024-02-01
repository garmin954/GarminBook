---
title: wails-app
order: 50
nav:
  path: /go
  title: Go
  order: 100
group:
  path: /go/app
  title: 跨端
  order: 50
---

## 安装及简单使用

> [Wails](https://wails.io/zh-Hans/docs/introduction) 是一个可让您使用 Go 和 Web 技术编写桌面应用的项目。

### 安装

运行` go install github.com/wailsapp/wails/v2/cmd/wails@latest` 安装 Wails CLI

### 创建项目

`wails init -n wails_app -t vue-ts`

### 简单使用

```go
package main

import (
	"changeme/backend"
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

// -ldflags -H=windowsgui
func main() {
	// backend app中主要是处理提供前端使用的接口函数
	app := backend.NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:         "vaise", // 窗口标题
		Width:         1024,    // 窗口宽度
		Height:        653,     // 窗口高度
		DisableResize: true,    // 禁止调整窗口大小
		AssetServer: &assetserver.Options{
			Assets: assets, // 前端静态资源frontend/dist
		},
		BackgroundColour: &options.RGBA{R: 255, G: 255, B: 255, A: 1}, // 窗口背景颜色
		OnStartup:        app.Startup, // 启动时调用
		Bind: []interface{}{
			app, // 绑定app对象
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
```

### 接口函数的统一管理

[//]: # '如果接口函数一个一个的调用'

## Event 事件

```go
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
	// 实时向前端发送实时数据
	go (func() {
		for {
			runtime.EventsEmit(a.ctx, "immediately", map[string]interface{}{
				"server_status": !utils.ServerClosed,
			})
			time.Sleep(1 * time.Second)
		}
	})()
}
```

## 系统托盘

```go
// 程序启动时调用systray增加系统托盘
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
	...
	systray.Run(a.initSystemTray, onSystemTrayExit)
}

// OnBeforeClose阻止程序关闭，并隐藏窗口
func (a *App) Close(ctx context.Context) bool {
	runtime.WindowHide(ctx)
	// 返回true阻止程序结束
	return true
}

//go:embed assets/*
var assets embed.FS

// 初始化并配置systray
func (a *App) initSystemTray() {
	icon, _ := assets.ReadFile("assets/favicon.ico")
	fmt.Println("icon==>", icon)
	systray.SetIcon(icon)
	systray.SetTitle("Awesome App")
	systray.SetTooltip("Pretty awesome超级棒")
	mQuit := systray.AddMenuItem("Quit", "Quit the whole app")
	mShow := systray.AddMenuItem("Show", "Show the whole app")

	// Sets the icon of a menu item. Only available on Mac and Windows.
	mQuit.SetIcon(icon)

  // 监听通道的消息
	go func() {
		for {
			select {
			case <-mShow.ClickedCh:
				fmt.Println("点击了显示按钮")
				runtime.WindowShow(a.ctx)
			case <-mQuit.ClickedCh:
				fmt.Println("点击了退出按钮")
				runtime.Quit(a.ctx)
				systray.Quit()
				return
			}
		}
	}()
}
```
