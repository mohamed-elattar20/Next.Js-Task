//  Bootstrap
import "bootstrap/dist/css/bootstrap.css";
// Components
import RegionsList from "./Components/RegionsList";
import SubRegionsList from "./Components/SubRegionsList";
import UnitsList from "./Components/UnitsList";

const BASE_URL = "https://api-stage.spotx.app/api/v1";

const getUiBuilders = async () => {
  let newData;
  try {
    const res = await fetch(`${BASE_URL}/ui-builders`);
    const { data } = await res.json();
    // console.log(data);

    newData = data.map(async (obj) => {
      const res = await getDataFromUiBuilders(obj.content, obj.filters);
      return {
        [obj.content]: {
          ...res,
          title: obj.title,
          description: obj.description,
        },
      };
    });
  } catch (error) {
    console.log(error);
  }

  return newData;
};

//  *************************************************************
const getDataFromUiBuilders = async (content, filters) => {
  let url = `${BASE_URL}/${content}`;
  switch (content) {
    case "units":
      url = `${BASE_URL}/user/units`;
      break;
    case "subregion":
      url = `${BASE_URL}/regions`;
      break;
  }

  if ((content === "regions" || content === "subregion") && filters) {
    // console.log(filters);
    url = `${url}/${filters.region}`;
  } else {
    // console.log(filters);
    // console.log(new URLSearchParams(filters).toString());
    url = `${url}?${new URLSearchParams(filters)}`;
  }

  const res = await fetch(url);
  return res.json();
};
//  *************************************************************

export default async function Home() {
  const res = await getUiBuilders();

  const dataOfSections = await Promise.allSettled(res);

  // console.log(dataOfSections);
  const [regionsObj, leastUnitsObj, subregionObj, fiveGuestUnitsObj] =
    dataOfSections;
  // console.log(regionsObj);
  return (
    <>
      <div className="container">
        <div className="row g-3 my-3 ">
          <h2>{regionsObj?.value?.regions?.description}</h2>
          <RegionsList regionsObj={regionsObj} />
        </div>
        <div className="row g-3 my-3 ">
          <h2>{subregionObj?.value?.subregion?.description}</h2>
          <SubRegionsList subregionObj={subregionObj} />
        </div>
        <div className="row g-3 my-3 ">
          <h2>{leastUnitsObj?.value?.units?.title}</h2>
          <UnitsList UnitsObj={leastUnitsObj} />
        </div>
        <div className="row g-3 my-3 ">
          <h2>{fiveGuestUnitsObj?.value?.units?.description}</h2>
          <UnitsList UnitsObj={fiveGuestUnitsObj} />
        </div>
      </div>
    </>
  );
}
