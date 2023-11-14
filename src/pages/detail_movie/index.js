import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./index.css";

function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          //api get details dari imdb
          `https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`, 
          {
            headers: {
              "x-rapidapi-host": "imdb8.p.rapidapi.com",
              'X-RapidAPI-Key': 'a5f96ef1eemsh2c606269fd1a64fp141afbjsn268a4a686b47',
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <div className="MovieDetail">
      <div className="row 1">
      <h2>{data.title}</h2>
      <p>Year Released: {data.year}</p>
      <p>Length of Film : {data.runningTimeInMinutes} minutes</p>
      <img src={data.image.url} alt={data.title} />
      </div>
      
      
        <div className="Row">
        <button className="home-btn">
        <Link to="/">Back to Home</Link>
        </button>
        </div>
    </div>
  );
}

export default MovieDetail;
