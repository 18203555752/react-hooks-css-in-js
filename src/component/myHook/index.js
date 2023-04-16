import React, { useState, useEffect, useRef } from "react";
import useArticle from './useArticl'
import useUpdateInput from './useUpdateInput'
export default function SetInterval() {
  const [post] = useArticle()
  const userName = useUpdateInput('')
  const passWord = useUpdateInput('')
  const confirmForm = (e)=> {
    e.preventDefault()
    console.log(userName.value)
    console.log(passWord.value)
  }
  return <div> 
    <div>
      {post.title}
      <div>
        {post.body}
      </div>
    </div>

    <br></br>

    <form onSubmit={confirmForm} action="">
      <input type="text" name="userName" {...userName}/>
      <input type="text" name='passWord' {...passWord}/>
      <input type="submit" />
    </form>
  </div>;
}
