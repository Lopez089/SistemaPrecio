/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TarjetaServicios from "../tarjetaServicio/index";
import Modal from "../modal/index";

const Tarjetas = (props) => {
  const {
    namePackages,
    price,
    priceHour,
    Service,
    info,
    button,
    id,
  } = props.package;

  return (
    <article
      className={
        namePackages === "PREMIUM"
          ? "rounded shadow card pt-5 pb-5 col-md-6 col-lg-3 col-9 "
          : "rounded shadow card m-4 pt-5 pb-5 col-md-6 col-lg-3 col-9 mb-5"
      }
    >
      <h6 className="text-center">{namePackages}</h6>
      <div className="d-flex justify-content-center mt-4">
        <p className="display-2 mb-0">
          <strong>{price}</strong>
        </p>
        <div className="d-flex flex-column justify-content-start">
          <p>€</p>
        </div>
      </div>
      <div className="container mt-3">
        {Service.map((s) => (
          <TarjetaServicios
            key={s.idService}
            data={s}
            price={priceHour}
            id={id}
            priceService={price}
          />
        ))}
      </div>
      <div className="mt-4 text-center">
        <a href="#" className="card-link">
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
      <Modal />
    </article>
  );
};

export default Tarjetas;
