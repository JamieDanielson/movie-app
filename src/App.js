import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieGrid from './components/MovieItem';
import './App.css';

const App = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`http://www.omdbapi.com/?apikey=425a8695&t=deadpool`);

			console.log(result.data);
			setItems(result.data);
		};

		fetchItems();
	});

	return (
		<div className="container">
			<header className="App-header">
				<MovieGrid items={items} />
			</header>
		</div>
	);
};

export default App;
