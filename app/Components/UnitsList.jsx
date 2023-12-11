import Item from "./Item";

const UnitsList = ({ UnitsObj }) => {
  return (
    <>
      {UnitsObj?.value?.units?.data.map((region) => (
        <div key={region.id} className="col-sm-6 col-md-3 col-lg-3">
          <Item region={region} />
        </div>
      ))}
    </>
  );
};

export default UnitsList;
