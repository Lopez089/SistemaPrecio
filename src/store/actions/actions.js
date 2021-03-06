import { DECREASE, INCREASE } from "../../store/constants/constants";

export const actionIncrease = (id, idService, count, priceHour) => {
  return {
    type: INCREASE,
    id,
    idService,
    count,
    priceHour,
  };
};

export const actionDecrease = (id, idService, count, priceService, price) => {
  return {
    type: DECREASE,
    id,
    idService,
    count,
    priceService,
    priceHour: price,
  };
};
