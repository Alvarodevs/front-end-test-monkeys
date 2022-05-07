import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { MoviesCatalog } from "./components/movies-catalog/MoviesCatalog";
import { MovieSingle } from "./components/movie-single/MovieSingle";
import { WatchList } from "./components/watchlist/WatchList";
import { Footer } from "./components/footer/Footer";
import injectContext from "./store/appContext";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<MoviesCatalog />}/>
						
					<Route
						exact
						path="/movie/:id"
						element={<MovieSingle/>}/>
						
					<Route
						exact
						path="/watch_list" 
						element={<WatchList/>}/>
						
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
};
export default injectContext(App);
