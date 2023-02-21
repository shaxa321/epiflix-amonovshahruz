import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EpiflixHeader from "./EpiflixHeader";
import Home from "./Home";
import MovieCarousel from "./MovieCarousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import SingleMovie from "./SingleMovie";
const App = () => {
  return (
    <>
      <EpiflixHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/a" element={<EpiflixHeader />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound spacings="mt-2 pt-2" />} />
          <Route path="/SingleMovie/:dinamicId" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
