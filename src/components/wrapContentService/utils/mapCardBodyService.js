import React from "react";
import CardBodyService from "../../cardBodyService/index";

const mapCardBodyService = (services, priceHour, id, price) => {
  return services.map((service) => (
    <CardBodyService
      key={service.idService}
      service={service}
      price={price}
      id={id}
      priceHour={priceHour}
    />
  ));
};

export default mapCardBodyService;
