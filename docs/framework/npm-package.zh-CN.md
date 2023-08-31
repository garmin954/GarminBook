---
title: 全局执行命令的包
nav:
  path: /frame
  title: 基础
  order: 10
group:
  path: /frame/npm
  title: NPM
  order: 30
---

## 创建发布流程

1. 创建一个新的 npm 包
   `npm init`
2. 登录账号
   `npm login`
3. 发布版本
   `npm publish`

## 包

### 目录

<Tree>
<ul>
  <li>
    bin
    <ul>
      <li> 
      ehosts
      <small>可执行的文件</small>
      </li>
    </ul>
  </li>
  <li>
    lib
    <ul>
      <li> 
      mirror_images.js
      <small>镜像逻辑文件</small>
      </li>
      <li> 
      hosts.js
      <small>hosts逻辑文件</small>
      </li>
    </ul>
  </li>
  <li> 
   package.json
  </li>
  </ul>
</Tree>

### 可执行的命令

`package.json`文件中设置`bin`

```json
{
  "name": "ehosts",
  "version": "1.0.9",
  "bin": {
    "ehosts": "./bin/ehosts"
  },
  ....
}
```

创建`bin`目录,并在目录下创建`ehosts`（无后缀）文件

```js
#!/usr/bin/env node
'use strict';
// ...
var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    tls: 'ssl',
    smg: '-i',
  },
});

// console.log('argv==>', argv);
if (argv.h || argv.help) {
  console.log(
    [
      'usage:ehosts [path] [options]',
      '',
      'options:',
      '  -l --list     ip列表',
    ].join('\n'),
  );
  process.exit();
}

var arg_list = argv.l || argv.list;

// ...
// 列表
if (arg_list) {
  // 对应逻辑代码
}
```

### 测试执行

在项目目录下执行
` node ./bin/ehosts -m`

### 获取管理员权限

1. 安装`sudo-prompt`包
2. 获取管理员权限执行文件

```js
const rootPath = path.join(__dirname, '../').split(path.sep).join('//');
let hostsPath = '';
if (os.platform() === 'win32') {
  hostsPath = 'C:/Windows/System32/drivers/etc/hosts';
} else {
  hostsPath = '/etc/hosts';
}
const command = `node ${rootPath}/lib/promises/write_hosts_del ${hostsPath} ${encrypt(
  newLins.join('\n'),
)}`;
sudo.exec(
  command,
  {
    name: 'ehosts',
  },
  (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(stdout);
  },
);
```

3. 文件逻辑

```js
const log = require('../logs');
const fs = require('fs');

const { decrypt } = require('./asc');

const args = process.argv;
const hostsPath = args[2];
const content = decrypt(args[3]) || '';

fs.writeFile(hostsPath, content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  log.info('del', ` 删除成功`);
});
```

### 注意事项

- publish 时要把`packager.json`中`version`更新

## 安装使用

### 安装

- windows

```
npm install ehosts -g
```

- macOs

```
sudo npm install ehosts -g
```

- linux

```
npm install ehosts -g
```

### 执行

```ssl
ehosts -v
npx ehosts -v
```
