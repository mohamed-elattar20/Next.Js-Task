const Item = ({ region }) => {
  return (
    <>
      <div className="card  border-0 rounded-3">
        <div className="h-50">
          <img
            src={region?.images[0]?.url}
            style={{ height: "200px" }}
            className="card-img-top rounded-3  d-block  object-fit-cover"
            alt=""
          />
        </div>
        <div className="card-body ">
          {region.name && (
            <p className="card-text text-center">{region.name}</p>
          )}
          {region.type && (
            <>
              <div className="d-flex justify-content-between align-items-center">
                <p
                  style={{ maxHeight: "100px", overflow: "hidden" }}
                  className="card-text text-center text-muted m-0"
                >
                  {region.type}
                  <span>
                    {region.description && ` - ${region.description}`}
                  </span>
                </p>
                <p className="card-text text-center fs-5 ">
                  {region.current_price} LE{" "}
                  <span className="text-muted fs-6 ">/day</span>{" "}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Item;
