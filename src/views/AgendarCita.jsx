import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; 


export default function AgendarCita() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        getValues
      } = useForm();
    
      const handleButton = (e) => {
        e.preventDefault();
      };


  return (
    <>
    <div className="container-cita">
        <div className="row d-flex justify-content-start align-content-center mx-5 ">
            <div className="col-12 col-lg-6 order-lg-2 p-5 bg-blur my-5">
                <h1>Agenda tu Cita</h1>
                <form onSubmit={handleSubmit((d) => console.log(d))} className="row">

                        {/* INPUT ANALISIS */}
                        <label htmlFor="analysis" className="col-12 d-block col-form-label" >
                            Tipo de análisis o paquete:
                        </label>
                        <div className="col-sm-12">
                            <input type="text" className="form-control" id="analysis" {...register("analysis", {
                      required: true,
                      validate: {
                        minLength: (v) => v.length >= 2,
                        matchPattern: (v) => /^[a-zA-Z]+$/.test(v),
                      },
                    })}/>
                        </div>


                    {/* INPUT HORA */}
                    <div className="mb-3 col-12 col-lg-6">
                    <label htmlFor="time" className="col-12 col-form-label" >
                            Hora:
                        </label>
                        <div className="col-12">
                            <input type="time" className="form-control" id="time" {...register("time", {
                      required: true
                      
                    })} />
                    {errors.name?.type === "required" && (
                      <small className="text-danger">Hora obligatoria</small>
                    )}
                        </div>
                    </div>
                    
                    {/* INPUT FECHA */}
                    <div className="mb-3 col-12 col-lg-6">
                <label
                  htmlFor="date"
                  className="col-12 col-form-label"
                >
                  Fecha de nacimiento:
                </label>
                <div className="col-12">
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    max={new Date().toJSON().slice(0, 10)}
                    {...register("date", {
                        required: true,
                    })}
                  />
                    {errors.birthdate?.type === "required" && (
                    <small className="text-danger">Fecha es obligatoria</small>
                    )}
                </div>
              </div>

                    {/* INPUT CORREO */}
                    <div className="mb-3">
                <label htmlFor="email" className="col-12 col-form-label">
                  Correo electrónico:
                </label>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    {...register("email", {
                        required: "Correo electrónico es obligatorio",
                        validate: {
                          maxLength: (v) =>
                            v.length <= 100 || "El correo electrónico no puede exceder los 100 caracteres",
                          matchPattern: (v) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                            "El correo electrónico debe ser una dirección válida",
                        },
                      })}
                      
                    
                  />
                   {errors.email?.message && (
                        <small className="text-danger">{errors.email.message}</small>
                         )}
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
