import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [edit, setEdit] = useState(true)

  return (
    <div className="counter">
      {
        edit ?
          <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setEdit(false)} >Submit</button>
          </> :
          <span onClick={() => setEdit(true)} >{name}</span>
      }
      <span className="count">{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter