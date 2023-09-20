import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner';
import { useLocalStorage } from "@uidotdev/usehooks";

export default function PasswordRecovery() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const passwordRecovery = (e) => {
        if (users.some(user => user.email === e.email)) {
            const user = users.find(user => user.email === e.email)
            toast.success("Se ha enviado la confirmación a su correo electrónico");
        } else {
            toast.error('El correo electrónico no existe');
        }
    }


    return (
        <>
            <Toaster richColors position="top-right" />
            <div className="container-login" style={{ backdropFilter: "blur(10px)" }}>
                <div className="row m-0 d-flex justify-content-center justify-content-md-end p-3">
                    <div className="col-12 col-md-5 text-center p-5 bg-blur-login m-5">
                        <h1>Recuperar Contraseña</h1>
                        <form onSubmit={handleSubmit(passwordRecovery)} className="row">
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