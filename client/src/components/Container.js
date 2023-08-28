import React, { useContext } from 'react'
import Counter from './Counter'
import { CounterContext } from '../context/CounterContext'

const Container = () => {

  const { counters } = useContext(CounterContext)

  const displayCounters = counters.map(c => {
    return <Counter key={c.id} counter={c} />
  })

  return (
    <div>
      {displayCounters}
    </div>
  )
}

export default Container