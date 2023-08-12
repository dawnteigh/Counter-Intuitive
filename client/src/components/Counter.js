import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("Counter")
  const [edit, setEdit] = useState(false)

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setEdit(false)
    }
  }

  return (
    <div className="counter">
      {
        edit ?
          <div className="counter-name">
            <input value={name} maxLength="25" onChange={(e) => setName(e.target.value)} onKeyDown={handleEnter} autoFocus />
          </div> :
          <div className="counter-name">
            <span onClick={() => setEdit(true)}>{name}</span>
          </div>
      }
      <div className="count">
        <span>{count}</span>
        <span>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </span>
      </div>
    </div>
  )
}

export default Counter