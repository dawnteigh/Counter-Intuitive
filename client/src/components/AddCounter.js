import React, { useState } from 'react'

const AddCounter = () => {

	const [formData, setFormData] = useState({
		name: "",
		style: "",
		count: 0
	})

	const handleSelect = (e) => setFormData({...formData, style: e.target.value})
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// send form data to backend
	}

	return (
		<div className="form-div">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name of new counter:</label>
				<input type="text" id="name" value={formData.name} onChange={handleChange} />
				<label htmlFor="style" >Select a style:</label>
				<select id="style" onChange={handleSelect}>
					<option value="" >Default</option>
					<option value="red" >Red</option>
				</select>
				<label htmlFor="name">Optional starting value (default is zero):</label>
				<input type="number" id="count" value={formData.count} onChange={handleChange} />
				<input type="submit" value="Add Counter" />
      </form>
		</div>
	)
}

export default AddCounter