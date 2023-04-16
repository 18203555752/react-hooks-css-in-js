import React from 'react'
import Cart1 from './Cart1'
// 导入context对象
import { cartcontext } from '../../context'
 
// 静态数据
const cart=[
    {id:1,name:'qqqq',cart:'客车',num:3},
    {id:2,name:'aaaa',cart:'SUV汽车',num:2},
    {id:3,name:'zzzz',cart:'小轿车',num:5},
 
]
 
export default function Cart(props) {
    // 声明常量并赋值
    console.log(props)
    const text='12345'
 
    return (
        <div>
            <h2>Cart</h2>
            {/* 提供text数据和cart数据*/}
            <cartcontext.Provider value={{text,cart}} >
                <Cart1 />
            </cartcontext.Provider>
        </div>
    )
}