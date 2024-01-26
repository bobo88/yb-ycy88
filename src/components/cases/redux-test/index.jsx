import React from 'react'
import { Button } from 'antd';

import { useSelector, useDispatch } from 'react-redux'
import { increment, addItem } from '@/store/counterSlice'

function App() {
  const counter = useSelector(state => state.counter.value);
  const { value, list} = useSelector(state => state.counter);
  console.log('解构赋值：', value, list)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Button type="primary" onClick={() => dispatch(increment())}>点我累加 - {counter} - （刷新页面也会保存累加值）</Button>
      <Button className='ml30' type="primary" onClick={() => dispatch(addItem(4))}>点我push - {list.join(',')}</Button>
    </div>
  );
}

export default App;
