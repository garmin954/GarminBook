---
title: 公共样式
nav:
  path: /favorites
  title: 收藏夹
  order: 100
group:
  path: /favorites/css
  title: CSS
  order: 100
---### 滑动条样式

**1. WebKit 的浏览器 (Chrome, Safari)**

- `::-webkit-scrollbar` — 整个滚动条.
- `::-webkit-scrollbar-button` — 滚动条上的按钮 (上下箭头).
- `::-webkit-scrollbar-thumb` — 滚动条上的滚动滑块.
- `::-webkit-scrollbar-track` — 滚动条轨道.
- `::-webkit-scrollbar-track-piece` — 滚动条没有滑块的轨道部分.
- `::-webkit-scrollbar-corner` — 当同时有垂直滚动条和水平滚动条时交汇的部分.
- `::-webkit-resizer` — 某些元素的 corner 部分的部分样式(例:textarea 的可拖动按钮).

```css
/*整个滚动条.*/
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

/* 滑动条背景*/
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}

/*滑动条块*/
::-webkit-scrollbar-thumb {
  background-color: rgba(105, 112, 125, 0.5);
  background-clip: content-box;
  border-radius: 16px;
  border: 6px solid rgba(0, 0, 0, 0);
}
```

**2. 火狐浏览器**

```css
scrollbar-color: rgba(105, 112, 125, 0.5) rgba(0, 0, 0, 0);
scrollbar-width: thin;
```
