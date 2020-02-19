import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
	const APP_ID = '08056da4';
	const APP_KEY = '4cf4ce1575c6f9fa4526464f36e28633';

	const exampleReq =
		`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	return (
		<div className="App">
			
		</div>
	);
};

export default App;
