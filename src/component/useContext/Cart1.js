import React, { useContext, useState } from 'react'
// 导入context对象
import { cartcontext } from '../../context'
import Cart2 from './Cart2'
 
export default function Cart1() {
 
    // useContext()钩子函数用来引入Context对象，从中获取cart数据
    const { cart } = useContext(cartcontext)
    // useState的参数为状态初始值，setItems为变更状态值的方法
    const [items, setItems] = useState(cart)
 
    // 数量加减函数
    const add = item => {
        item.num += 1
        setItems([...items])
    }
 
    return (
        <div>
            {/* 提供add函数 */}
            <cartcontext.Provider value={{ add }}>
                <h2>Cart1</h2>
                {/*遍历数据并传出 */}
                {items.map(e =>
                    <Cart2 key={e.id} carts={e} />
                )}
            </cartcontext.Provider>
        </div>
    )
}