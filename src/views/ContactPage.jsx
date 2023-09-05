import { useState } from "react";
import { Toaster, toast } from 'sonner';
export default function ContactPage() {
  const [nombre, setNombre] = useState('');
  const [email, setmail] = useState('');
  const [numero, setnumero] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const borrarDatos = () => {
    setNombre('');
    setmail('');
    setnumero('');
    setAsunto('');
    setMensaje('');
  }

  const handleNumeroChange = (e) => {
    const input = e.target.value;
    const numeroTelefono = input.replace(/[^0-9]+/g, ' ');
    setnumero(numeroTelefono);
  }

  const handleNombreChange = (e) => {
    const input = e.target.value;
    const nombreValido = input.replace(/[^A-Za-zÀ-ž\s]+/ig, "");
    setNombre(nombreValido);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    try {
       await fetch( "https://formsubmit.co/ajax/leonrosant92@gmail.com",
      // //await fetch( "https://formsubmit.co/ajax/laboratorioclinicoponiente@gmail.com",
         {
           method: "POST",
           headers: { 
             'Content-Type': 'application/json',
             'Accept': 'application/json'
           },
           body: JSON.stringify(
             {
               nombre,email,numero,asunto,mensaje
             }
           )
         }
       )
      borrarDatos();
      toast.success('El mensaje se ha enviado.')
    } catch (error) {
      toast.error("Error al enviar el mensaje.");
      console.log(error);
    }
  }

  return (
    <>
      <Toaster richColors position="top-right"/>
      <div className="container my-5 px-0" id="envianosMensaje">
        <div className="d-flex justify-content-center align-items-center" id="tituloubi">
          <h3>Contáctanos</h3>
        </div>
        <div className="mb-4">
          <p className="text-center w-responsive mx-2 my-2 justify-content-center ">¿Tiene alguna pregunta? <br/>
            Póngase en contacto con nosotros, responderemos en breve.</p>
          <div className="row  mx-2">
            <div className="w-100 col-md-9 mb-md-0 mb-5 ">
              <form id="contact-form" onSubmit={handleButton}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name"></label>
                      <input type="text"  title="Ingrese su nombre" required id="name" name="name" className="form-control" placeholder="Nombre" onChange={handleNombreChange} value={nombre}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email"></label>
                      <input type="email" required id="email" name="email" className="form-control" placeholder="E-mail" onChange={event => setmail(event.target.value)} value={email}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="numero"></label>
                      <input type="tel"pattern="[0-9]*" maxLength="15" minLength="10" required id="numero" name="numero" className="form-control" placeholder="Número" onChange={handleNumeroChange} value={numero}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="subject"></label>
                      <input type="text" required id="subject" name="subject" className="form-control" placeholder="Asunto" onChange={event => setAsunto(event.target.value)} value={asunto}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message"></label>
                      <textarea type="text" required id="message" name="message" rows="2" className="form-control md-textarea" placeholder="Mensaje" onChange={event => setMensaje(event.target.value)} value={mensaje}></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 my-lg-4">
                  <button type="submit" className="px-4 py-3 text-white bg-green border-0 rounded-pill btn-green">Enviar</button>
                </div>
              </form>
              <div className="status"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container justify-content-center align-items-center my-5 p-3 content-info" id="ubicacion">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 justify-content-center align-items-center">
            <h3 className="text-center">Ubicación </h3>
            <hr/>
            <div className="row d-flex flex-column align-items-center">
              <i className="bi bi-geo-alt col-2 icon text-center"></i>
              <p className="text-center col-10 p-0">Calle 16 Por 23, Fraccionamiento Mulsay,</p>
            </div>
            <div className="row d-flex flex-column align-items-center">
              <i className="bi bi-telephone col-2 icon text-center"></i>
              <p className="text-center col-10 p-0 mt-2"> Tel 1: +529993303828 </p>
              <p className="text-center col-10 p-0"> Tel 2: +529991609043</p>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5280946325615!2d-89.6732252970978!3d20.97145805367061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567332c5785f71%3A0xa8eb5ca7f0e72ab3!2sLCP%20MULSAY!5e0!3m2!1ses-419!2smx!4v1692676522661!5m2!1ses-419!2smx"
              width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}