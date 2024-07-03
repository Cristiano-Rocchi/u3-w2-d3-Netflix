import { useEffect, useState } from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";

const Home = ({ saga }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?s=${saga}&apikey=26b5a229`)
      .then((response) => response.json())
      .then((moviesObject) => setMovies(moviesObject.Search))
      .catch((error) => console.log("Error", error));
  };

  useEffect(() => {
    fetchMovies();
  }, [saga]);

  const firstLetterUpper = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="bg-dark">
      <h2 className="fs-4 mt-4 mb-2">{firstLetterUpper(saga)}</h2>
      <Row>
        {movies.map((movie) => (
          <Col
            lg={3}
            md={6}
            sm={12}
            key={movie.imdbID}
            className="movieCol mb-3"
          >
            <Card className="cardStyle h-100 border border-0">
              <CardImg className="rounded h-100" src={movie.Poster} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
