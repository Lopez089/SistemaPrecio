import React from "react";

const CardFooterService = (props) => {
  const { info, button } = props;
  return (
    <>
      <div className="mt-4 text-center">
        <a href={info.url} className="card-link">
          {info.text}
        </a>
      </div>
      <button
        data-toggle="modal"
        data-target="#exampleModal"
        type="button"
        className="rounded shadow btn btn-primary mt-4 w-100"
      >
        {button.text}
        <i className="fas fa-angle-right ml-2"></i>
      </button>
    </>
  );
};

export default CardFooterService;
