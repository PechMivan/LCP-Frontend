import { Link } from "react-router-dom";
import { useState } from "react";


export default function RegistroPage() {

    const [nombre, setNombre] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const borrarDatos = () => {

        setNombre('');
        setApellidoP('');
        setApellidoM('');
        setFechaNacimiento('');
        setTelefono('');
        setCorreo('');
        setPassword('');
        setConfirmPassword('');
        
      };
    

      const campos = {
          nombre: setNombre,
          apellidoP: setApellidoP,
          apellidoM: setApellidoM,

        };

      const pass = {
          password: setPassword,
          confirmPassword: setConfirmPassword,

        };

        const handleNumeroChange = (e) => {
          const input = e.target.value;
          const numeroTelefono = input.replace(/[^0-9]+/g, ' ');
          setTelefono(numeroTelefono);
        };

        const handleBirthDayChange = (e) => {
                setFechaNacimiento(e.target.value);
          };

          const handleEmailChange = (e) => {
            setCorreo(e.target.value);
      };

          const handlePasswordChange = (e, p) => {
            setPassword(e.target.value);
            if (pass[p]) {
                pass[p](e.target.value);
              }
      };
    
      const handleInputChange = (e, campo) => {
        const input = e.target.value;
        const valorValido = input.replace(/[^A-Za-zÀ-ž\s]+/ig, "");
    
        if (campos[campo]) {
          campos[campo](valorValido);
        }
      };
    
      const handleButton =(e) => {
        e.preventDefault();
       
               const result = JSON.stringify({nombre,apellidoP,apellidoM,fechaNacimiento,telefono,correo,password});
               console.log(result);
               borrarDatos();
             };
           
       
    return (
        <>
    
            <div className="container-signup">
                <div className="row d-flex justify-content-end align-content-center mx-5 ">
                    <div className="col-12 col-lg-6 order-lg-2 p-5 bg-blur my-5">
                        <h1>Registro</h1>
                        <form onSubmit={handleButton} className="row">
                            <div className="mb-3 col-12 col-lg-6">
                            
                                <label htmlFor="nombre" className="col-12 d-block col-form-label" >
                                    Nombre(s):
                                </label>
                                <div className="col-sm-12">
                                    <input type="name" className="form-control" id="inputName" value={nombre} onChange={(e) => handleInputChange(e, 'nombre')}  required />
                                </div>
                            </div>
                            
                            <div className="mb-3 col-12 col-lg-6">
                            
                                <label htmlFor="apellidoP" className="col-12 col-form-label" >
                                    Apellido Paterno:
                                </label>
                                <div className="col-12 ">
                                    <input type="text" className="form-control" id="inputLastName" value={apellidoP} onChange={(e) => handleInputChange(e, 'apellidoP')} required/>
                                </div>
                            </div>

                            <div className="mb-3 col-12 col-lg-6">
                            
                                <label htmlFor="apellidoM" className="col-12 col-form-label" >
                                    Apellido Materno:
                                </label>
                                <div className="col-12 ">
                                    <input type="text" className="form-control" id="inputLastName1" value={apellidoM} onChange={(e) => handleInputChange(e, 'apellidoM')}/>
                                </div>
                            </div>

                            <div className="mb-3 col-12 col-lg-6">
                            
                                <label htmlFor="fechaNacimiento" className="col-12 col-form-label" >
                                    Fecha de nacimiento:
                                </label>
                                <div className="col-12">
                                    <input type="date" className="form-control" id="birthdate" value={fechaNacimiento} onChange={(e) => handleBirthDayChange(e, 'fechaNacimiento')} required/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telefono" className="col-12 col-form-label">
                                    Teléfono Celular::
                                </label>
                                <div className="col-12">
                                    <input type="tel" className="form-control" id="staticTel" name="telefono" onChange={handleNumeroChange} value={telefono} required />
                                </div>
                            </div>   

                            <div className="mb-3">
                                <label htmlFor="correo" className="col-12 col-form-label">
                                    Correo electrónico:
                                </label>
                                <div className="col-12">
                                    <input type="email" className="form-control" id="staticEmail"name="correo" onChange={(e) => handleEmailChange(e, 'correo')} value={correo} required/>
                                </div>
                            </div>                            

                            <div className="mb-3">
                                <label htmlFor="password" className="col-12 col-form-label" >
                                    Contraseña:
                                </label>
                                <div className="col-12">
                                    <input type="password" className="form-control" id="inputPassword" value={password} name="password" onChange={(e) => handlePasswordChange(e, 'password')} required/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="col-12 col-form-label" >
                                    Confirmar contraseña:
                                </label>
                                <div className="col-12">
                                    <input type="password" className="form-control" id="confirmPassword"  value={confirmPassword} onChange={(e) => handlePasswordChange(e, 'confirmPassword')} required/>
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

