/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Toaster, toast } from 'sonner';

export default function AccordionEstudios({index, categoria, getData, usuario}) {
  const [estudio, setEstudio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const eliminar = async (analisis) => {
    await fetch(`https://apilcp.onrender.com/api/estudios/${encodeURI(analisis)}`, { method: 'DELETE' });
    getData();
    toast.success('El estudio se ha eliminado.');
  } 
  const crear = async (categoria, nombre, descripcion) => {
    await fetch(`https://apilcp.onrender.com/api/estudios/${encodeURI(categoria)}`,
    { 
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({nombre, precio: "100"}) 
    });
    getData();
    setEstudio("");
    setDescripcion("");
    toast.success('El nuevo estudio se ha creado.');
  } 
  return (
    <>
    <Toaster richColors position="top-right"/>
      <div className="accordion accordion-flush col-12" id={`accordionFlushExample${index}`} >
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
                        <button className={`btn btn-danger ${usuario === "admin" ? "d-block" :"d-none"}`} onClick={() => eliminar (estudio.nombre)}>
                          <i className="bi bi-trash"></i>
                        </button>
                        <Link className={`btn btn-info ${usuario === "admin" ? "d-none" :"d-block"}`} to={`/estudio/${estudio.nombre}`}>Ver</Link>
                
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
                          <input type="text" className="form-control" id= {`recipient-name${index}`} onChange={event => setEstudio(event.target.value)} value={estudio}/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`message-text${index}`} className="col-form-label">Descripción:</label>
                          <textarea className="form-control" id= {`message-text${index}`} onChange={event => setDescripcion(event.target.value)} value={descripcion}></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => crear (categoria.especialidad, estudio, descripcion)}>Guardar</button>
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
