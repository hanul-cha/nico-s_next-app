import { useEffect, useState } from "react";
import GlobalTitle from "../components/GlobalTitle";

const API_KEY = "6015bc027aef1e97c5ae0ffbd8d1b85b"

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      ).json();
      setMovies(results)
    })()//익명 함수(즉시실행함수) : 즉시실행이 필요할때 사용
    
  }, [])
  console.log(movies)
  return (
    <div>
      <GlobalTitle title="Home" />
      {movies.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
