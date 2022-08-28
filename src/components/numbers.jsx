import React from 'react'
import {useState} from 'react';
import './numbers.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
function Numbers() {
    const [num, setNum] = useState(0);

    const count=useSelector((state)=>state.counter.counter);
    console.log('count',count);
    const dispatch=useDispatch();
    return (<div className='hello col-md-8 offset-md-2'> <h1 className='text-center'> {count}</h1>
        <br />
        <br />
        <div className='d-flex justify-content-center'>
        <div className='col-2 text-center'>
        <button onClick={()=>dispatch(increment())}><h2>+</h2></button>
        </div>
        <br />
        <br />
        <div className='col-2 text-center'>
        <button onClick={()=>dispatch(decrement())}><h2>-</h2></button></div>
        </div>
        </div>
    );
}

export default Numbers;