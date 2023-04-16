import { useReducer, useState } from "react";
import reducer, { initialState, TODO_LIST_ADD, TODO_LIST_EDIT, TODO_LIST_REMOVE } from "./todos-reducer";

const TodoAdd = ({ dispatch }) => {
  const [content, setContent] = useState('');

  return <>
    <input type="text" onChange={e => setContent(e.target.value)} />
    <button onClick={() => {
      dispatch({ type: TODO_LIST_ADD, payload: { content } })
    }}>
      添加
    </button>
  </>
};

const Todo = ({ todo, dispatch }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(todo.content);

  return <div>
    {
      !isEdit ? <>
        <span>{todo.content}</span>
        <button onClick={() => setIsEdit(true)}> 编辑 </button>
        <button onClick={() => dispatch({ type: TODO_LIST_REMOVE, payload: { id: todo.id } })}> 删除 </button>
      </> : <>
        <input value={content} type="text" onChange={ e => setContent(e.target.value) } />
        <button onClick={() => {
          setIsEdit(false);
          dispatch({ type: TODO_LIST_EDIT, payload: { id: todo.id, content } })
        }}> 更新 </button>
        <button onClick={() => setIsEdit(false)}> 取消 </button>
      </>
    }
  </div>
}

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <>
    <TodoAdd dispatch={dispatch} />
    {
      state.todos.map(todo => <Todo
        key={todo.id}
        todo={todo}
        dispatch={dispatch}
      />)
    }
  </>
}

export default Todos;