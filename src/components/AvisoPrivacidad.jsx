export default function Terms() {
  //const { estudio } = useParams();
  // const { date } = useParams();
  return (
    <>
      <>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#privacy"
          data-bs-whatever="@getbootstrap"
          className="transparent-button"
        >
          <i className="bi bi-terms me-1"></i>
          Aviso de Privacidad
        </button>

        <div
          className="modal fade"
          id="privacy"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title fs-5">Aviso de Privacidad</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="row content">
                  <div className="row d-flex justify-content-align">
                    <div className="col-12 text-center">
                      <p>Laboratorio Clínico Poniente</p>
                    </div>



                    <i><p>
                      Fecha de entrada en vigor: Viernes, 29 de Septiembre del
                      2023.
                    </p></i>

                    <p>
                      En <b>Laboratorio Clínico Poniente</b>, estamos
                      comprometidos con la protección de su privacidad y la
                      seguridad de sus datos personales. Este aviso de
                      privacidad tiene como objetivo informarle sobre cómo
                      recopilamos, utilizamos y protegemos la información que
                      usted nos proporciona a través de nuestro sitio web y
                      otros canales de comunicación.
                    </p>

                    <h4> 1. Responsable de sus datos personales</h4>

                    <p>
                      El responsable de sus datos personales es{" "}
                      <b>Laboratorio Clínico Poniente</b>, con domicilio en{" "}
                      <b>
                        Calle 16 Por 23, Fraccionamiento Mulsay, Mérida Yucatán,
                        97249, México
                      </b>
                      , y número de teléfono <b>+529993303828</b> o bien,{" "}
                      <b>+529991609043</b>. Puede ponerse en contacto con
                      nosotros a través de la siguiente dirección de correo
                      electrónico: <b>laboratorioclinicoponiente@gmail.com</b>
                    </p>

                    <h4>2. Datos personales que recopilamos</h4>

                    <p>
                      Podemos recopilar los siguientes datos personales cuando
                      visita nuestro sitio web:
                    </p>

                    <p>
                      - Información de contacto, como nombre, dirección de
                      correo electrónico, número de teléfono.
                    </p>
                    <p>
                      - Información demográfica, como su edad, género, y lugar
                      de residencia.
                    </p>
                    <p>
                      - Información de salud, en caso de que usted nos
                      proporcione detalles relacionados con servicios médicos
                      que requiera.
                    </p>
                    <p>
                      - Datos de navegación, como la dirección IP, tipo de
                      navegador, sistema operativo y otras estadísticas sobre su
                      visita a nuestro sitio web.
                    </p>

                    <h4>
                      3. Finalidad del tratamiento de sus datos personales
                    </h4>
                    <p>
                      Los datos personales que recopilamos tienen como
                      finalidad:
                    </p>

                    <p>
                      - Proporcionarle información sobre nuestros servicios y
                      promociones.
                    </p>
                    <p>
                      - Brindarle servicios médicos y atención personalizada.
                    </p>
                    <p>
                      - Realizar análisis estadísticos y mejoras en nuestro
                      sitio web.
                    </p>
                    <p>- Cumplir con requisitos legales y regulatorios.</p>

                    <h4>4. Uso de cookies</h4>

                    <p>
                      Utilizamos cookies y tecnologías similares para mejorar la
                      experiencia del usuario en nuestro sitio web. Puede
                      obtener más información sobre cómo utilizamos las cookies
                      en nuestra [Política de Cookies].
                    </p>

                    <h4>5. Compartir sus datos personales</h4>

                    <p>
                      No compartiremos sus datos personales con terceros sin su
                      consentimiento previo, a menos que estemos obligados por
                      la ley o una autoridad competente.
                    </p>

                    <h4>6. Seguridad de sus datos personales</h4>
                    <p>
                      Hemos implementado medidas de seguridad adecuadas para
                      proteger sus datos personales contra el acceso no
                      autorizado y el uso indebido.
                    </p>

                    <h4>
                      7. Derechos ARCO (Acceso, Rectificación, Cancelación y
                      Oposición)
                    </h4>

                    <p>
                      Usted tiene derecho a acceder a sus datos personales,
                      rectificarlos en caso de ser inexactos, cancelarlos cuando
                      considere que no son necesarios para las finalidades
                      indicadas en este aviso, y oponerse al tratamiento de los
                      mismos para fines específicos. Para ejercer estos
                      derechos, por favor póngase en contacto con nosotros a
                      través de laboratorioclinicoponiente@gmail.com
                    </p>

                    <h4>8. Cambios en el aviso de privacidad</h4>

                    <p>
                      Nos reservamos el derecho de modificar este aviso de
                      privacidad en cualquier momento. Cualquier cambio será
                      notificado a través de nuestro sitio web. Al continuar
                      utilizando nuestro sitio web y proporcionarnos sus datos
                      personales, usted acepta los términos y condiciones de
                      este aviso de privacidad.
                    </p>

                    <i><p>
                      Fecha de última actualización: Viernes, 29 de Septiembre
                      del 2023.
                    </p></i>


                    <i>
                      <b> <p>Atentamente,</p></b>
                      <p>Laboratorio Clínico Poniente</p>
                      <p>
                        Calle 16 Por 23, Fraccionamiento Mulsay, Mérida Yucatán,
                        97249, México{" "}
                      </p>
                      <p>Tel 1: +529993303828</p>
                      <p>Tel 2: +529991609043</p>
                      <p>laboratorioclinicoponiente@gmail.com </p>
                      <p>laboratorio-clinico-poniente.netlify.app/contacto</p></i>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-around m-0 p-4">
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
