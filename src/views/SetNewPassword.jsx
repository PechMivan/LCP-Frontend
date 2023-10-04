import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner';
import { useLocalStorage } from "@uidotdev/usehooks";

export default function PasswordRecovery() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        getValues,
        reset
    } = useForm();

    const passwordReset = (e) => {
        toast.success("La contraseña se ha restablecido");
        reset();
        setTimeout(() => {
            navigate("/")
          }, 1000);
    }

    return (
        <>
            <Toaster richColors position="top-right" />
            <div className="container-login" style={{ backdropFilter: "blur(10px)" }}>
                <div className="row m-0 d-flex justify-content-center justify-content-md-end p-3">
                    <div className="col-12 col-md-5 text-center p-5 bg-blur-login m-5">
                        <h1>Recuperar Contraseña</h1>
                        <form onSubmit={handleSubmit(passwordReset)} className="row">
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
                                    <input type="submit" value="Enviar" className="btn-green" />
                                </div>
                        </form>
                        <div className="mt-3 text-center">
                            <p>¿Ya tienes una cuenta? <Link to="/login">¡Inicia sesión aquí!</Link> </p>
                        </div>
                        <div className="mt-3 text-center">
                            <p>¿No tienes una cuenta? <Link to="/registro">¡Registrate aquí!</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}