import { useState, useEffect } from "react"
import axios from 'axios'

export default ()=> {
  const [post, setPost] = useState(0)
  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=> {
      setPost(res.data)
    })
  }, [])
  return [post]
}