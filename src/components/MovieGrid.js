import React from 'react';
import MovieItem from './MovieItem';

const MovieGrid = ({ items }) => {
	return (
		<section className="cards">
			{items.map(item => (
				<MovieItem key={item.Title} item={item}></MovieItem>
			))}
		</section>
	);
};

export default MovieGrid;
