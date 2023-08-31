---
title: redux-thunk
order: 210
nav:
  path: /frame
  title: 框架工具
  order: 100
group:
  path: /frame/react
  title: React
  order: 100
---

## 安装

`redux-thunk`是`redux`的中间件可以解决异步修改状态

```
pnpm install redux react-redux redux-thunk -S
```

## 使用

### store 里注册

```typescript
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducer/user';
import shopReducer from '../reducer/shop';
const reducers = combineReducers({
  userReducer,
  shopReducer,
});
// redux浏览器状态工具
const composeEnhabcers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = createStore(reducers, composeEnhabcers(applyMiddleware(thunk)));

export default store;
```

### 在组件内使用

```typescript
const dispatch = useDispatch();
// 触发状态修改
dispatch((d, getState) => {
  setTimeout(() => {
    d({
      type: 'send_type',
      value: '随机数字' + Math.random(),
    });
  }, 1000);
});
```

你可能会发现很多例子都返回了 Promise，这个不是必须的，
但是用起来却很方便。Redux 并不关心你的 thunk 返回了什么值，
但是他会将这个值通过外层的 dispatch()返回给你。这就是为什么你可以在 thunk 中返回一个 Promise 并且等他完成：

```typescript
dispatch(someThunkReturningPromise()).then(...)
```

### withExtraArgument

> 全局携带自定义参数

```typescript
const api = '';
const whatever = 0;

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument({ api, whatever })),
);

function fetchUser(id) {
  return (dispatch, getState, { api, whatever }) => {
    // 现在你可以使用这个额外的参数api和whatever了
  };
}
```
