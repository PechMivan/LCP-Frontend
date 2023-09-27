

export default function IndicationsComponent({estudio, index, usuario}){

    return(
        <>
<button type="button" data-bs-toggle="modal" data-bs-target= {`#exampleModalInfo${index}`} data-bs-whatever="@getbootstrap" className={`btn btn-primary ${usuario === "user" ? "d-block" :"d-none"}`}>
        <i className="bi bi-info me-1"></i>
        indicaciones
      </button>

      <div className="modal fade" id={`exampleModalInfo${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h3 className="modal-title fs-5" id={`exampleModalLabel${index}`} >{estudio}</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            <div className="modal-body">

            <div className="row content-info">
              <div className="row d-flex justify-content-around">
                <div className="col-6">
                  <h3>Indicaciones</h3>
                </div>
                <div className="col-6">
                  <h3 className="bi bi-clock-history text-center">
                    {" "}
                    1 - 2 días
                  </h3>
                </div>
              </div>
              <div className="row d-flex justify-content-around m-0 p-4">
                <ul className="my-3">
                  <li>
                    Al agendar tu cita, asegurarás tu lugar en la fecha elegida.
                  </li>
                  <li>
                    Si el paciente es menor de edad, deberá acudir con un
                    adulto; padre, madre o tutor.
                  </li>
                  <li>Evitar tomar alcohol o cualquier sustancia similar.</li>
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