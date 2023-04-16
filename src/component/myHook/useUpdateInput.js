import { useState } from "react"

export default (initialState)=> {
  const [value, setValue] = useState(initialState)

  return {
    value,
    onChange: (event)=> {
      setValue(event.target.value)
    }
  }
}