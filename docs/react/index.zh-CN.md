---
title: 介绍
nav:
  path: /react
  title: React
  order: 10
---

**createPortal**
<br />
> 将组件挂载在指定节点
```tsx
import {ReactModule} from '/src/'
import React from 'react';

export default () => <ReactModule.ShowPortal />;
```

**useImperativeHandle, useRef, forwardRef**
<br />
暴露子组件接口

```tsx
import React, { useImperativeHandle, useRef, useState, forwardRef  } from 'react';

type ChildProps = {
  style?: React.CSSProperties | any;
  className?: string; children?: React.ReactNode;
}

type ChildExpose = {
  autoIncrement: () => void;
};

const Child = forwardRef<ChildExpose, ChildProps>((props, ref) => {
  const [count, setCount] = useState(0)
  const autoIncrement = () => {
    setCount(count+1)
  }
  useImperativeHandle(ref,()=>({
    autoIncrement
  }))
  return <div className='card' style={{paddingRight: '20px'}}>点击次数：{count}</div>
})

export default () => {
  const childRef = useRef()
  return <div style={{display: 'flex',alignItems:'center'}}>
    <Child ref={childRef} />
    <div className='toggle' onClick={()=>childRef.current.autoIncrement()}>增加+</div>
  </div>
}
```

**useUpdateEffect [自定义]**

```tsx

import React, { useEffect, useRef, useState } from 'react';
import useUpdateEffect from '/src/utils/useUpdateEffect';
let count = 0
export default () => {
  const [show, setShow] = useState(false)
  useUpdateEffect(() => {
    // setShow(!show)
    count++
    alert('switch')
  }, [show])
  return <div>
    {show ? 'buling ...' : 'what?!'}
    <br/>
    <br/>
    <div className='toggle' onClick={()=>{
      setShow(!show)
    }
    }>切换{show ? ' false':' true'}</div>
  </div>
}
```

**checkbox**
