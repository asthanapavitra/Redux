import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement, increaseByAmt } from './redux/features/counterSlice';
const App = () => {
  const dispatch=useDispatch();
  const counter=useSelector((state)=>state.counter.value)
  const [num,setNum]=useState();
  return (
    <div>
      <h1>{counter}</h1>
      <button
      onClick={()=>{
        dispatch(increment())
      }}
      >Increment</button>
      <button
      onClick={()=>{
        dispatch(decrement())
      }}
      >Decrement</button>

      <input type="number" value={num}
      onChange={(e)=>{
       
        setNum(e.target.value);
      }}/>

      <button
      onClick={()=>{
        dispatch(increaseByAmt(Number(num)))
      }}
      >Increase By Amt </button>

    </div>
  )
}

export default App
