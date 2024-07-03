import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home saga={"pokemon"} />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movieDetails/:imdbID" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
