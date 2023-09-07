import { Link } from "react-router-dom";

export default function RegistroPage() {
    const enviarDatos = (e) =>{
        e.preventDefault();
        console.log("¡Se enviaron tus datos!");
        console.log(e);

    }
    return (
        <>
            <div className="container-signup">
                <div className="row d-flex justify-content-end align-content-center mx-5 ">
                    <div className="col-12 col-lg-6 order-lg-2 p-5 bg-blur my-5">
                        <h1>Registro</h1>
                        <form onSubmit={enviarDatos} className="row">
                            <div className="mb-3 col-12 col-lg-6">
                            
                                <label htmlFor="inputName" className="col-12 d-block col-form-label" >
                                    Nombre(s):
                                </label>
                                <div className="col-sm-12">
                                    <input type="name" className="form-control" id="inputName" required />
                                </div>
                            </div>
                            
                            <div className="mb-3 col-12 col-lg-6">
                            
                                <label htmlFor="inputLastName" className="col-12 col-form-label" >
                                    Apellido Paterno:
                                </label>
                                <div className="col-12 ">
                                    <input type="text" className="form-control" id="inputLastName" required/>
                                </div>
                            </div>

                            <div className="mb-3 col-12 col-lg-6">
                            
                                <label htmlFor="inputLastName1" className="col-12 col-form-label" >
                                    Apellido Materno:
                                </label>
                                <div className="col-12 ">
                                    <input type="text" className="form-control" id="inputLastName1" />
                                </div>
                            </div>

                            <div className="mb-3 col-12 col-lg-6">
                            
                                <label htmlFor="birthdate" className="col-12 col-form-label" >
                                    Fecha de nacimiento:
                                </label>
                                <div className="col-12">
                                    <input type="date" className="form-control" id="birthdate" required/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="staticTel" className="col-12 col-form-label">
                                    Teléfono Celular::
                                </label>
                                <div className="col-12">
                                    <input type="tel" className="form-control" id="staticTel" required/>
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

                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="col-12 col-form-label" >
                                    Contraseña:
                                </label>
                                <div className="col-12">
                                    <input type="password" className="form-control" id="inputPassword" required/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="col-12 col-form-label" >
                                    Confirmar contraseña:
                                </label>
                                <div className="col-12">
                                    <input type="password" className="form-control" id="inputPassword" required/>
                                </div>
                            </div>

                            <div className="col-12 mt-3 text-center">
                                <input type="submit" value="Registrarme" className="btn-green"/>
                            </div>
                            
                        </form>
                        
                        <div className="mt-3 text-center">
                            <p>¿Ya tienes una cuenta registrada? <Link to="/login">Inicia sesión aquí</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
