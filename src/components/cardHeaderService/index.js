import React from "react";
import PropTypes from "prop-types";

const CardHeaderService = (props) => {
  const { namePackages, price } = props;

  return (
    <>
      <h6 className="text-center h5">{namePackages}</h6>
      <div className="d-flex justify-content-center mt-4">
        <p className="display-2 mb-0">
          <strong>{price}</strong>
        </p>
        <div className="d-flex flex-column justify-content-start">
          <p>€</p>
        </div>
      </div>
    </>
  );
};

CardHeaderService.propTypes = {
  namePackages: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardHeaderService;
