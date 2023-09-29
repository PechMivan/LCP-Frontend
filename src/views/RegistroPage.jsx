import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner';

export default function RegistroPage() {
  const navigate = useNavigate();
  const crearUsuario = async (e) => {
    // console.log(e);

    const obj = JSON.stringify({  
      name: e.name , 
      lastName: e.lastName, 
      lastName2: e.lastName2, 
      sex: "Male",
      birthDate: e.birthDate, 
      email: e.email, 
      phonenumber: e.phoneNumber,
      password: e.password,
      roles: { roleId: 2 }
  });

  console.log(obj)
    try{
      await fetch(`https://lcp-backend.onrender.com/api/v1/customers`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: obj});
      toast.success('Usuario registrado exitosamente.');
      setTimeout(() => {
        navigate("/login")
      }, 1000); 
    } catch {
      toast.error('El usuario ya está registrado.');
    }

  };

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="container-signup">
        <div className="row d-flex justify-content-end align-content-center mx-5 ">
          <div className="col-12 col-lg-6 order-lg-2 p-5 bg-blur my-5">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit((d) => crearUsuario(d))} className="row">
              <div className="mb-3 col-12 col-lg-6">
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
                        matchPattern: (v) => /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/g.test(v),
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

              <div className="mb-3 col-12 col-lg-6">
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
                        matchPattern: (v) => /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/g.test(v),
                      },
                    })}
                  />
                  {errors.lastName?.type === "required" && (
                    <small className="text-danger">Apellido Paterno es obligatorio</small>
                  )}

                  {errors.lastName?.type === "minLength" && (
                    <small className="text-danger">Apellido Paterno minimo 2 caracteres</small>
                  )}

                  {errors.lastName?.type === "matchPattern" && (
                    <small className="text-danger">Solo puede ingresar letras</small>
                  )}
                </div>
              </div>

              <div className="mb-3 col-12 col-lg-6">
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
                        matchPattern: (v) => /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(v),
                      },
                    })}
                  />
                  {errors.lastName2?.type === "required" && (
                    <small className="text-danger">Apellido Materno es obligatorio</small>
                  )}

                  {errors.lastName2?.type === "minLength" && (
                    <small className="text-danger">Apellido Materno minimo 2 caracteres</small>
                  )}

                  {errors.lastName2?.type === "matchPattern" && (
                    <small className="text-danger">Solo puede ingresar letras</small>
                  )}
                </div>
              </div>

              <div className="mb-3 col-12 col-lg-6">
                <label
                  htmlFor="birthDate"
                  className="col-12 col-form-label"
                >
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
                    <small className="text-danger">Fecha de nacimiento es obligatorio</small>
                  )}
                </div>
              </div>

            
              <div className="mb-3 col-12 col-lg-6" >
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
          
              <div className="mb-3 col-12 col-lg-6">
              <label htmlFor="sexo" className="col-12 col-form-label">
                Sexo:
              </label>
              <div className="col-12">
                <select className="form-select" id="sexo" name="sexo" {...register("sex", {
                      required: true,
                  })}>
                  <option value="">Selecciona una opción</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                </select>
              </div>
            </div>
            

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

              <div className="mb-3">
                <label htmlFor="password" className="col-12 col-form-label">
                  Contraseña:
                </label>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      validate: {
                        minLength: (v) => v.length >= 8,
                      },
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <small className="text-danger">La contraseña es requerida.</small>
                  )}

                  {errors.password?.type === "minLength" && (
                    <small className="text-danger">El mínimo de caracteres es de 8</small>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="confirmPassword"
                  className="col-12 col-form-label"
                >
                  Confirmar contraseña:
                </label>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (string) => {
                        if (watch('password') != string) {
                          return "Your passwords do no match";
                        }
                      }
                    })}
                  />
                  {watch("confirmPassword") !== watch("password") &&
                    getValues("confirmPassword") ? (
                    <small className="text-danger">Las contraseñas no coinciden</small>
                  ) : null}
                </div>
              </div>

              <div className="col-12 mt-3 text-center">
                <input
                  type="submit"
                  value="Registrarme"
                  className="btn-green"
                />
              </div>
            </form>

            <div className="mt-3 text-center">
              <p>
                ¿Ya tienes una cuenta registrada?{" "}
                <Link to="/login">Inicia sesión aquí</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
