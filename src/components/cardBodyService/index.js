import React from "react";
import Count from "../count/index";
import PropTypes from "prop-types";

const CardBodyService = (props) => {
  const { nameService, count, idService, priceHour } = props.service;
  const { price, id } = props;

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

CardBodyService.propTypes = {
  service: PropTypes.shape({
    nameService: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    idService: PropTypes.string.isRequired,
    priceHour: PropTypes.number.isRequired,
  }).isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardBodyService;
