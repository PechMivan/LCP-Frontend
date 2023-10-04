import ResultsPageHolder from '/assets/img/resultados/ResultsPageHolder.png'

export default function AdminPage() {
    return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-4">
          <div className=" col-md-10 container-results">
              <div className="text-center">
                  <h3 className="mb-5">Subir resultados</h3>
                      <div className="d-flex justify-content-center align-items-center">
                          <input
                          className="form-control w-50" 
                              placeholder="ID de la cita"
                              type="text"
                              id="estudioID"
                              style={{ marginRight: '20px',}}
                              // value={estudioID}
                          />
                          
                          <button type="submit" className="btn btn-green">
                              Consultar
                          </button>
                      </div>
              </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1 mb-4">
            <div className="col-md-10 container-download">
                <div className="text-center">
                    <img src={ResultsPageHolder} />
                </div>
            </div>
        </div>
    </div>
    )
  }