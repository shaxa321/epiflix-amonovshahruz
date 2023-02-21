import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const SingleMovie = () => {
  const [movieDetails, SetMovieDetails] = useState();

  useEffect =
    (() => {
      MyCustomfetch();
    },
    []);

  const MyCustomfetch = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=24ad60e9&i=" + details.state.imdbID
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        //SetMovieDetails(data);
      } else {
        console.log("error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const details = useLocation();
  const params = useParams();
  console.log(params);
  console.log(details);
  MyCustomfetch();
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col xs={12} md={6}>
            <img src={details.state.Poster} alt="" />
          </Col>
          <Col xs={12} md={6}>
            <h4>{details.state.Title}</h4>
            <p>
              <strong>{details.state.Year}</strong>
              {details.state.Type}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SingleMovie;
