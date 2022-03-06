import { useRouter } from "next/router";
import Seo from "../../components/Seo";
export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h3>{title || "Loading..."}</h3>
      <img src={`https://image.tmdb.org/t/p/w200/${router.query.img}`} />
    </div>
  );
}

// seo 최적화, 사용자에게 로딩 안보여주고 싶으면
export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
