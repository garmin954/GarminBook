import React, { useMemo } from 'react';
import clsx from 'clsx'
import {FlexBox} from './Style'
import {FlexProps} from './PropsType'
 const Flex = (props:FlexProps)=>{

  const styles = useMemo(()=>{
    return {}
  }, [props.direction])
  return <FlexBox
    className={clsx(props.className,)}
    style={styles}
  >
    {props.children}
  </FlexBox>
}
Flex.defaultProps ={
  direction: 'row'
}
export default Flex
