import React from "react";
import CardHeaderService from "../cardHeaderService/index";
import CardBodyService from "../cardBodyService/index";
import CardFooterService from "../cardFooterService/index";
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

  console.log(props);
  return (
    <React.Fragment>
      <div
        className={namePackages === "PREMIUM" ? " pt-5 pb-5  " : "pt-5 pb-5 "}
      >
        <CardHeaderService namePackages={namePackages} price={price} />
        <div className="container mt-3">
          {Service.map((s) => (
            <CardBodyService
              key={s.idService}
              data={s}
              price={priceHour}
              id={id}
              priceService={price}
            />
          ))}
        </div>
        <CardFooterService info={info} button={button} />
        <Modal />
      </div>
    </React.Fragment>
  );
};

export default WrapContentService;
