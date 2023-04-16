import { useState, useCallback } from "react"
import Son from './son'
export default function Counter(){
  const [count, setCount] = useState(0)
  const handleCount = useCallback(()=>{setCount(0)}, [setCount])
  return <div>
    hello UseCallBack -----{count}
    <button onClick={()=> setCount(count+1)}>setCount+1</button>
    <Son handleCount={handleCount}></Son>
  </div>
}

