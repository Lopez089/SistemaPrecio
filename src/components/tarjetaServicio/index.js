import React from "react";
import { connect } from "react-redux";
import "./styles.css";
const TarjetaServicios = (props) => {
  const { nameService, count, idService } = props.data;

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-2">
        <p className="w-50  mb-0 ">{nameService}</p>
        <div className="w-50 d-flex flex-column">
          <div className=" justify-content-around d-flex flex-row align-items-center">
            <p
              className="mb-0 h5 font-weight-light text-info cursor"
              onClick={() => props.Aumentar(props.id, idService, count)}
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
                onClick={() =>
                  props.Reducir(
                    props.id,
                    idService,
                    count,
                    props.priceService,
                    props.price
                  )
                }
              >
                -
              </p>
            )}
          </div>
          <div>
            <p className="text-muted mb-0 text-center">
              <small>{props.price} €/h</small>
            </p>
          </div>
        </div>
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

export default connect(null, mapDispatchToProps)(TarjetaServicios);
