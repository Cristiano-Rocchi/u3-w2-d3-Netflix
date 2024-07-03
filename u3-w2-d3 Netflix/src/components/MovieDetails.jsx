import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=47ad4fc&i=${imdbID}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((e) => {
        console.log("Errore!", e);
      });
  }, [imdbID]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {movie && (
        <Card style={{ width: "18rem" }} className="bg-transparent text-white">
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title className="text-black">{movie.Title}</Card.Title>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
