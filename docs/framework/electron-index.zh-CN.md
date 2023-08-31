---
title: electron-forge
order: 20
nav:
  path: /frame
  title: 框架工具
  order: 10
group:
  path: /frame/electron
  title: Electron
  order: 10
---

## 配置

> `electron-forge` 是一个强大的 Electron 应用程序开发框架，可以帮助开发者更快速、更简单地创建、构建和打包 Electron 应用程序
> 在`forge.config.ts`中配置项目
> 配置结构：

```ts
const config: ForgeConfig = {
  buildIdentifier: {}, // 用于标识构建的唯一标识符，可以在构建过程中使用。
  rebuildConfig: {}, // 用于配置重新构建的选项，例如重新构建的平台、架构等
  pluginInterface: {}, // 用于定义插件接口，可以在插件中使用。
  makers: {}, // 用于配置打包器的选项，例如打包器的类型、输出目录等。
  packagerConfig: {}, // 用于配置打包器的选项，例如应用程序的名称、版本号、图标等。
  plugins: {}, // 用于配置插件，例如自动更新插件、调试插件等。
  hooks: {}, // 用于定义钩子函数，可以在构建过程中执行一些自定义的操作。
  publishers: {}, // 用于配置发布器，例如将应用程序发布到 GitHub、npm 等平台上。
};
```

### 配置入口

默认配置是

#### 多个 app

```ts
const config: ForgeConfig = {
  //...
  plugins:{
    new WebpackPlugin({
      //...
      renderer: {
        //...
        entryPoints:[
          {
            html: './src/main/index.html', // 可以全局的使用declare const MAIN_WINDOW_WEBPACK_ENTRY: string;引入
            js: './src/main/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/main/preload.ts', // declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
            },
          },
          // ...
          // 这里可以实现多个入口
          {
            html: './src/main/windows/setting/index.html', // 同上
            js: './src/main/windows/setting/renderer.ts',
            name: 'setting_window',
            preload: {
              // js: './src/main/windows/setting/preload.ts',
              js: './src/main/preload.ts',
            }
          },
        ]
      }
    })
  },
}
```

#### 单个 app 使用路由

