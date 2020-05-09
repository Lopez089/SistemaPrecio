const reducerPriceTotal = (state, action) => {
  return {
    ...state,
    servicePackages: state.servicePackages.map((servicepackage) =>
      servicepackage.id === action.id
        ? {
            ...servicepackage,
            price: servicepackage.Service.reduce(
              (acumulador, valorActual) => acumulador + valorActual.priceTotal,
              0
            ),
          }
        : servicepackage
    ),
  };
};

export default reducerPriceTotal;
