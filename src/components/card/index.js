import React from "react";

const Card = (props) => {
  return (
    <article className="rounded shadow card col-md-6 col-lg-3 col-9 m-4 h-25">
      {props.children}
    </article>
  );
};

export default Card;
