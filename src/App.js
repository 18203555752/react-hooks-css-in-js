import logo from './logo.svg';
import './App.css';
import { useState, createContext } from 'react'
import { Route, Link , Routes} from 'react-router-dom'
import UseReducer from './component/reducer/useReducer'
import UseContext from './component/useContext'
import UseEffect from './component/UseEffect'
import UseCallBack from './component/UseCallBack'
import UseRef from './component/UseRef'
import MyHook from './component/myHook'
import CustomState from './custumHooks/useState'
function App() {
  const [count, setCount] = useState(0)
  const handleCount = ()=> {
    setCount((a)=> {
      document.title = a+1
      return a+1
    })
    
  }
  return (
      <div className="App">
        <CustomState></CustomState>



        {/* <div>{count}</div>
        <button onClick={handleCount}>count++</button> */}

        {/* <UseReducer></UseReducer> */}
        {/* <UseContext></UseContext> */}
        {/* <UseEffect></UseEffect> */}

        {/* <UseCallBack handleCount={handleCount}></UseCallBack> */}
        {/* <UseRef></UseRef> */}
        <div>
          <Link to={'/myhook/zhangsan'}>myhook页面</Link>
          <Link to={'/useContext'}>useContext页面</Link>
        </div>
        <div>
          <Routes>
            <Route path='/myhook/:name' element={<MyHook />}></Route>
            <Route path='/useContext' element={<UseContext/>}></Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
