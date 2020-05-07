import React from "react";

const Section = (props) => {
  const { title } = props;

  return (
    <>
      <div className="container pb-5">
        <p className="h2 text-center m-5">{title}</p>
        <div className="d-flex justify-content-around align-items-center flex-wrap">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Section;
