const reducerincrease = (state, action) => {
  return {
    ...state,
    servicePackages: state.servicePackages.map((servicepackage) =>
      servicepackage.id === action.id
        ? {
            ...servicepackage,
            namePackages: "PERSONALIZED",

            Service: servicepackage.Service.map((service) =>
              service.idService === action.idService
                ? {
                    ...service,
                    count: service.count + 1,
                    priceTotal: service.count * service.priceHour,
                  }
                : service
            ),
            price: servicepackage.Service.reduce((a, b) => a + b.priceTotal, 0),
          }
        : servicepackage
    ),
  };
};

export default reducerincrease;
