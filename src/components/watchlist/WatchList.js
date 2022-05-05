import React, { useRef, useContext, useState, useEffect } from "react";
import { Button } from "../button/Button";
import watchListStyles from "./watchlist.module.css"
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import MovieCard from "../movie-card/MovieCard.js";

export const WatchList = () => {
	const { store, actions } = useContext(Context);
	const [watchListNumber, setWatchListNumber] = useState("");
	const myRef = useRef(null);

	
	let watchListMovies =
		store.watchListMovies.length > 0 &&
		store.watchListMovies.map((movie, index) => (
			<MovieCard key={index} {...movie} />
		));

	useEffect(() => {
		setWatchListNumber(store.watchListMovies.length);
	}, []);

	return (
		<>
			<Button className="button-exit-watchlist" ref={myRef}>
				<Link to="/">Back Homepage</Link>
			</Button>
			<div className={watchListStyles.movies_container}>{watchListMovies}</div>
		</>
	);
};
