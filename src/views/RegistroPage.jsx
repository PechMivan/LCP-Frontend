import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner';

export default function RegistroPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset
  } = useForm();

  const Registrar = (e) => {
    const users=JSON.parse(localStorage.getItem("users") || "[]");
    if (  users.some(user => user.email === e.email )){
      
      toast.error('El usuario ya está registrado.');
    } else {
      users.push(e);
      localStorage.setItem("users", JSON.stringify(users));
      toast.success('El usuario se ha registrado.');
      reset();
    
    }
   
  };

  return (
    <>
     <Toaster richColors position="top-right"/>
      <div className="container-signup">
        <div className="row d-flex justify-content-end align-content-center mx-5 ">
          <div className="col-12 col-lg-6 order-lg-2 p-5 bg-blur my-5">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit((d) => Registrar(d))} className="row">
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

              <div className="mb-3 col-12 col-lg-6">
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

              <div className="mb-3 col-12 col-lg-6">
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

              <div className="mb-3 col-12 col-lg-6">
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

              <div className="mb-3">
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
                      {/* {errors.confirmPassword?.type === "required" && (
                        <small className="text-danger">Se requiere confirmar la contraseña</small>
                      )}

                      {errors.confirmPassword?.type === "validate" && (
                        <small className="text-danger">Las contraseñas no coinciden</small>
                      )} */}
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