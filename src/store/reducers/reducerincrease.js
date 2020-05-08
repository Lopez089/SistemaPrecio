const reducerincrease = (state, action) => {
  return {
    ...state,
    servicePackages: state.servicePackages.map((object) =>
      object.id === action.id
        ? {
            ...object,
            namePackages: "PERSONALIZED",
            price: object.priceHour * 1 + object.price,
            Service: object.Service.map((prop) =>
              prop.idService === action.idService
                ? {
                    ...prop,
                    count: prop.count + 1,
                  }
                : prop
            ),
          }
        : object
    ),
  };
};

export default reducerincrease;
