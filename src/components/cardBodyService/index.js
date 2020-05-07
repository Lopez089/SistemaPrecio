import React from "react";
import Count from "../count/index";

const CardBodyService = (props) => {
  const { nameService, count, idService } = props.service;
  const { price, id, priceHour } = props;

  return (
    <>
      <div className="d-flex align-items-center border-bottom pb-2 pt-2">
        <p className="w-50  mb-0 ">{nameService}</p>
        <div className="w-50 d-flex flex-column">
          <div>
            <Count
              id={id}
              idService={idService}
              count={count}
              price={price}
              priceHour={priceHour}
            />
            <p className="text-muted mb-0 text-center">
              <small>{priceHour} €/h</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBodyService;