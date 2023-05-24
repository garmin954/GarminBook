---
title: 基础使用
order: 50
nav:
  path: /frame
  title: 框架工具
  order: 10
group:
  path: /frame/electron
  title: Electron
  order: 50
---

##

### 生命周期

#### 主进程生命周期

- `ready`
  - 触发：应用程序完成初始化并准备好创建浏览器窗口时
  - 场景：可以创建一个或多个浏览器窗口，并执行一些初始化操作。
- `window-all-closed`
  - 触发：所有的窗口都关闭时
  - 场景：可以执行一些清理操作，例如关闭数据库连接、保存用户数据等。
- `activate`
  - 触发：点击应用图标时并且没有其他窗口处于打开状态时
  - 场景：可以创建一个新的或者显示浏览器窗口，并将其显示在屏幕上。
- `before-quit`
  - 触发：程序即将退出时
  - 场景：保存用户数据、关闭数据库连接等。
- `quit`
  - 触发：程序退出时
  - 场景：可以执行一些最终的清理操作，例如删除临时文件、释放系统资源等。

#### 渲染进程生命周期

- `dom-ready`
  - 触发：渲染进程 dom 完成加载时
- `did-finish-load`
  - 触发：渲染进程 dom 完成渲染时
- `did-fail-load`
  - 触发：渲染进程 dom 加载失败时
- `did-frame-finish-load`
  - 触发：当渲染进程完成页面的每一帧的加载和渲染时
- `did-stop-loading`
  - 触发：当渲染进程停止加载页面时

### 创建窗口

```ts
mainWindow = new BrowserWindow({
  height: 680,
  width: 1080,
  show: false,
  minWidth: 1080,
  minHeight: 680,
  icon: getAssetPath('icons/icon.icns'),
  // parent:? 可以设置父窗口
  webPreferences: {
    nodeIntegrationInWorker: true, // 允许在 Web Workers 中使用 Node.js
    contextIsolation: true,
    nodeIntegration: true, // 允许在渲染进程中使用 Node.js
    preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    webSecurity: false,
    spellcheck: true,
  },
});
```

### 禁止重复打开窗口

```ts
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    // 当运行第二个实例时，将焦点放到第一个实例的窗口
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
    }
  });
  app.on('ready', () => {
    /// ...
  });
}
```

### 设置全局变量

```ts
global.mainWindow = mainWindow;
```

### 最小化到右下角图标

```ts
import { app, BrowserWindow, Menu, Tray } from 'electron';
import { getAssetPath } from './index';

export default class AppTray {
  private mainWindow: Electron.CrossProcessExports.BrowserWindow;
  private readonly tray: Tray;

  constructor(mainWindow?: BrowserWindow) {
    this.mainWindow = mainWindow;
    // 创建任务栏图标
    this.tray = new Tray(getAssetPath('icons/icon.ico'));

    this.init();
  }

  init() {
    // 当点击关闭按钮
    this.mainWindow.on('close', (e) => {
      e.preventDefault(); // 阻止退出程序
      this.mainWindow.setSkipTaskbar(true); // 取消任务栏显示
      this.mainWindow.hide(); // 隐藏主程序窗口
    });

    this.createMenu();
    this.onEvent();
  }

  createMenu() {
    // 自定义托盘图标的内容菜单
    const contextMenu = Menu.buildFromTemplate([
      {
        // 点击退出菜单退出程序
        label: '退出',
        click: () => {
          this.mainWindow.destroy();
          app.quit();
        },
      },
    ]);

    this.tray.setToolTip('UFACTORY Assistant'); // 设置鼠标指针在托盘图标上悬停时显示的文本
    this.tray.setContextMenu(contextMenu); // 设置图标的内容菜单
  }

  onEvent() {
    // 点击托盘图标，显示主窗口
    this.tray.on('click', () => {
      this.mainWindow.show();
    });
  }
}
```

### 阻止应用关闭

```ts
app.on('before-quit', (event) => {
  // 阻止应用程序关闭
  event.preventDefault();
  setTimeout(() => {
    // 关闭应用程序
    app.quit();
  }, 3000);
});
```

### 使用 worker

```ts
export class ChartWorker extends Worker {
  private static instance: ChartWorker;
  public static getInstance(): ChartWorker {
    if (!ChartWorker.instance) {
      // @ts-ignore
      ChartWorker.instance = new Worker(
        new URL('./joint_chart.worker', import.meta.url),
      );
    }
    return ChartWorker.instance;
  }
}
```

### 获取 resources 的路径

> 打包页面资源都在`resources`中

```ts
export const RESOURCES_PATH =
  process.env.NODE_ENV === 'production'
    ? path.join(process.resourcesPath, '/')
    : path.join(__dirname, '../../');
```

## 通信

### contextBridge

```ts
const electronHandler = {
  // 进程通信
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);
export type ElectronHandler = typeof electronHandler;
```
