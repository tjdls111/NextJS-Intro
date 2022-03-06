import { useEffect, useState } from "react";
import Head from "next/head";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Seo title="Home" />
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
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

export async function getServerSideProps() {
  // 이름 꼭 이거여야 함
  // 이 코드는 꼭 서버에서 돌아가게 됨.
  // ( 서버 사이드 렌더링- 데이터 받아온 후에 모든 화면이 보여지게 됨 - 나올 때까지 유저가 아무것도 못 봄)
  // ex- api key 가 클라이언트에서 안 보임
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: { results },
  };
}
