export default function IndicationsComponent({ estudio, index, usuario, descripcion }) {
  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModalInfo${index}`}
        data-bs-whatever="@getbootstrap"
        className={`btn btn-info2  ${
          usuario === "admin" ? "d-none" : "d-block"
        }`}
      >
        <i className="bi bi-info me-1"></i>
         Ver 
      </button>

      <div
        className="modal fade"
        id={`exampleModalInfo${index}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5" id={`exampleModalLabel${index}`}>
                {estudio}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="row content">
                <div className="row d-flex justify-content-around">
                  <div className="col-6">
                    <h3>Indicaciones</h3>
                  </div>
                  <div className="col-6">
                    <h3 className="bi bi-clock-history text-center">
                      {" "}
                      1 - 2 días {descripcion}
                    </h3>
                  </div>
                </div>
                <div className="row d-flex justify-content-around m-0 p-4">
                  <ul className="my-3">
                    <li>
                      {descripcion}
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
