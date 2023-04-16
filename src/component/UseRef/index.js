import React, { useState, useEffect, useRef } from "react";
export default function SetInterval() {
  const [count, setCount] = useState(0)
  const box = useRef()
  let timerId = useRef()
  console.log('组件更新了')
  useEffect(()=> {
    timerId.current = setInterval(()=> {      
      setCount((a)=> a+1)
    }, 1000)
    return ()=> {
      clearInterval(timerId)
    }
  }, [])

  const stopInterval = ()=> {
    console.log(timerId)
    clearInterval(timerId.current)
  }
  return <div> 
    <button ref={box} onClick={()=> console.log(box)}>获取元素</button>
    <div>
      {count}
      <button onClick={stopInterval}>停止</button>
    </div>
  </div>;
}
