import Item from "./Item";

const RegionsList = ({ regionsObj }) => {
  const regionsData = regionsObj?.value?.regions?.data;
  return (
    <>
      {regionsData.map((region) => (
        <div key={region.id} className="col-sm-6 col-md-3 col-lg-3">
          <Item region={region} />
        </div>
      ))}
    </>
  );
};

export default RegionsList;
