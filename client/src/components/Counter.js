import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [edit, setEdit] = useState(true)

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
            <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleEnter} autoFocus />
          </div> :
          <div className="counter-name">
            <span onClick={() => setEdit(true)}>{name}</span>
          </div>
      }
      <div className="count">
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}

export default Counter