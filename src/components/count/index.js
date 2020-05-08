import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import handleCount from "./utils/handleCount";
import { actionIncrease, actionDecrease } from "../../store/actions/actions";
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
    dispatch(actionIncrease(id, idService, count));
  },
  decrease(id, idService, count, priceService, price) {
    dispatch(actionDecrease(id, idService, count, priceService, price));
  },
});

Count.propTypes = {
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  idService: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceHour: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(Count);
