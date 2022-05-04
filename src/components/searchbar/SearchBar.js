import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import searchbarStyles from "./searchbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Form, Badge } from "react-bootstrap";
import Proptypes from "prop-types";
import { useHistory, Link } from "react-router-dom";

export const SearchBar = prop => {
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState("");
	// const [watchListNumber, setWatchListNumber] = useState("");
	// const history = useHistory();

	const handleInput = e => {
		setInput(e.target.value);
		actions.addPagination(1);
		actions.addQuery(e.target.value);
		// {
		// 	e.target.value !== ""
		// 		? actions.getMovieFromQuery(e.target.value)
		// 		: actions.addPagination("") & actions.getMovieList(1);
		// }
	};

	// useEffect(() => {
	// 	setInput("");
	// }, [location.pathname === "/"]);

	return (
		<div className={searchbarStyles.searchbar}>
			{/* <div className="watchlist-container"> */}
				<Link to="/watch_list">
					<span className="watchlist-header">Watch List</span>
					<FontAwesomeIcon icon={faHeart} size="2x" />

					<Badge pill bg="primary" className="badge-heart">
						{store.watchListMovies.length > 0
							? store.watchListMovies.length
							: ""}
					</Badge>
				</Link>
			{/* </div> */}
			<div className={searchbarStyles.searchbar_content}>
				<form className={searchbarStyles.searchbar_form}> 
					<input
						type="text"
						className={searchbarStyles.searchbar_input}
						placeholder="Search"
						value={input}
						onChange={handleInput}
					/>
				</form>
				<FontAwesomeIcon icon={faMagnifyingGlass} color="#9F9F9F" size="1x" />
			</div>

		</div>
	);
};

SearchBar.propTypes = {
	value: Proptypes.string
};
