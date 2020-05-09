const reducerdecrease = (state, action) => {
  return {
    ...state,
    servicePackages: state.servicePackages.map((servicePackage) =>
      servicePackage.id === action.id
        ? {
            ...servicePackage,
            namePackages: "PERSONALIZED",
            Service: servicePackage.Service.map((service) =>
              service.idService === action.idService
                ? {
                    ...service,
                    count: service.count - 1,
                    priceTotal: (service.count - 1) * service.priceHour,
                  }
                : service
            ),
            price: servicePackage.Service.reduce(
              (acomulado, actual) => acomulado + actual.priceTotal,
              -action.priceHour
            ),
          }
        : servicePackage
    ),
  };
};

export default reducerdecrease;
