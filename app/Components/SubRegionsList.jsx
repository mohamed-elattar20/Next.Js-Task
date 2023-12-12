import Item from "./Item";

const SubRegionsList = ({ subregionObj }) => {
  const subRegionsData = subregionObj?.value?.subregion?.data?.sub_regions;
  return (
    <>
      {subRegionsData.map((region) => (
        <div key={region.id} className="col-sm-6 col-md-3 col-lg-4">
          <Item region={region} />
        </div>
      ))}
    </>
  );
};

export default SubRegionsList;
