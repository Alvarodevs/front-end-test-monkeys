import React, { useEffect, useState, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import moviesCatalogStyles from "./moviesCatalog.module.css"
import { Context } from "../../store/appContext.js";
import { Button } from "react-bootstrap";
import MovieCard from "../movieCard/MovieCard.js";

export const MoviesCatalog = () => {
	const { store, actions } = useContext(Context);
	const myRef = useRef(null);
	let location = useLocation();

	//EFFECT WHAT TO RENDER IN HOME PAGE
	useEffect(() => {
		
		store.q !== "" ? actions.getMovieFromQuery() : actions.getMovieList(1);
		
	}, [!store.page]);

	//SCROLL BACK TO TOP OF MOVIES
	const scrollToTop = () => myRef.current.scrollIntoView();

	//PAGINATION
	const paginationForward = () => {
		actions.addPagination(++store.page);
		{
			store.q !== ""
				? actions.getMovieFromQuery()
				: actions.getMovieList();
		}
		scrollToTop();
	};

	const paginationBackward = () => {
		actions.addPagination(--store.page);
		{
			store.q !== ""
				? actions.getMovieFromQuery()
				: actions.getMovieList();
		}
		scrollToTop();
	};

	//MOVIES CARDS ARRAYS (NOT QUERY & QUERY)
	let movies =
		store.movies.length > 0 &&
		store.movies.map((movie, index) => (
			<MovieCard key={index} {...movie} />
		));

	let moviesFromQuery = store.moviesFromQuery.map(moviesArray =>
		moviesArray.map((item, index) => <MovieCard key={index} {...item} />)
	);

	return (
		<>
			<div className={moviesCatalogStyles.movies_container} ref={myRef}>
				{store.q === "" ? movies : moviesFromQuery}
			</div>
			<div className="d-flex flex-row justify-content-center">
				<div>
					{store.page <= 1 ? (
						""
					) : (
						<Button
							className="page-navigation-btn"
							onClick={() => paginationBackward()}>
							Previous page
						</Button>
					)}
				</div>
				<Button
					className="page-navigation-btn"
					onClick={() => paginationForward()}>
					Next page
				</Button>
			</div>
		</>
	);
};
