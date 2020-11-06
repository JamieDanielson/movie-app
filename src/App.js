import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header.component';
import MovieGrid from './components/MovieGrid.component';
import Search from './components/Search.component';
import './App.css';
require('dotenv').config();

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');

	useEffect(() => {
		const fetchItems = async () => {
			setIsLoading(true);
			const result = await axios(
				`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${query}`,
			);

			console.log(result.data);

			setItems(result.data);
			setIsLoading(false);
		};

		fetchItems();
	}, [query]);

	return (
		<div className="container">
			<Header />
			<Search getQuery={(q) => setQuery(q)} />
			<MovieGrid isLoading={isLoading} items={items} />
		</div>
	);
};

export default App;
