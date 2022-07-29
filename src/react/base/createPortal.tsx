import React, { useState } from 'react';
import ReactDom from 'react-dom'
import { CSSTransition } from 'react-transition-group';
type PopupProps = {
  style?: React.CSSProperties | any;
  className?: string;
  children?: React.ReactNode;
  onClose:Function;
}

import './createPortal.css'
const Popup:React.FC<PopupProps> = (props) =>{
  console.log(props);

  return ReactDom.createPortal(<div className="flexBox">
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
