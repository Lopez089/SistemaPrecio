import React from "react";
import { connect } from "react-redux";
import Card from "../card/index";

const WrapCards = (props) => {
  const { servicesPackages } = props;

  return (
    <>
      {servicesPackages.map((servicePackage) => (
        <Card key={servicePackage.id} servicePackage={servicePackage} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  servicesPackages: state.servicePackages,
});

export default connect(mapStateToProps, null)(WrapCards);
