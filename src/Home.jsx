import { Container, Form } from "react-bootstrap";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState(null);

  const enterClik = (e) => {
    if (e.key === "Enter") {
      console.log("hai cliccato invio");
      setSearchQuery({
        searchQuery: "",
      });
    }
  };
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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search By Title</Form.Label>
              <Form.Control
                type="Input"
                placeholder="Enter your movie title"
                onKeyDown={(e) => {
                  enterClik(e);
                  console.log(e);
                  console.log("keyPress", e.target.value);
                  setSearchQuery(
                    searchQuery ? searchQuery + e.target.value : e.target.value
                  );
                }}
              />
              <Form.Text className="text-muted">
                prepare popcorn and coke.
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Home;
