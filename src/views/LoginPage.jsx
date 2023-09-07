import { Link } from "react-router-dom";

export default function LoginPage() {

  /* const enviarDatos = (e) =>{
    e.preventDefault();
    console.log("¡Binvenido!");
    console.log(e); */

  return (
    
    <>
    <div className="container-login">
        <div className="row d-flex justify-content-center align-content-center ">
            <div className="col-12 text-center p-5 bg-blur-login">
                <h1>Iniciar Sesión</h1>
                <form /* onSubmit={enviarDatos} */ className="row">


                    <div className="mb-3">
                        <label htmlFor="staticEmail" className="col-12 col-form-label">
                            Correo electrónico:
                        </label>
                        <div className="col-6 mx-auto">
                            <input type="email" className="form-control" id="staticEmail" required/>
                        </div>
                    </div>                            

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="col-12 col-form-label" >
                            Contraseña:
                        </label>
                        <div className="col-6 mx-auto">
                            <input type="password" className="form-control" id="inputPassword" required/>
                        </div>
                    </div>

                    <div className="col-12 mt-3 text-center">
                        <input type="submit" value="Entrar" className="btn-green"/>
                    </div>
                    
                </form>
                
                <div className="mt-3 text-center">
                    <p>¿No tienes una cuenta? <Link to="/registro">¡Registrate aquí!</Link> </p>
                </div>
            </div>

        </div>
    </div>
</>
  )
/* }; */
}
