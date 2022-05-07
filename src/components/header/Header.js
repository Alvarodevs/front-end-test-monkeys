import React, { useContext } from "react";
import headerStyles from "./header.module.css";
import linkedin_logo from "../../assets/img/linkedin_logo.jpg"
import { Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { Context } from "../../store/appContext.js";

export const Header = () => {
	const { store, actions } = useContext(Context);
	let navigate = useNavigate();
	const value = "";

	const handleResetStore = () => {
		actions.getMovieList(1);
		navigate("/");
	};

	return (
		<div>
			<div className={headerStyles.upbar}>
				<p className={headerStyles.upbar_text}>
					Pellentesque pellentesque, mauris ut volutpat dapibus, lectus mauris!
				</p>
			</div>
			
			<Navbar bg="dark" className={headerStyles.navbar_container}>

				<Link
					to="/"
					onClick={handleResetStore}>
					<img src={linkedin_logo} alt="agile_monkeys" />
				</Link>

				<SearchBar value={value} />

			</Navbar>
		</div>
	);
};
