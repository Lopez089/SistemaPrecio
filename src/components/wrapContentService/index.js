import React from "react";
import PropTypes from "prop-types";
import CardHeaderService from "../cardHeaderService/index";
import CardFooterService from "../cardFooterService/index";
import mapCardBodyService from "./utils/mapCardBodyService";

const WrapContentService = (props) => {
  const {
    namePackages,
    price,
    //priceHour,
    Service,
    info,
    button,
    id,
  } = props.servicePackage;
  return (
    <>
      <div className="pt-5 pb-5">
        <CardHeaderService namePackages={namePackages} price={price} />
        <div className="container mt-3">
          {mapCardBodyService(Service, id, price)}
        </div>

        <CardFooterService info={info} button={button} />
      </div>
    </>
  );
};

WrapContentService.propTypes = {
  servicePackage: PropTypes.shape({
    Service: PropTypes.arrayOf(
      PropTypes.shape({
        idService: PropTypes.string.isRequired,
        nameService: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      })
    ).isRequired,
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    info: PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    namePackages: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceHour: PropTypes.number.isRequired,
  }).isRequired,
};
export default WrapContentService;
