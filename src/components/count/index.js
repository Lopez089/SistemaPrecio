import React from "react";
import { connect } from "react-redux";
import handleCount from "./utils/handleCount";
import "./styles.css";

const Count = (props) => {
  const { Aumentar, Reducir, id, idService, count, price, priceHour } = props;
  return (
    <>
      <div className=" justify-content-around d-flex flex-row align-items-center">
        {handleCount(Aumentar, Reducir, id, idService, count, price, priceHour)}
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  Aumentar(id, idService, count) {
    dispatch({
      type: "AUMENTAR",
      id,
      idService,
      count,
    });
  },
  Reducir(id, idService, count, priceService, price) {
    dispatch({
      type: "REDUCIR",
      id,
      idService,
      count,
      priceService,
      priceHour: price,
    });
  },
});
export default connect(null, mapDispatchToProps)(Count);
