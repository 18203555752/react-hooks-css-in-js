// import React, { useState, useEffect } from "react";

// import { render } from "react-dom"
// import { useEffect } from 'react'
import hanRoot from '../initRoot'
const states = []
const setters = []
let stateIndex = 0

function createSetter(index) {
  return (newState)=> {
    states[index] = newState
    toRender()
  }
}

function useState(initialState) {
  states[stateIndex]= states[stateIndex] ? states[stateIndex] : initialState
  setters.push(createSetter(stateIndex))
  let setState = setters[stateIndex]
  let value = states[stateIndex]
  // console.log(value, stateIndex)
  stateIndex++
  return [value, setState]
}

let prevDepsAry = []
let effectIndex = 0
function useEffect (callback, depsAry) {
  if(Object.prototype.toString.call(callback) !== '[object Function]') throw new Error('useEffect的第一个参数必须是函数')

  if(depsAry === undefined) {
    callback()
  }else{
    if( !Array.isArray(depsAry)) throw new Error('useEffect的第2个参数必须是数组')
    const prevDeps = prevDepsAry[effectIndex]
    // console.log(prevDeps)
    const hasChanged = prevDeps ? depsAry.every((item, index)=> item === prevDeps[index]) === false : true
    if(hasChanged) {
      callback()
    }
    prevDepsAry[effectIndex] = depsAry
    effectIndex++
  }
}

function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)
  function disPatch(action) {
    const newState = reducer(state, action)
    setState(newState)
  }
  return [state, disPatch]
}

function toRender() {
  stateIndex = 0
  effectIndex = 0
  hanRoot.render(<SetInterval></SetInterval>)
}

export default function SetInterval() {
  // console.log(setters)
  const [count, setCount] = useState(0);
  const [name, setName] = useState('张三');
  const [reducerCount, dispatch] = useReducer(reducer, 10)
  const handleCount = ()=> {
    setCount(count + 1);
  }

  const handlename = ()=> {
    setName(name+'q');
  }
  useEffect(()=> {
    console.log('count变了')
  }, [count])
  useEffect(()=> {
    console.log('name变了')
  }, [name])
  return <div> 
    <div>dep count is {count} </div>
    <button onClick={handleCount}>count</button>

    <div>dep name is {name} </div>
    <button onClick={handlename}>name</button>

    <div>reducerCount {reducerCount}</div>
    <button onClick={()=> {dispatch({type: 'increment'})}}>name</button>
  </div>;
}

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return state + 5;
    case 'decrement':
      return state - 5;
    default:
      return state;
  }
}