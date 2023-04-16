import React, { useContext } from 'react'
// 导入context对象
import { cartcontext } from '../../context'
 
export default function Cart2(props) {
 
 // useContext()钩子函数用来引入Context对象，从中获取cart和text数据
  const {add,text}=useContext(cartcontext)
//   利用props接收父亲传过来的数据
  const item=props.carts
 
  return (
    <div>
        {/* <h2>Cart2</h2> */}
       <h1>{text}</h1>
       {/* 数据显示并添加数量加点击事件（利用回调函数） */}
       <p>{item.name}---{item.cart}---{item.num}</p><button onClick={()=>add(item)}>+</button>
 
    </div>
  )
}