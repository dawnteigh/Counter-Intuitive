import React, { useState } from 'react'

const Counter = () => {

	const [count, setCount] = useState(0)

	return (
		<div className="counter">
			<span className="count">{count}</span>
			<button onClick={ () => setCount(count + 1) }>+</button>
			<button onClick={ () => setCount(count - 1) }>-</button>
		</div>
	)
}

export default Counter