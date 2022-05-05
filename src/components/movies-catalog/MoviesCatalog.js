import React, { useEffect, useContext, useRef } from "react";
import moviesCatalogStyles from "./movies-catalog.module.css"
import { Context } from "../../store/appContext.js";
import { Button } from "../button/Button";
import MovieCard from "../movie-card/MovieCard.js";
//import { Section } from "../section/Section";

export const MoviesCatalog = () => {
	const { store, actions } = useContext(Context);
	const myRef = useRef(null);	

	//EFFECT WHAT TO RENDER IN HOME PAGE
	useEffect(() => {
		store.q ? actions.getMovieFromQuery() : actions.getMovieList(1);
	}, [!store.page]);

	//SCROLL BACK TO TOP OF MOVIES
	const scrollToTop = () => myRef.current.scrollIntoView();

	//PAGINATION
	// const paginationForward = () => {
	// 	actions.addPagination(++store.page);
	// 	{
	// 		store.q !== ""
	// 			? actions.getMovieFromQuery()
	// 			: actions.getMovieList();
	// 	}
	// 	scrollToTop();
	// };

	// const paginationBackward = () => {
	// 	actions.addPagination(--store.page);
	// 	{
	// 		store.q !== ""
	// 			? actions.getMovieFromQuery()
	// 			: actions.getMovieList();
	// 	}
	// 	scrollToTop();
	// };

	
	
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
		<div>
			<div className={moviesCatalogStyles.movies_catalog_header}>
				<div className={moviesCatalogStyles.catalog_header_container}>
					<h2>Most popular films</h2>
					<p className={moviesCatalogStyles.catalog_header_text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque, mauris ut volutpat dapibus, lectus mauris scelerisque nunc, quis dignissim enim erat eu est.
					</p>
				</div>
				<div className={moviesCatalogStyles.buttons_container}>
					<Button title="Filter" iconType="faSliders"/>
					<Button title="Order by" iconType="faSliders"/>
				</div>
			</div>

			{/* Section in the middle w white bg color  */}
			{/* <Section/> */}
			
			
			<div className={moviesCatalogStyles.movies_container} ref={myRef}>
				{store.q === "" ? movies : moviesFromQuery}
			</div>
			
			<div className={moviesCatalogStyles.pagination_buttons_container}>
				<div>
					{store.page <= 1 ? (
						""
					) : (
						<Button
							title="Previous page"
							iconType="prev"
							>
							
						</Button>
					)}
				</div>
				<Button
					title="Next page"
					iconType="next"
					>
				</Button>
			</div>
		</div>
	);
};
