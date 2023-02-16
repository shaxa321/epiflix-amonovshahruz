import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

function MovieCarousel() {
  const MyCustomfetch = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=24ad60e9&s=Harry"
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
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

  return (
    <Container className="">
      <Row>
        <Col className="mb-2 px-1">
          <p>I am a Movie Carousel</p>
          {console.log("I am a movie Carousel")}
        </Col>
      </Row>
    </Container>
  );
}

export default MovieCarousel;
