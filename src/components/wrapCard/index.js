import React from "react";
import { connect } from "react-redux";
import Card from "../card/index";
import WrapContentService from "../wrapContentService/index";
import PropTypes from "prop-types";

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

WrapCards.propTypes = {
  servicesPackages: PropTypes.arrayOf(
    PropTypes.shape({
      Service: PropTypes.arrayOf(
        PropTypes.shape({
          idService: PropTypes.string.isRequired,
          nameService: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
        })
      ).isRequired,
      button: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
      id: PropTypes.string.isRequired,
      info: PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
      namePackages: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceHour: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default connect(mapStateToProps, null)(WrapCards);
