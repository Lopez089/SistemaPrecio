import React from "react";
import { connect } from "react-redux";
import handleCount from "./utils/handleCount";
import "./styles.css";

const Count = (props) => {
  const { increase, decrease, id, idService, count, price, priceHour } = props;
  return (
    <>
      <div className=" justify-content-around d-flex flex-row align-items-center">
        {handleCount(
          increase,
          decrease,
          id,
          idService,
          count,
          price,
          priceHour
        )}
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  increase(id, idService, count) {
    dispatch({
      type: "AUMENTAR",
      id,
      idService,
      count,
    });
  },
  decrease(id, idService, count, priceService, price) {
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
