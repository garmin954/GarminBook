import React, { useCallback } from 'react';

function Child({ val, getData }: any) {
  React.useEffect(() => {
    getData();
  }, [getData]);
  console.log("Test Render")
  return <div>{val}</div>;
}
let count = 0;

export default ({ title }: { title: string }) => {
  // 用于记录 getData 调用次数

  const [val, setVal] = React.useState(0);

  const getData = useCallback(() => {
    setTimeout(() => {
      console.log('getData ' + count);
      setVal(count);
      count++;
    }, 500);
  }, [])

  React.useEffect(() => {
    getData();
    console.log('只执行一次');
    return () => {
      // alert('确定关闭？');
    };
  }, []);


  return <h1>{title} --
    <Child val={val} getData={getData} />
    <button onClick={useCallback(() => setVal(val + 1), [val])}>add</button>
  </h1>;
};

