import { useState } from "react";
import { Toaster, toast } from 'sonner';

export default function CreateComponent({ categoria, getData, usuario, index}) {
  const [estudio, setEstudio] = useState("");
  const [indications, setIndications] = useState("");
  const [waitTime, setWaitTime] = useState("");

  const crear = async () => {
    await fetch(`https://lcp-backend.onrender.com/api/v1/studies`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( 
        {
          name: estudio,
          indications: indications,
          waitTime: waitTime,
          category: {
              categoryId: 1
          }
      
       })
    });

    setEstudio("");
    setIndications("");
    setWaitTime("");
    getData();
    toast.success('El nuevo estudio se ha creado.');
    
  }

    return(
        <>
        <button type="button" data-bs-toggle="modal" data-bs-target= {`#exampleModal${index}`} data-bs-whatever="@getbootstrap" className={`btn btn-primary ${usuario === "admin" ? "d-block" :"d-none"}`}>
        <i className="bi bi-plus-circle me-1"> Crear estudio</i>
        
      </button>

      <div className="modal fade" id={`exampleModal${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
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
                  <label htmlFor={`message-text${index}`} className="col-form-label">Indicaciones:</label>
                  <textarea className="form-control" id= {`message-text${index}`} onChange={event => setIndications(event.target.value)} value={indications}></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor={`message-text${index}`} className="col-form-label">Tiempo de espera:</label>
                  <textarea className="form-control" id= {`message-text${index}`} onChange={event => setWaitTime(event.target.value)} value={waitTime}></textarea>
                </div>

              </form>


            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => crear (categoria.especialidad, estudio, indications, waitTime)}>Guardar</button>
            </div>

          </div>
        </div>
      </div>
      </>
    );
}