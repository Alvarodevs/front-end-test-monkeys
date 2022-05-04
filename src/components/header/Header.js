import React, { useContext } from "react";
import headerStyles from "./header.module.css";
import agile_monkey_logo from "../../assets/img/agile_monkey_logo.png"
import { Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { Context } from "../../store/appContext.js";

export const Header = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	const value = "";

	const handleResetStore = () => {
		actions.getMovieList(1);
		history.push({ pathname: "/", state: store.movies });
	};

	return (
		<Navbar bg="dark" className={headerStyles.navbar_container}>

			<Link
				to="/"
				onClick={handleResetStore}>
				<img src={agile_monkey_logo} alt="agile_monkeys" />
			</Link>

			<SearchBar value={value} />

		</Navbar>
	);
};
