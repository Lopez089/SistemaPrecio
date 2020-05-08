const reducerdecrease = (state, action) => {
  return {
    ...state,
    servicePackages: state.servicePackages.map((object) =>
      object.id === action.id
        ? {
            ...object,
            namePackages: "PERSONALIZED",
            price: action.priceService - action.priceHour,
            Service: object.Service.map((prop) =>
              prop.idService === action.idService
                ? {
                    ...prop,
                    count: prop.count === 0 ? 0 : prop.count - 1,
                  }
                : prop
            ),
          }
        : object
    ),
  };
};

export default reducerdecrease;
