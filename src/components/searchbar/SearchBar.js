/* eslint-disable no-unused-expressions */
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import searchbarStyles from "./searchbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Badge } from "react-bootstrap";
import Proptypes from "prop-types";
import { useHistory, Link } from "react-router-dom";

export const SearchBar = prop => {
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState("");
	const history = useHistory();

	const handleInput = e => {
		setInput(e.target.value);
	};

	const handleSubmit = e => {
		actions.addQuery(input);
		actions.addPagination(1);
		{
			input ? actions.getMovieFromQuery() : actions.addPagination("") & actions.getMovieList(1);
		}
		e.preventDefault();
	};

	useEffect(() => {
		if (!input) {
			history.push("/")
		}
	}, [store.q]);

	return (
		<div className={searchbarStyles.searchbar}>
			<Link to="/watch_list" >
				<span className="watchlist-header">Watch List</span>
				<FontAwesomeIcon icon={faHeart} size="2x" />
				<p className={searchbarStyles.badge_heart}>
					{store.watchListMovies.length > 0
						? store.watchListMovies.length
						: ""}
				</p>
			</Link>
			<div className={searchbarStyles.searchbar_content}>
				<form className={searchbarStyles.searchbar_form} onSubmit={handleSubmit}>
					<input
						type="text"
						className={searchbarStyles.searchbar_input}
						placeholder="Search"
						value={input}
						onChange={handleInput}
					/>
				</form>
				<FontAwesomeIcon icon={faMagnifyingGlass} className={searchbarStyles.magnify_glass} size="1x" 
				onClick={handleSubmit}/>
			</div>

		</div>
	);
};

SearchBar.propTypes = {
	value: Proptypes.string
};
