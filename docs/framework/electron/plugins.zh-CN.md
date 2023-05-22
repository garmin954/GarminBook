---
title: 插件
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

### electron-log
```ts
import log from 'electron-log';
import moment from 'moment'
import {RESOURCES_PATH} from "./index";

const today = moment();
// 设置日志文件的位置
log.transports.file.resolvePath = () => RESOURCES_PATH + 'log/client/' + `${today.format("YYYY_MM_DD")}.log`;

export default log
```
### electron-store
```ts
import Store from 'electron-store';
const store = new Store();
export default store
```

### electron-i18n
```ts
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import {getAssetPath} from "./index"
import storage from "./storage";

const lang = storage.get('language', 'zh-CN') as string
// 语言配置
i18next.use(Backend).init({
    fallbackLng: 'zh-CN',
    lng: lang,
    debug: false,
    ns: 'main',
    backend: {
        loadPath: getAssetPath(`/locales/{{lng}}/{{ns}}.json`),
    },
});
export default i18next
```
