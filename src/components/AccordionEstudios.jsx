/* eslint-disable react/prop-types */
export default function AccordionEstudios({index, categoria}) {
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
            <div className="accordion-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Estudio</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody>
                {
                  categoria.estudios.map( (estudio, key) => (
                    <tr key={key}>
                      <th>{key+1}</th>
                      <td>{estudio.nombre}</td>
                      <td>${estudio.precio}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
