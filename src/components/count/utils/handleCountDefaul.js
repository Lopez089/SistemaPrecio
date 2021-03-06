import React from "react";

const CountDefault = (props) => {
  const { increase, decrease, id, idService, count, price, priceHour } = props;
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
      <p
        className="mb-0 h5 font-weight-light text-danger pointer"
        onClick={() => decrease(id, idService, count, price, priceHour)}
      >
        -
      </p>
    </>
  );
};

export default CountDefault;
