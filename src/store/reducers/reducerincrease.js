const reducerincrease = (state, action) => {
  return {
    ...state,
    servicePackages: state.servicePackages.map((servicepackage) =>
      servicepackage.id === action.id
        ? {
            ...servicepackage,
            namePackages: "PERSONALIZED",
            price: servicepackage.Service.reduce(
              (acumulador, valorActual, index, array) =>
                acumulador + valorActual.priceTotal,
              0
            ),
            Service: servicepackage.Service.map((service) =>
              service.idService === action.idService
                ? {
                    ...service,
                    count: service.count + 1,
                    priceTotal: (service.count + 1) * service.priceHour,
                  }
                : service
            ),
          }
        : servicepackage
    ),
  };
};

export default reducerincrease;
