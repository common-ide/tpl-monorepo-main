import React from 'react';

import { Button } from "antd";
import * as Main from "../src";

export const Simple = () => {
  console.log("IoC Module:", Main);
  return <>
    <Button onClick={()=>{console.log('just test')}}>测试</Button>
    <input placeholder="Hello World!" />
  </>
}

export default {
  title: 'IoC',
}
