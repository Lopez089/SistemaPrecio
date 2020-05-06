import React from "react";
import { connect } from "react-redux";
import Card from "../card/index";
const WrapCard = ({ price }) => {
  return (
    <React.Fragment>
      {price.map((p) => (
        <Card key={p.id} package={p} />
      ))}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  price: state.servicePackages,
});

export default connect(mapStateToProps, null)(WrapCard);
