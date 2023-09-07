import { Link } from "react-router-dom";

export default function AgendarCita() {
  return (
    
    
    <>
    <div className="container-cita">
        <div className="row d-flex justify-content-start align-content-center mx-5 ">
            <div className="col-12 col-lg-6 order-lg-2 p-5 bg-blur my-5">
                <h1>Agenda tu Cita</h1>
                <form className="row">

                        <label htmlFor="inputAnalisis" className="col-12 d-block col-form-label" >
                            Tipo de análisis o paquete:
                        </label>
                        <div className="col-sm-12">
                            <input type="analisis" className="form-control" id="inputAnalisis" required />
                        </div>
                    <div className="mb-3 col-12 col-lg-6">
                    <label htmlFor="time" className="col-12 col-form-label" >
                            Hora:
                        </label>
                        <div className="col-12">
                            <input type="time" className="form-control" id="time" required/>
                        </div>
                    </div>
                    
                    <div className="mb-3 col-12 col-lg-6">
                    
                    <label htmlFor="date" className="col-12 col-form-label" >
                            Fecha:
                        </label>
                        <div className="col-12">
                            <input type="date" className="form-control" id="date" required/>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="staticEmail" className="col-12 col-form-label">
                            Correo electrónico:
                        </label>
                        <div className="col-12">
                            <input type="email" className="form-control" id="staticEmail" required/>
                        </div>
                    </div>                            


                    <div className="col-12 mt-3 text-center">
                        <input type="submit" value="Confirmar orden" className="btn-green"/>
                    </div>
                    
                </form>
                
            </div>

        </div>
    </div>
</>


  )
}
