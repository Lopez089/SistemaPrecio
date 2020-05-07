import React from "react";
import CardBodyService from "../../cardBodyService/index";

const mapCardBodyService = (Services, priceHour, id, price) => {
  return Services.map((service) => (
    <CardBodyService
      key={service.idService}
      data={service}
      price={priceHour}
      id={id}
      priceService={price}
    />
  ));
};

export default mapCardBodyService;
