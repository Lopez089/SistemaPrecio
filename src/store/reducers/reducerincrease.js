const reducerincrease = (state, action) => {
  return {
    ...state,
    servicePackages: state.servicePackages.map((servicepackage) =>
      servicepackage.id === action.id
        ? {
            ...servicepackage,
            namePackages: "PERSONALIZED",
            ...servicepackage,
            Service: servicepackage.Service.map((service) =>
              service.idService === action.idService
                ? {
                    ...service,
                    count: service.count + 1,
                    priceTotal: (service.count + 1) * service.priceHour,
                  }
                : service
            ),
            price: servicepackage.Service.reduce(
              (acomulado, actual) => acomulado + actual.priceTotal,
              action.priceHour
            ),
          }
        : servicepackage
    ),
  };
};

export default reducerincrease;
