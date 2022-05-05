import React, { useContext, useEffect } from "react";
import movieSingleStyles from "./movie-single.module.css"
import { Context } from "../../store/appContext";
import { ActorCard } from "../actor-card/ActorCard";
import { Button } from "react-bootstrap";
import { Link, useHistory,useLocation } from "react-router-dom";

export const MovieSingle = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	let location = useLocation();

	const idParam = (location.pathname + location.search).substr(7);
	console.log(location)

	useEffect(() => {
		actions.getMovieDetail(idParam);
		actions.getCredits(idParam);
	}, [idParam]);

	//SEARCHING FROM MOVIESINGLE NOT WORKING ALREADY
	// useEffect(() => {
	// 	{
	// 		!store.moviesFromQuery ? history.push("/") : "";
	// 	}
	// }, []);

	let cast = store.movieCredits.map((actor, index) => {
		return <ActorCard key={index} actor={actor} />;
	});

	return (
		<>
			<Button className="button-exit-watchlist">
				<Link to="/">Back Homepage</Link>
			</Button>
			<div className={movieSingleStyles.movie_detail}>
				<img className={movieSingleStyles.poster_path}
					src={
						store.singleMovieDetails.poster_path
							? store.IMG_API +
							  store.singleMovieDetails.poster_path
							: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=345&q=80"
					}
					alt={store.singleMovieDetails.title}
				/>
				<div className={movieSingleStyles.movie_detail_info}>
					<p>{store.singleMovieDetails.title} </p>
					<div className={movieSingleStyles.production_info}>
						<p>{store.singleMovieDetails.runtime} min.</p>
						<p>
							{store.singleMovieDetails.budget
								? "$ " + store.singleMovieDetails.budget
								: "No budget available"}
						</p>
						<p>Rate: {store.singleMovieDetails.vote_average}</p>
					</div>
					<div>{cast}</div>
				</div>
			</div>
		</>
	);
};
