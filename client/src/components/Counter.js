import React, { useState } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'

const Counter = ({ counter }) => {

  const [count, setCount] = useState(counter.count)
  const [name, setName] = useState(counter.name)
  const [edit, setEdit] = useState(false)

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setEdit(false)
    }
  }

  const handleClick = (e) => {
    setEdit(true)
    e.stopPropagation()
  }

  const handleOutsideClick = () => setEdit(false)

  const ref = useOutsideClick(handleOutsideClick)

  return (
    <div className="counter">
      {
        edit ?
          <div className="counter-name" ref={ref} >
            <input value={name} maxLength="25" onChange={(e) => setName(e.target.value)} onKeyDown={handleEnter} autoFocus />
          </div> :
          <div className="counter-name">
            <span onClick={handleClick}>{name}</span>
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