```ts
if (!app.isPackaged) {
  await settingWindow.loadURL(`${MAIN_WINDOW_WEBPACK_ENTRY}/#/setting`);
} else {
  await settingWindow.loadURL(`${MAIN_WINDOW_WEBPACK_ENTRY}#/setting`);
}
```

### 设置 assets 资源文件

```ts
    packagerConfig: {
        asar: true, // 开启asar压缩
        extraResource: [ // 打包时文件复制到Resource
            path.join(__dirname, 'assets'),
        ],
    ...
```

### 配置代理和 devContentSecurityPolicy

> 使用到接口出现跨域和安全策略情况影响程序正常运行。同上是在`WebpackPlugin`中配置

```ts
const config: ForgeConfig = {
  //...
  plugins:{
    new WebpackPlugin({
      //...
      devServer: {
        proxy: {
          '/': {
            target: 'http://127.0.0.1:18355',
            pathRewrite: {'^/': ''},
          },
        },
      },
      devContentSecurityPolicy: `default-src 'self'; connect-src 'self' ws://127.0.0.1:18355 ;script-src 'self' 'unsafe-eval' 'unsafe-inline' data:; img-src 'self' data:; style-src 'self' 'unsafe-inline' ; worker-src * blob:;`,
    })
  },
}

mainWindow = new BrowserWindow({
  // ...
  webPreferences: {
    webSecurity: false,
  },
});
```

### 配置.env

1. 下载`dotenv-webpack 和 dotenv`
2. 在`webpack.plugins.ts`中 peiz

```ts
// 是electron主进程中可以使用
dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});
// 是electron渲染进程 react中可以使用
export const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new Dotenv({
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
  }),
];
```

3. 在`package.json`中设置环境变量

```json
"start": "cross-env NODE_ENV=development electron-forge start ",
```

### 配置 alias "@"

> 只能在渲染进程 react 中使用

1. 在`webpack.renderer.config.ts`配置路径：

```ts
export const rendererConfig: Configuration = {
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
    },
  },
};
```

2. 在`eslintrc.json`中忽略错误

```json
{
  // ...
  "rules": {
    "import/no-unresolved": [
      2,
      {
        "ignore": ["^@app"]
      }
    ]
  }
}
```

3. 在`tsconfig.ts`中设置 paths

```json
{
  "compilerOptions": {
    // ...
    "paths": {
      "@app/*": ["src/app/*"]
    }
  }
}
```

### 配置响应式

> 在`webpack.rules.ts`中配置 rules 规则

1. 下载 `postcss-loader autoprefixer postcss-px-to-viewport`
2. 配置规则

```json
export const rules: Required<ModuleOptions>['rules'] = [
{
  test: /\.(less)$/,
  use: [
  'style-loader',
  'css-loader',
  'less-loader',
  'postcss-loader'
  ]
},
]
```

3. 创建`postcss.config.ts`

```ts
module.exports = {
  plugins: [
    require('autoprefixer'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('postcss-px-to-viewport')({
      viewportWidth: 1080,
      viewportHeight: 860,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
      propList: ['width', 'height', 'padding', 'margin', 'grid'], // 需要转换的属性
      removeComments: true, // 删除注释
      exclude: [/node_modules/],
    }),
  ],
};
```

## 打包

### 打包命令

#### package

`yarn packge` 打包程序包

#### make

`yarn make` 打包程序安装包

> make 会默认先执行`package` 可以使用`--skip-package` 跳过

### nsis

#### 创建 maker

```ts
import MakerBase, { MakerOptions } from '@electron-forge/maker-base';
import { ForgePlatform } from '@electron-forge/shared-types';
import { buildForge, PackagerOptions } from 'app-builder-lib';

export default class MakerNSIS extends MakerBase<PackagerOptions> {
  name = 'nsis';
  defaultPlatforms: ForgePlatform[] = ['win32'];
  isSupportedOnCurrentPlatform(): boolean {
    return process.platform === 'win32';
  }
  async make(options: MakerOptions): Promise<string[]> {
    const config: PackagerOptions = {
      config: {
        win: {
          icon: options.forgeConfig.packagerConfig.icon,
          requestedExecutionLevel: 'highestAvailable',
        },
      },
      ...this.config,
    };
    return buildForge(options, {
      win: [`nsis:${options.targetArch}`],
      ...config,
    });
  }
}

export { MakerNSIS };
```

#### `forge.config.ts`中配置

```ts
    makers: [
        new MakerNSIS({
            config: {
                appId: "UFACTORY-Assistant",
                nsis: {
                    "oneClick": false, // 设置为 true 表示启用一键安装模式，设置为 false 表示禁用一键安装模式。
                    "allowElevation": false, // 设置为 true 表示在安装时提升管理员权限，设置为 false 表示不提升管理员权限。
                    "perMachine": false, // 设置为 true 表示安装为所有用户，设置为 false 表示安装为当前用户。
                    "allowToChangeInstallationDirectory": true, // 设置为 true 表示允许用户在安装过程中选择安装目录，设置为 false 表示不允许更改安装目录。
                    "installerIcon": "assets/icons/icon.ico",
                    "uninstallerIcon": "assets/icons/icon.ico",
                    "installerHeaderIcon": "assets/icons/icon.ico",
                    "createDesktopShortcut": true,
                    "createStartMenuShortcut": true,
                    "guid": "C7E2BF9E-59F7-4EF1-BDE7-946ECA6B2793", // 指定安装程序的 GUID（全局唯一标识符），用于在卸载时识别程序。
                },
                win: {
                    target: "nsis",
                    icon: "assets/icons/icon.ico",
                    requestedExecutionLevel: "highestAvailable",
                    // "extraResources": [
                    //     {
                    //         "from": "installer.nsh",
                    //         "to": "."
                    //     }
                    // ]
                },
                directories: {
                    "output": "out/make/nsis" // 打包输出的目录
                },
                compression: 'maximum'
            }
        }),
```

### squirrel

> 没有安装界面的， 可以使用一个`gif`来显示安装的过程

1. 配置吗

```ts
new MakerWix({
            icon: path.resolve(__dirname, 'assets', 'icons/icon.ico'),
            manufacturer: "UFactory",
            description: "UFACTORY Assistant App",
            shortName: "UFA",
            language: 2052, // 设置为中文（简体） 1033英文
            ui: {
                "chooseDirectory": true
            }
        }),
```

### wix

1. 下载 `@electron-forge/maker-wix` 包
2. 下载[wix](https://wixtoolset.org/)工具

- 添加到系统环境变量 `C:\Program Files (x86)\WiX Toolset v3.11\bin`(默认)
- 使用 PowerShell 超级管理员 进行打包
  > 注意这个安装引导默认是安装在`C:\Program Files (x86)\你的项目`中，没有写入的权限

3. 配置

```ts
makers: [
        new MakerSquirrel({
            setupIcon: path.resolve(__dirname, 'assets', 'icons/icon.ico'),
            description: "It is an observation software that can observe dynamic charts of joints and coordinates",
            authors: "UFactory",
            noMsi: false,
            // setupExe: 'UFACTORY Assistant.exe',
            // setupMsi: 'UFACTORY Assistant.msi',
            loadingGif: "assets/icons/installer.gif",
            // certificateFile:"",//用于签名安装程序的代码签名证书文件的路径。
            // certificatePassword:"",//代码签名证书的密码。
        }),
  ...
```

### 其它工具

-
