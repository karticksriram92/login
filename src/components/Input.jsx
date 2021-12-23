import React from 'react';

const Input = ({ name, value, onChange }) => {
	return (
		<input autoFocus 
			value={value} 
			onChange={onChange} 
			name={name}
			id={name} 
			className="form-control" 
			type="text" 
		/>
)};

export default Input;