import React from 'react';

const Input = ({ name, value, error, onChange }) => {
	return (
		<input autoFocus 
			value={value} 
			onChange={onChange} 
			name={name}
			id={name} 
			className="form-control" 
			type="text" 
		/>
		{ error && <div className="alert alert-danger">{ error }</div> }
)};

export default Input;