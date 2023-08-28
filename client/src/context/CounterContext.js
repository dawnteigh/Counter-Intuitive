import React, { useState, useEffect } from 'react'

const CounterContext = React.createContext()

function CounterProvider({ children }) {

  const [counters, setCounters] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/counters')
      .then(r => r.json())
      .then(data => setCounters(data))
  }, [])

  return (
    <CounterContext.Provider value={{ counters, setCounters }}>
      {children}
    </CounterContext.Provider>

  )
}

export { CounterContext, CounterProvider }