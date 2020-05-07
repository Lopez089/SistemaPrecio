import React from "react";

const CardFooterService = (props) => {
  const { info, button } = props;
  return (
    <React.Fragment>
      <div className="mt-4 text-center">
        <a href="/#" className="card-link">
          {info.text}
        </a>
      </div>
      <button
        data-toggle="modal"
        data-target="#exampleModal"
        type="button"
        className="rounded shadow btn btn-primary mt-4"
      >
        {button.text}
        <i className="fas fa-angle-right ml-2"></i>
      </button>
    </React.Fragment>
  );
};

export default CardFooterService;
