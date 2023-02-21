import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, UseLocation } from "react-router-dom";

const MovieCarousel = (props) => {
  const [arrayMovies, setArrayMovies] = useState(null);

  const MyCustomfetch = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=24ad60e9&s=" + props.title
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setArrayMovies(data.Search);
      } else {
        console.log("error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("I am a use effect");
    MyCustomfetch();
  }, []);

  console.log("i am movie carousel reder", props.title);
  return (
    <>
      <h4>{props.h4title}</h4>
      <Row className="mb-4 no-gutters text-center d-flex flex-direction-row">
        {arrayMovies
          ? arrayMovies.map((movie, index) => {
              if (index < 6) {
                return (
                  <>
                    <Col
                      key={movie.imdbID + "movie"}
                      xs={6}
                      sm={4}
                      md={3}
                      xl={2}
                      className="mb-2 px-1"
                    >
                      <Link to={"/SingleMovie/" + movie.imdbID} state={movie}>
                        <img
                          className="img-fluid"
                          src={movie.Poster}
                          alt="image Harry"
                        ></img>
                      </Link>
                    </Col>
                  </>
                );
              }
            })
          : "niente"}
      </Row>
    </>
  );
};

export default MovieCarousel;
