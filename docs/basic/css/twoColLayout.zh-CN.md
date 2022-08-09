---
title: 两栏布局(左边固定，右边自适应)的六种方法 nav:
path: /basic title: 基础 order: 100 group:
path: /basic/css title: css order: 100
---

### 两栏布局(左边固定，右边自适应)的六种方法

```tsx
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

const colStyle = {
  float: `
  .left {
        float: left;
        width: 200px;
        background-color: pink;
        height: 50px
     }
    .right {
        height: 50px;
        margin-left: 200px;
        background-color: blue;
     }
  `,
  position: `
    .wrap {position: relative;}
    .left {
            width: 200px;
            height: 50px;
            background-color: red;
        }
    .right {
        position: absolute;
        top: 0;
        left: 200px;
        height: 50px;
        background-color: blue;
    }
  `,
  flex: `
    .wrap {display: flex;}
    .left {
            width: 200px;
            background-color: pink;
            height: 50px;
          }
    .right {
        flex: 1;
        background-color: blue;
        height: 50px;
       }

  `,
  margin: `
     .wrap {
        width: 100%;
        padding: 10px
    }
    .left {
        width: 100px;
        height: 400px;
        background-color: blue;
    }
    .right {
        width: 100%;
        height: 400px;
        margin: -400px 0 0 100px;
        background-color: green;
    }
  `,
  grid: `
  .wrap {
         display: grid;
         grid-template-columns: 200px auto;
      }
      .left {
        background-color: #0f0;
        }
        .right {background-color: #f00;}
  `,
  table: `
     .wrap {
        width: 100%;
        display: table;
    }
    .left {
        background-color: #0f0;
        width: 200px;
    }
    .right {
        width: 100%;
        display: table-cell;
        background-color: #f00;
    }
  `
}
const FlexBox = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  
  .perview{
  
    width: 500px;
    height: 500px;
    
  }
`
export default () => {

  const [type, setType] = useState('float')
  const FloatBox = useMemo(()=>{
    return styled.div`${colStyle[type]}`
  }, [type])
  
  return (
    <div>
      {Object.keys(colStyle).map((key) => {
        return (<button onClick={() => {
          key !== type && setType(key)
        }}>{key}</button>)
      })}

      <FlexBox>
      <FloatBox>
        <div class="wrap">
          <div class="left">left--{type}</div>
          <div class="right">right</div>
        </div>
      </FloatBox>
        <div class={'perview'}>
          {colStyle[type]}
        </div>
      </FlexBox>
    </div>
  )
}
```
