import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import { useLocalStorage } from "@uidotdev/usehooks";
import { useParams } from "react-router-dom";

export default function AgendarCita() {
  const { estudio } = useParams();
  const [user] = useLocalStorage('user', null);
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  useEffect(() => {
    if(isChecked){
      setValue("name", user.name);
      setValue("lastNameP", user.lastNameP);
      setValue("lastNameM", user.lastNameM);
      setValue("birthdate", user.birthdate);
      setValue("phoneNumber", user.phoneNumber);
      setValue("email", user.email);
    }else{
      setValue("name", "");
      setValue("lastNameP", "");
      setValue("lastNameM", "");
      setValue("birthdate", "");
      setValue("phoneNumber", "");
      setValue("email", "");
    }
  }, [isChecked]);

  useEffect(() => {
    setValue("analysis",estudio);
  }, [])

  const crearCita = (d) => {
    console.log(d);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>
    <div className="container-cita">
      <div className="row m-0 p-3">
        <div className="col-12 col-lg-6 order-lg-2 py-5 bg-blur my-5">
          <h1 className="text-center">Agenda tu Cita</h1>
          <form onSubmit={handleSubmit((d) => crearCita(d))} className="row">
            {
              user && 
              <div className="col-sm-12 d-flex align-items-center gap-2">
                <label htmlFor="analysis" className="col-form-label">
                  El estudio es para mi:
                </label>
                <input type="checkbox" onChange={handleOnChange} className="form-check-input" id="analysis" checked={isChecked} />
              </div>
            }
            <div className="col-sm-12">
              <label htmlFor="analysis" className="col-12 d-block col-form-label" >
                Análisis:
              </label>
              <input type="text" className="form-control" id="analysis" 
                {...register("analysis", {
                  required: "El analisis es obligatorio",
                  validate: {
                    minLength: (v) => v.length >= 2
                  }
                })}/>
              {errors.analysis?.message && ( <small className="text-danger">{errors.analysis.message}</small> )}
            </div>
            <div className="mb-3 col-12 col-md-6">
              <label htmlFor="time" className="col-12 col-form-label" >
                Hora:
              </label>
              <div className="col-12">
                <input type="time" className="form-control" id="time" {...register("time", {
                  required: "La hora es obligatorio",
                })} />
                {errors.time?.type === "required" && (<small className="text-danger">Hora obligatoria</small>)}
              </div>
            </div>
            <div className="mb-3 col-12 col-md-6">
              <label htmlFor="date" className="col-12 col-form-label" > Fecha: </label>
              <div className="col-12">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  min={new Date().toJSON().slice(0, 10)}
                  {...register("date", { required: true })}
                />
                {errors.date?.type === "required" && ( <small className="text-danger">Fecha es obligatoria</small> )}
              </div>
            </div>
            <div className="mb-3 col-12 col-md-6">
              <label htmlFor="name" className="col-12 d-block col-form-label">
                Nombre(s):
              </label>
              <div className="col-sm-12">
                <input type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  {...register("name", {
                    required: true,
                    validate: {
                      minLength: (v) => v.length >= 2,
                      matchPattern: (v) => /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(v),
                    },
                  })}
                />
                {errors.name?.type === "required" && (
                    <small className="text-danger">Nombre es obligatorio</small>
                  )}

                  {errors.name?.type === "minLength" && (
                    <small className="text-danger">Nombre mínimo 2 caracteres</small>
                  )}

                  {errors.name?.type === "matchPattern" && (
                    <small className="text-danger">Solo puede ingresar letras</small>
                  )}
              </div>
            </div>
            <div className="mb-3 col-12 col-md-6">
              <label htmlFor="lastNameP" className="col-12 col-form-label">
                Apellido Paterno:
              </label>
              <div className="col-12 ">
                <input
                  type="text"
                  className="form-control"
                  id="lastNameP"
                  name="lastNameP"
                  {...register("lastNameP", {
                    required: true,
                    validate: {
                      minLength: (v) => v.length >= 2,
                      matchPattern: (v) => /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(v),
                    },
                  })}
                />
                  {errors.lastNameP?.type === "required" && (
                    <small className="text-danger">Apellido Paterno es obligatorio</small>
                  )}

                  {errors.lastNameP?.type === "minLength" && (
                    <small className="text-danger">Apellido Paterno minimo 2 caracteres</small>
                  )}

                  {errors.lastNameP?.type === "matchPattern" && (
                    <small className="text-danger">Solo puede ingresar letras</small>
                  )}
              </div>
            </div>
            <div className="mb-3 col-12 col-md-6">
              <label htmlFor="lastNameM" className="col-12 col-form-label">
                Apellido Materno:
              </label>
              <div className="col-12 ">
                <input
                  type="text"
                  className="form-control"
                  id="lastNameM"
                  name="lastNameM"
                  {...register("lastNameM", {
                      required: true,
                      validate: {
                        minLength: (v) => v.length >= 2,
                        matchPattern: (v) => /^[a-zA-Z]+$/.test(v),
                      },
                    })}
                  />
                    {errors.lastNameM?.type === "required" && (
                      <small className="text-danger">Apellido Materno es obligatorio</small>
                    )}

                    {errors.lastNameM?.type === "minLength" && (
                      <small className="text-danger">Apellido Materno minimo 2 caracteres</small>
                    )}

                    {errors.lastNameM?.type === "matchPattern" && (
                      <small className="text-danger">Solo puede ingresar letras</small>
                    )}
              </div>
            </div>
            <div className="mb-3 col-12 col-md-6">
                <label
                  htmlFor="birthdate"
                  className="col-12 col-form-label"
                >
                  Fecha de nacimiento:
                </label>
                <div className="col-12">
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    name="birthdate"
                    max={new Date().toJSON().slice(0, 10)}
                    {...register("birthdate", {
                        required: true,
                    })}
                  />
                    {errors.birthdate?.type === "required" && (
                    <small className="text-danger">Fecha de nacimiento es obligatorio</small>
                    )}
                </div>
              </div>
            <div className="mb-3 col-12 col-md-6">
              <label htmlFor="phoneNumber" className="col-12 col-form-label">
                Teléfono Celular:
              </label>
              <div className="col-12">
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  maxLength={10}
                  {...register("phoneNumber", {
                      required: true,
                      validate: {
                          minLength: (v) => v.length == 10,
                          matchPattern: (v) => /^\d+$/.test(v),
                        },
                  })}
                />
                    {errors.phoneNumber?.type === "required" && (
                      <small className="text-danger">El número de teléfono es requerido.</small>
                    )}

                    {errors.phoneNumber?.type === "minLength" && (
                      <small className="text-danger">El mínimo de digitos es 10</small>
                    )}

                    {errors.phoneNumber?.type === "matchPattern" && (
                      <small className="text-danger">Solo puede ingresar números</small>
                    )}
              </div>
            </div>
            <div className="mb-3 col-12 col-md-6">
              <label htmlFor="email" className="col-12 col-form-label"> Correo electrónico: </label>
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
                    }
                  })}
                />
                {errors.email?.message && ( <small className="text-danger">{errors.email.message}</small> )}
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
