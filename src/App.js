import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/header/Header";
import { MoviesCatalog } from "./components/movies-catalog/MoviesCatalog";
import { MovieSingle } from "./components/movie-single/MovieSingle";
import { WatchList } from "./components/watchlist/WatchList";
import { Footer } from "./components/footer/Footer";
import injectContext from "./store/appContext";

const App = () => {
	return (
		<>
			<div className="main-container text-center">
				<div className="app-container">
					<BrowserRouter>
						<Header />
						<Switch>
							<Route exact path="/">
								<MoviesCatalog />
							</Route>
							<Route
								exact
								path="/movie/:id"
								component={MovieSingle}></Route>
							<Route
								exact
								path="/watch_list"
								component={WatchList}></Route>
						</Switch>
					</BrowserRouter>
					<Footer/>
				</div>
			</div>
		</>
	);
};
export default injectContext(App);
