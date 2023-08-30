/* eslint-disable react/prop-types */

export default function AccordionEstudios({index, categoria, getData, usuario}) {
  const eliminar = (categoria, analisis) => {
    console.log(categoria, analisis);
    getData();
  } 
  return (
    <>
      <div className="accordion accordion-flush col-12 col-md-6" id={`accordionFlushExample${index}`} >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle={`collapse`} data-bs-target={`#flush-collapseOne${index}`} aria-expanded="false" aria-controls={`#flush-collapseOne${index}`} >
              <img src={categoria.icono} alt={`Icono especialidad ${categoria.especialidad}`} style={{width: "50px", marginRight:"10px"}}/>
              {categoria.especialidad}
            </button>
          </h2>
          <div id={`flush-collapseOne${index}`} className="accordion-collapse collapse" data-bs-parent={`#accordionFlushExample${index}`}>
            <div className="accordion-body p-0 pb-2">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th className="px-0" scope="col">Estudio</th>
                  <th scope="col" className="text-center">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  categoria.estudios.map( (estudio, key) => (
                    <tr key={key}>
                      <th>{key+1}</th>
                      <td className="px-0">{estudio.nombre}</td>
                      <td align="center">
                        <button className={`btn btn-danger ${usuario === "admin" ? "d-block" :"d-none"}`} onClick={() => eliminar (categoria.especialidad, estudio.nombre)}>
                          <i className="bi bi-trash"></i>
                        </button>
                        <button className={`btn btn-info ${usuario === "admin" ? "d-none" :"d-block"}`} onClick={() => eliminar (categoria.especialidad, estudio.nombre)}>
                          Ver
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
              </table>
              <button type="button" data-bs-toggle="modal" data-bs-target= {`#exampleModal${index}`} data-bs-whatever="@getbootstrap" className={`btn btn-primary ${usuario === "admin" ? "d-block" :"d-none"}`}>
                <i className="bi bi-plus-circle me-1"></i>
                Crear analisis
              </button>

              <div className="modal fade" id={`exampleModal${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title fs-5" id={`exampleModalLabel${index}`} >{categoria.especialidad}</h3>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor={`recipient-name${index}`} className="col-form-label">Nombre:</label>
                          <input type="text" className="form-control" id= {`recipient-name${index}`}/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`message-text${index}`} className="col-form-label">Descripción:</label>
                          <textarea className="form-control" id= {`message-text${index}`}></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
