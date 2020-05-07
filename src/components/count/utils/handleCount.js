import React from "react";

const handlecount = (
  Aumentar,
  Reducir,
  id,
  idService,
  count,
  price,
  priceHour
) => {
  return (
    <>
      <p
        className="mb-0 h5 font-weight-light text-info cursor"
        onClick={() => Aumentar(id, idService, count)}
      >
        +
      </p>
      <p className="mb-0 h3 font-weight-normal">
        {count}
        <span className="h6">h</span>
      </p>
      {count === 0 ? (
        <p className="mb-0 h5 font-weight-light text-danger cursor">-</p>
      ) : (
        <p
          className="mb-0 h5 font-weight-light text-danger cursor"
          onClick={() => Reducir(id, idService, count, price, priceHour)}
        >
          -
        </p>
      )}
    </>
  );
};

export default handlecount;
