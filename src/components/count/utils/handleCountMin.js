import React from "react";

const HandelCountMin = (props) => {
  const { increase, id, idService, count, priceHour } = props;
  return (
    <>
      <p
        className="mb-0 h5 font-weight-light text-info pointer"
        onClick={() => increase(id, idService, count, priceHour)}
      >
        +
      </p>
      <p className="mb-0 h3 font-weight-normal">
        {count}
        <span className="h6">h</span>
      </p>
      <p className="mb-0 h5 font-weight-light text-muted desable">-</p>
    </>
  );
};

export default HandelCountMin;
