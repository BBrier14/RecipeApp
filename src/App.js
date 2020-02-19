import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
	const APP_ID = '08056da4';
	const APP_KEY = '4cf4ce1575c6f9fa4526464f36e28633';

	useEffect(() => {}, []);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default App;
