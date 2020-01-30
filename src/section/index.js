import React from "react";
import Tarjetas from "../tarjetas/index";
import { connect } from "react-redux";

const Section = ({ price, title }) => {
  return (
    <React.Fragment>
      <div className="container pb-5">
        <p className="h2 text-center m-5">{title}</p>
        <div className="d-flex justify-content-around flex-wrap">
          {price.map(p => (
            <Tarjetas package={p} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  price: state.servicePackages,
  title: state.Title
});

export default connect(mapStateToProps, {})(Section);
