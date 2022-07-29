---
title: 算法基础
nav:
  path: /basic
  title: 基础
  order: 100
group:
  path: /basic/algorithm
  title: 算法
  order: 100
---
### display

```tsx
import React, { useState } from 'react';

export default () => {
  const [inputStr, setInputStr] = useState<string>('')
  const [arr, setArr] = useState<number[]>([])
  const pushArray = (e) => {
    arr.push(+inputStr)
    setArr(arr)
    setInputStr('')
  }
  return <>
      <div className={'pre'}>{JSON.stringify(arr)}</div>
      <div className={'flex'}>
       
        <input
          name="smg"
          type={'number'} 
          className={'input'}
          value={inputStr}
          onChange={(e)=>setInputStr(e.target.value)}
          onKeyDown={(e)=> {
            e.keyCode === 13 && pushArray(e)}
          }
        />
        <button className='btn' onClick={pushArray}>提交</button>
      </div>
    
      <div className='btn w-md mt-20'>快速排序</div>
    </>
}

```

```tsx
import React, { useState } from 'react';
import {Components} from '/src/'
const {Flex} =Components

export default ()=>{
  return <Flex>
    {/*<Flex.Item>1</Flex.Item>*/}
    {/*<Flex.Item>2</Flex.Item>*/}
    {/*<Flex.Item>3</Flex.Item>*/}
  </Flex>
}
```
