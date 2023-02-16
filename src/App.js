import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EpiflixHeader from "./EpiflixHeader";
import Home from "./Home";
import MovieCarousel from "./MovieCarousel";

function App() {
  return (
    <>
      <EpiflixHeader />
      <Home />
      <MovieCarousel />
    </>
  );
}

export default App;
