import React from "react";

const CardHeaderService = (props) => {
  const { namePackages, price } = props;
  return (
    <React.Fragment>
      <h6 className="text-center">{namePackages}</h6>
      <div className="d-flex justify-content-center mt-4">
        <p className="display-2 mb-0">
          <strong>{price}</strong>
        </p>
        <div className="d-flex flex-column justify-content-start">
          <p>€</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardHeaderService;
