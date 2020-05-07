import React from "react";
import HandelCountDefault from "./handleCountDefaul";
import HandelCountMin from "./handleCountMin";
import HandelCountMax from "./handleCountMax";

const handlecount = (
  increase,
  decrease,
  id,
  idService,
  count,
  price,
  priceHour
) => {
  return (
    <>
      {count === 0 ? (
        <HandelCountMin
          increase={increase}
          id={id}
          idService={idService}
          count={count}
        />
      ) : count >= 8 ? (
        <HandelCountMax
          decrease={decrease}
          id={id}
          idService={idService}
          count={count}
          price={price}
          priceHour={priceHour}
        />
      ) : (
        <HandelCountDefault
          increase={increase}
          decrease={decrease}
          id={id}
          idService={idService}
          count={count}
          price={price}
          priceHour={priceHour}
        />
      )}
    </>
  );
};

export default handlecount;
