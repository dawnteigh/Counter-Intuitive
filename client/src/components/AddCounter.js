import React, { useState } from 'react'

const AddCounter = () => {

	const [formData, setFormData] = useState({
		name: "",
		style: "",
		count: 0
	})

	const handleSelect = (e) => setFormData({ ...formData, style: e.target.value })
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		fetch('http://localhost:3000/counters', {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData)
		})
			.then(r => r.json())
	}

	return (
		<div className="form-div">
			<form onSubmit={handleSubmit}>
				<div className="form-name">
					<label htmlFor="name">{"Name of new counter: "}
						<input type="text" id="name" value={formData.name} onChange={handleChange} />
					</label>
				</div>
				<div className="form-style">
					<label htmlFor="style" >{"Select a style: "}
						<select id="style" onChange={handleSelect}>
							<option value="" >Default</option>
							<option value="red" >Red</option>
						</select>
					</label>
				</div>
				<div className="form-count">
					<label htmlFor="count">{"Optional starting value (default is zero): "}
						<input type="number" id="count" value={formData.count} onChange={handleChange} />
					</label>
				</div>
				<input type="submit" value="Add Counter" />
			</form>
		</div>
	)
}

export default AddCounter