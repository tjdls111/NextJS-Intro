import { useEffect, useState } from "react";
import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
      //   console.log(results);
    })();
  }, []);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.original_title}</h3>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
        </div>
      ))}
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}
