import { Input } from '@chakra-ui/react';
import React from 'react'

const SearchBar = ({ keyword, onChange, align }) => {
	const BarStyle = { width: "20rem", background: "#F0F0F0", border: "none", padding: "0.5rem" };
	return (
		<Input
			style={BarStyle}
			key="search-bar"
			value={keyword}
			placeholder={"Busque un pokemon..."}
			onChange={(e) => onChange(e.target.value)}
			alignSelf={align}
		/>
	)
}

export default SearchBar