import "bootstrap/dist/css/bootstrap.css";

const BASE_URL = "https://api-stage.spotx.app/api/v1";

const getUiBuilders = async () => {
  const res = await fetch(`${BASE_URL}/ui-builders`);
  const data = await res.json();
  // console.log(data);
  return data;
};

const getRegions = async (regionContent) => {
  const res = await fetch(`${BASE_URL}/${regionContent}`);
  return res.json();
};
const getSubRegions = async (regionContent, regionFilters) => {
  const res = await fetch(
    `${BASE_URL}/${regionContent}/${regionFilters.region}`
  );
  console.log(`${BASE_URL}/regions/${regionFilters.region}`);
  return res.json();
};
const getUnits = async (unitsContent, unitsFilters) => {
  const res = await fetch(
    `${BASE_URL}/user/${unitsContent}?${new URLSearchParams(unitsFilters)}`
  );

  return res.json();
};

export default async function Home() {
  const res = await getUiBuilders();
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
