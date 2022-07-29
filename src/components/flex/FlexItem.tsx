import React from 'react';
import {FlexItemBox} from './Style'
import { FlexItemProps } from '@/components/flex/PropsType';

export default function FlexItem(props:FlexItemProps){
  return <FlexItemBox>
    {props.children}
  </FlexItemBox>
}
