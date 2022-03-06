import { useRouter } from "next/router";
export default function Detail() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h3>{router.query.title || "Loading..."}</h3>
      <img src={`https://image.tmdb.org/t/p/w200/${router.query.img}`} />
    </div>
  );
}
