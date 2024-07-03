import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TvShows = () => {
  const [films1, setFilms1] = useState([]);

  const fetchFilms = (url, setFilms) => {
    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("Risposta dal server", data);
        setFilms(data.Search);
      })
      .catch((e) => {
        console.log("Errore!", e);
      });
  };

  useEffect(() => {
    fetchFilms(
      "http://www.omdbapi.com/?apikey=47ad4fc&s=spider-man",
      setFilms1
    );
  }, []);

  return (
    <div className="bg-container">
      <h1 className="text-white">Spider man Saga</h1>
      <Row>
        {films1.slice(0, 6).map((film) => (
          <Col key={film.imdbID} xs={12} md={4} lg={2} className="mb-4">
            <Card className="bg-transparent">
              <Card.Img variant="top" src={film.Poster} />
              <Card.Body>
                <Card.Title className="text-white">{film.Title}</Card.Title>
                <Link
                  to={"/movieDetails/" + film.imdbID}
                  className="btn btn-primary text-white"
                >
                  Dettagli
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TvShows;
