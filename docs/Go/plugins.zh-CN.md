---
title: 热更新
order: 50
nav:
  path: /go
  title: Go
  order: 100
group:
  path: /go/plugins
  title: 包
  order: 150
---

### air

```
# 安装
go install github.com/cosmtrek/air@latest

# 优先在当前路径查找 `.air.toml` 后缀的文件，如果没有找到，则使用默认的
air -c .air.toml

# 把默认配置添加到当前路径下的.air.toml 文件。
air init

# 运行
air
```

### fresh
