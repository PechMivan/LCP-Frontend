export default function IndicationsComponent({ estudio, index, usuario, indications, tiempo }) {
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
        <i class="bi bi-eye-fill"> Ver</i>
         
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
                    
                  </div>
                  <div className="col-6">
                   
                  </div>
                </div>
                <div className="row d-flex justify-content-around m-0 p-4">
                
                 <h4 className="bi bi-clock-history text-center"> Tiempo de espera:</h4><p>{tiempo}</p> 
                 <h4>Indicaciones:</h4><p>{indications}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
