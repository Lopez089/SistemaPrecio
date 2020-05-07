import React from "react";
import { connect } from "react-redux";
import "./styles.css";
const Count = (props) => {
  const { Aumentar, Reducir, id, idService, count, price, priceHour } = props;
  return (
    <React.Fragment>
      <div className=" justify-content-around d-flex flex-row align-items-center">
        <p
          className="mb-0 h5 font-weight-light text-info cursor"
          onClick={() => Aumentar(id, idService, count)}
        >
          +
        </p>
        <p className="mb-0 h3 font-weight-normal">
          {count}
          <span className="h6">h</span>
        </p>

        {count === 0 ? (
          <p className="mb-0 h5 font-weight-light text-danger cursor">-</p>
        ) : (
          <p
            className="mb-0 h5 font-weight-light text-danger cursor"
            onClick={() => Reducir(id, idService, count, price, priceHour)}
          >
            -
          </p>
        )}
      </div>
    </React.Fragment>
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
