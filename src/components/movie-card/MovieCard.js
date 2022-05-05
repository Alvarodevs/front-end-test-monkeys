import React, { useState, useContext, useEffect } from "react";
import movieCardStyles from "./movieCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Context } from "../../store/appContext.js";

const MovieCard = props => {
	const { store, actions } = useContext(Context);
	const [idMovie, setIdMovie] = useState("");
	let history = useHistory();
	let location = useLocation();

	const handleId = e => {
		setIdMovie(props.id);
	};

	const handleAddToWatchList = e => {
		actions.addMovieToWatchList(idMovie);
	};

	const handleDeleteMovie = e => {
		actions.removeMovieFromWatchList(idMovie);
		history.push("/watch_list");
	};

	//Date conversion
	const date = new Date(props.release_date);
	const options = { day: 'numeric', month: 'short', year: 'numeric' };

	return (
		<div className={movieCardStyles.movie} onMouseOver={handleId} value={idMovie}>
			<Link to={"/movie/" + idMovie}>
				<img
					src={
						props.poster_path
							? store.IMG_API + props.poster_path
							: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=345&q=80"
					}
					alt={props.title}
				/>
				<div className={movieCardStyles.movie_info}>
					<div className={movieCardStyles.average_container}>
						<FontAwesomeIcon icon={faStar} />
						<span>{props.vote_average}</span>
					</div>
					<p><strong>{props.title}</strong></p>
					<p>{date.toLocaleString('es-ES', options)}</p>
				</div>
				<div className={movieCardStyles.overview}>
					<div>
						{location.pathname === "/watch_list" ? (
							<Link to={"/watch_list"}>
								<FontAwesomeIcon
									className={movieCardStyles.fa_icon}
									icon={faTrash}
									size="2x"
									onClick={handleDeleteMovie}>
								</FontAwesomeIcon>
							</Link>
						) : (
							<FontAwesomeIcon
								className={movieCardStyles.fa_icon}
								icon={faHeart}
								size="2x"
								onClick={handleAddToWatchList}></FontAwesomeIcon>
						)}
						<h3>Overview:</h3>
					</div>
					{props.overview ? (
						<p>{props.overview}</p>
					) : (
						"No overview available"
					)}
				</div>
			</Link>
		</div>
	);
};

MovieCard.propTypes = {
	title: PropTypes.string,
	overview: PropTypes.string,
	vote_average: PropTypes.number,
	poster_path: PropTypes.string,
	id: PropTypes.number
};

export default MovieCard;
