import "bootstrap/dist/css/bootstrap.css";

const BASE_URL = "https://api-stage.spotx.app/api/v1";

const getUiBuilders = async () => {
  const res = await fetch(`${BASE_URL}/ui-builders`);
  const data = await res.json();
  console.log(data);
  return data;
};

export default async function Home() {
  const u = await getUiBuilders();
  return <main></main>;
}
