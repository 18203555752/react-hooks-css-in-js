import { useState, memo } from "react"
 function Counter(props){
  console.log('son组件更新了！')
  return <div>
    <button onClick={props.handleCount}>handleCount</button>
  </div>
}
export default memo(Counter)

