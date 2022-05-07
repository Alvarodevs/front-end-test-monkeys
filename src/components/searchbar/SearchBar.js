/* eslint-disable no-unused-expressions */
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import searchbarStyles from "./searchbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Proptypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";

export const SearchBar = prop => {
	const { store, actions } = useContext(Context);
	const [input, setInput] = useState("");
	const navigate = useNavigate();

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
			navigate("/")
		}
	}, [store.q]);

	return (
		<div className={searchbarStyles.searchbar}>
			<Link to="/watch_list" className={searchbarStyles.watchlist_container}>
				<span className={searchbarStyles.watchlist_header}>Watch List</span>

				<p className={searchbarStyles.watchlist_number}>
						{store.watchListMovies.length > 0
							? store.watchListMovies.length
							: ""}
					</p>
				<FontAwesomeIcon icon={faHeart} size="2x" >
					
				</FontAwesomeIcon>
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
