import React from "react";
import CardHeaderService from "../cardHeaderService/index";
import CardFooterService from "../cardFooterService/index";
import mapCardBodyService from "./utils/mapCardBodyService";
import Modal from "../modal/index";

const WrapContentService = (props) => {
  const {
    namePackages,
    price,
    priceHour,
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
          {mapCardBodyService(Service, priceHour, id, price)}
        </div>
        <CardFooterService info={info} button={button} />
        <Modal />
      </div>
    </>
  );
};

export default WrapContentService;
