import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <article className="rounded shadow card col-md-6 col-lg-3 col-9 m-4 h-25">
      {props.children}
    </article>
  );
};

Card.propTypes = {
  props: PropTypes.elementType,
};

export default Card;
