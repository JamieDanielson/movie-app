import React from 'react';

const MovieItem = ({ item }) => {
	return (
		<div className="card">
			<h1>{item.Title}</h1>
			<ul>
				<li>
					<strong>Year:</strong> {item.Year}
				</li>
				<li>
					<strong>Rated:</strong> {item.Rated}
				</li>
			</ul>
		</div>
	);
};

export default MovieItem;
