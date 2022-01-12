import React from 'react';

const Input = ({ name, value, error, onChange }) => {
	return (
		<div>
		<input autoFocus 
			value={value} 
			onChange={onChange} 
			name={name}
			id={name} 
			className="form-control" 
			type="text"
			error={error}
		/>
		{ error && <div className="alert alert-danger">{ error }</div> }
		</div>
)};

export default Input;