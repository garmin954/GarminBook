---
title: 第三方插件
  nav:
  path: /react
  title: React
  order: 100
group:
  path: /react/packages
  title: React
  order: 100
---

**react-transition-group** [文档](https://reactcommunity.org/react-transition-group/css-transition)
```tsx
import React, { useState } from 'react';
import ReactDom from 'react-dom'
import { CSSTransition } from 'react-transition-group';
type PopupProps = {
  style?: React.CSSProperties | any;
  className?: string;
  children?: React.ReactNode;
  onClose:Function;
}

// import './createPortal.css'
const Popup:React.FC<PopupProps> = (props) =>{
  console.log(props);

  return ReactDom.createPortal(<div className="flex">
    <div className="box">
      <div className="text-center space-y-2">
        <div className="space-y-0.5">
          <p className="text-lg text-black dark:text-white font-semibold mb-2">
            Erin Lindford
          </p>
          <p className="text-gray-500 dark:text-gray-300 font-medium pb-3">
            Product Engineer
          </p>
        </div>
        <button className="btn" onClick={()=>props.onClose()}>
          Message
        </button>
      </div>
    </div>
  </div>,document.body, )
}
export default () =>{

  const [show, setShow] = useState(false)
  return <div>

    <div className="toggle" onClick={()=>setShow(true)}>toggle</div>
    <CSSTransition
      in={show}
      timeout={500}
      unmountOnExit
      classNames='alert'
    >
      <Popup onClose={()=>setShow(false)}/>
    </CSSTransition>
    {/*{show ? <Popup/>:null}*/}
  </div>
}

/** css 样式
 .alert-enter {
  opacity: 0;
  transform: scale(0.9);
}
 .alert-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}
 .alert-exit {
  opacity: 1;
}
 .alert-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}
 */
```
