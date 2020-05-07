import React from "react";
import { connect } from "react-redux";
import Card from "../card/index";
import WrapContentService from "../wrapContentService/index";

const WrapCards = (props) => {
  const { servicesPackages } = props;

  return (
    <>
      {servicesPackages.map((servicePackage) => (
        <Card key={servicePackage.id}>
          <WrapContentService
            servicePackage={servicePackage}
          ></WrapContentService>
        </Card>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  servicesPackages: state.servicePackages,
});

export default connect(mapStateToProps, null)(WrapCards);
