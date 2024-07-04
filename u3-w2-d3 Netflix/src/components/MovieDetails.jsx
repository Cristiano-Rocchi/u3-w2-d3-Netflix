import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const resp = await fetch(
          `http://www.omdbapi.com/?apikey=47ad4fc&i=${imdbID}`
        );
        if (resp.ok) {
          const data = await resp.json();
          setMovie(data);
        } else {
          throw new Error("Error fetch movie-details");
        }
      } catch (e) {
        console.error("Error!", e);
      }
    };

    const fetchComments = async () => {
      try {
        const resp = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${imdbID}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE4YjdjMjM5YzAwMTUyZjRiNDQiLCJpYXQiOjE3MjAxMDM4OTAsImV4cCI6MTcyMTMxMzQ5MH0.PsAuwd3FjfG7zOvfmSLAB8WoMxzcSPmTcpheJAU2Bmo",
            },
          }
        );
        if (resp.ok) {
          const data = await resp.json();
          setComments(data);
        } else {
          console.log("errore fetch commenti");
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchDetails();
    fetchComments();
  }, [imdbID]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {movie && (
        <Card style={{ width: "18rem" }} className="bg-transparent text-white">
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title className="text-black">{movie.Title}</Card.Title>
            <Card.Text>
              {comments.map((c) => (
                <div className="text-black" key={c._id}>
                  {c.comment}
                </div>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
