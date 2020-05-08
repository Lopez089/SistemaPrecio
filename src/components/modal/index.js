import React from "react";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {`Servicio `}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="far fa-window-close"></i>
              </button>
            </div>

            <div className="modal-body  m-sm-5">
              <table className="table table-bordered  table-hover text-center table-responsive-sm table-responsive-md">
                <thead className="text-muted h6">
                  <tr>
                    <th scope="col">
                      <i className="fas fa-hand-holding mr-3"></i> Servicio
                    </th>
                    <th scope="col">
                      <i className="fas fa-hourglass-half mr-3"></i>
                      Horas
                    </th>
                    <th scope="col">
                      <i className="fas fa-hand-holding-usd mr-3"></i>
                      Precio/Servicio
                    </th>
                  </tr>
                </thead>
                <tbody className="table-hover">
                  <tr>
                    <th scope="row">Dj</th>
                    <td>8</td>
                    <td>330€</td>
                  </tr>
                  <tr>
                    <th scope="row">Fotografia</th>
                    <td>4</td>
                    <td>100€</td>
                  </tr>
                  <tr>
                    <th scope="row">Animacion</th>
                    <td>2</td>
                    <td>500€</td>
                  </tr>
                  <tr className="h5">
                    <th
                      className="text-center
					"
                      scope="row"
                      colSpan="2"
                    >
                      Total
                    </th>
                    <td className="text-danger">1500€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                <i className="far fa-credit-card mr-3"></i>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
