import { useEffect, useState, useRef } from "react";
/* import { Link } from "react-router-dom"; */
import { useForm } from "react-hook-form";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown"
import { Toaster, toast } from "sonner";



export default function AgendarCita() {
  const [user] = useLocalStorage("user", null);
  const [isChecked, setIsChecked] = useState(false);
  const [estudios, setEstudios] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValue,
    setValue,
  } = useForm();

  const watchMysel = watch("mysel")

  useEffect(() => {
    const filtrarSexo= () => {
      console.log('mysel value', watchMysel);
    }
    filtrarSexo()
  }, [watchMysel]);
  
  const multiselectRef = useRef();

  const getSelectedStudies = () => {
    return multiselectRef.current.getSelectedItems();
  };

  const getData = async () => {
    const response = await fetch('https://lcp-backend.onrender.com/api/v1/studies');
    const responseArray = await response.json();
    const estudios = responseArray.map(x => { return { studyId: x.studyId, name: x.name } });
    setEstudios(estudios);
  }

 
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [lastName, setNameP] = useState("");
  const [lastName2, setNameM] = useState("");
  const [sex, setSex] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  /* const [selectedStudies, setSelectedStudies] = useState([]); */

  const crearCita = async (e) => {
  
    const obj = JSON.stringify({  
      dateTime: e.date + "T" + e.time + "Z", 
        name: e.name , 
        lastName: e.lastName, 
        lastName2: e.lastName2, 
        sex: "male" ,
        birthDate: e.birthDate, 
        email: e.email, 
        phonenumber: e.phonenumber,
        customer: user,
        studies: getSelectedStudies()
  });
    
  console.log(obj);
    console.log(getSelectedStudies());
    const response = await fetch(`https://lcp-backend.onrender.com/api/v1/appointments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: obj});
  
    setDate("");
    setName("");
    setNameP("");
    setNameM("");
    setSex("");
    setbirthDate("");
    setEmail("");
    setPhonenumber("");
    setTime("");
    getData();
    toast.success('La cita se ha agendado exitosamente.');
  }

  useEffect(() => {

    getData();

  }, [])

  useEffect(() => {
    if (isChecked) {
      setValue("name", user.name);
      setValue("lastName", user.lastName);
      setValue("lastName2", user.lastName2);
      setValue("sex", user.sex);
      setValue("birthDate", user.birthDate);
      setValue("phonenumber", user.phonenumber);
      setValue("email", user.email);
    } else {
      setValue("name", "");
      setValue("lastName", "");
      setValue("lastName2", "");
      setValue("sex", "");
      setValue("birthDate", "");
      setValue("phonenumber", "");
      setValue("email", "");
    }
  }, [isChecked]);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
    <Toaster richColors position="top-right" />
      <div className="container-cita">
        <div className="row m-0 p-3">
          <div className="col-12 col-lg-6 order-lg-2 py-5 bg-blur my-5">
            <h1 className="text-center">Agenda tu Cita</h1>
            <form onSubmit={handleSubmit((d) => crearCita(d))} className="row">
              {user && (
                <div className="col-sm-12 d-flex align-items-center gap-2">
                  <label htmlFor="analysis" className="col-form-label">
                    El estudio es para mí:
                  </label>
                  <input
                    type="checkbox"
                    onChange={handleOnChange}
                    className="form-check-input"
                    id="analysis"
                    checked={isChecked}
                  />
                </div>
              )}
              <div className="col-sm-12">
                <label
                  htmlFor="analysis"
                  className="col-12 d-block col-form-label"
                >
                  Análisis:
                </label>
              {/*   {...register("analysis", {
                  required: "Selecciona un Estudio" 
                })} */}
                <Multiselect
                  id="analysis" 
                  onKeyPressFn={function noRefCheck() {}}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={function noRefCheck() {}}
                  options={estudios}
                  displayValue="name"
                  showCheckbox
                  ref={multiselectRef}
                />
                {errors.analysis?.message && ( <small className="text-danger">{errors.analysis.message}</small>)}
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="time" className="col-12 col-form-label">
                  Hora:
                </label>
                <div className="col-12">
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    {...register("time", {
                      required: "La hora es obligatoria",
                    })}
                  />
                  {errors.time?.type === "required" && (
                    <small className="text-danger">Hora obligatoria</small>
                  )}
                </div>
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="date" className="col-12 col-form-label">
                  {" "}
                  Fecha:{" "}
                </label>
                <div className="col-12">
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    min={new Date().toJSON().slice(0, 10)}
                    {...register("date", { required: true })}
                  />
                  {errors.date?.type === "required" && (
                    <small className="text-danger">Fecha es obligatoria</small>
                  )}
                </div>
              </div>

              <label htmlFor="name" className="col-12 d-block col-form-label">
                  Nombre(s):
                </label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    {...register("name", {
                      required: true,
                      validate: {
                        minLength: (v) => v.length >= 2,
                        matchPattern: (v) =>
                          /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/g.test(v),
                      },
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <small className="text-danger">Nombre es obligatorio</small>
                  )}

                  {errors.name?.type === "minLength" && (
                    <small className="text-danger">
                      Nombre mínimo 2 caracteres
                    </small>
                  )}

                  {errors.name?.type === "matchPattern" && (
                    <small className="text-danger">
                      Solo puede ingresar letras
                    </small>
                  )}

          
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="lastName" className="col-12 col-form-label">
                  Apellido Paterno:
                </label>
                <div className="col-12 ">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    {...register("lastName", {
                      required: true,
                      validate: {
                        minLength: (v) => v.length >= 2,
                        matchPattern: (v) =>
                          /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/g.test(v),
                      },
                    })}
                  />
                  {errors.lastName?.type === "required" && (
                    <small className="text-danger">
                      Apellido Paterno es obligatorio
                    </small>
                  )}

                  {errors.lastName?.type === "minLength" && (
                    <small className="text-danger">
                      Apellido Paterno minimo 2 caracteres
                    </small>
                  )}

                  {errors.lastName?.type === "matchPattern" && (
                    <small className="text-danger">
                      Solo puede ingresar letras
                    </small>
                  )}
                </div>
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="lastName2" className="col-12 col-form-label">
                  Apellido Materno:
                </label>
                <div className="col-12 ">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName2"
                    name="lastName2"
                    {...register("lastName2", {
                      required: true,
                      validate: {
                        minLength: (v) => v.length >= 2,
                        matchPattern: (v) =>
                          /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(v),
                      },
                    })}
                  />
                  {errors.lastName2?.type === "required" && (
                    <small className="text-danger">
                      Apellido Materno es obligatorio
                    </small>
                  )}

                  {errors.lastName2?.type === "minLength" && (
                    <small className="text-danger">
                      Apellido Materno minimo 2 caracteres
                    </small>
                  )}

                  {errors.lastName2?.type === "matchPattern" && (
                    <small className="text-danger">
                      Solo puede ingresar letras
                    </small>
                  )}
                </div>
              </div>

              <div className="mb-3 col-12 col-md-6">
                      <label className="col-12 col-form-label">Sexo</label>
                        <select
                          className="form-select"
                          defaultValue="0"
                          {...register("mysel", { validate: (value) => value !== "0" })}
                        >
                          <option value="0">Selecciona una opción</option>
                          <option value="Masculino">Masculino</option>
                          <option value="Femenino">Femenino</option>
                        </select>
                        {errors?.mysel?.type === "validate" && (
                          <p className="error-message">Este campo es obligatorio</p>
                        )}
              </div>

              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="birthDate" className="col-12 col-form-label">
                  Fecha de nacimiento:
                </label>
                <div className="col-12">
                  <input
                    type="date"
                    className="form-control"
                    id="birthDate"
                    name="birthDate"
                    max={new Date().toJSON().slice(0, 10)}
                    {...register("birthDate", {
                      required: true,
                    })}
                  />
                  {errors.birthDate?.type === "required" && (
                    <small className="text-danger">
                      Fecha de nacimiento es obligatorio
                    </small>
                  )}
                </div>
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="phonenumber" className="col-12 col-form-label">
                  Teléfono Celular:
                </label>
                <div className="col-12">
                  <input
                    type="tel"
                    className="form-control"
                    id="phonenumber"
                    name="phonenumber"
                    maxLength={10}
                    {...register("phonenumber", {
                      required: true,
                      validate: {
                        minLength: (v) => v.length == 10,
                        matchPattern: (v) => /^\d+$/.test(v),
                      },
                    })}
                  />
                  {errors.phonenumber?.type === "required" && (
                    <small className="text-danger">
                      El número de teléfono es requerido.
                    </small>
                  )}

                  {errors.phonenumber?.type === "minLength" && (
                    <small className="text-danger">
                      El mínimo de digitos es 10
                    </small>
                  )}

                  {errors.phonenumber?.type === "matchPattern" && (
                    <small className="text-danger">
                      Solo puede ingresar números
                    </small>
                  )}
                </div>
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="email" className="col-12 col-form-label">
                  {" "}
                  Correo electrónico:{" "}
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
                          v.length <= 100 ||
                          "El correo electrónico no puede exceder los 100 caracteres",
                        matchPattern: (v) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            v
                          ) ||
                          "El correo electrónico debe ser una dirección válida",
                      },
                    })}
                  />
                  {errors.email?.message && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="col-12 mt-3 text-center">
                <input
                  type="submit"
                  value="Confirmar orden"
                  className="btn-green"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
