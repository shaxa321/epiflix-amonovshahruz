import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import MovieCarousel from "./MovieCarousel";

function Home() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchTitle, setSearchTitle] = useState(null);

  const enterClik = (e) => {
    if (e.key === "Enter") {
      console.log("hai cliccato invio");
      setSearchTitle(e.target.value);
      e.target.value = "";

      console.log(searchTitle);
    }
  };

  console.log("i Am a render", searchTitle);
  return (
    <>
      <Container className="px-4">
        <div className="d-flex justify-content-between">
          <div>
            <h2>Tv Shows</h2>
          </div>
          <div>DropdDown</div>
        </div>
        <div>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search By Title</Form.Label>
              <Form.Control
                type="Input"
                placeholder="Enter your movie title"
                onKeyDown={(e) => {
                  enterClik(e);
                }}
              />
              <Form.Text className="text-muted">
                prepare popcorn and coke.
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      </Container>

      <Container fluid className="px-4">
        <h4>{searchTitle ? searchTitle : "niente"}</h4>
        {searchTitle ? (
          <>
            <MovieCarousel
              h4title={"Searched : " + searchTitle}
              title={searchTitle}
            />
          </>
        ) : (
          <h4></h4>
        )}

        <MovieCarousel h4title="Trending Now" title="Harry " />
        <MovieCarousel h4title="Watch it Again" title="Pirates " />
        <MovieCarousel h4title="New Realeases" title="Batman" />
      </Container>
    </>
  );
}

export default Home;
