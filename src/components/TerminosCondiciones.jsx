export default function Terms() {
    //const { estudio } = useParams();
    // const { date } = useParams();
    return (
        <>
            <>
                <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#terms"
                    data-bs-whatever="@getbootstrap"
                    className="transparent-button"
                >
                    <i className="bi bi-terms me-1"></i>
                    Términos y Condiciones de Uso
                </button>

                <div
                    className="modal fade"
                    id="terms"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title fs-5">Términos y Condiciones de Uso</h3>
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

                                        </div>

                                        <i><p>
                                            Fecha de entrada en vigor: Viernes, 29 de Septiembre del
                                            2023.
                                        </p></i>


                                        <p>Por favor, lea estos Términos y Condiciones de Uso (en adelante, "Términos") cuidadosamente antes de utilizar el sitio web del Laboratorio Clínico Poniente (en adelante, el "Sitio Web"). Al acceder y utilizar el Sitio Web, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con alguno de los términos, le solicitamos que no utilice el Sitio Web.</p>


                                        <h4> 1. Uso del Sitio Web</h4>

                                        <p>1.1. El Laboratorio Clínico Poniente proporciona este Sitio Web con el propósito de ofrecer información sobre nuestros servicios médicos y promociones relacionadas.</p>

                                        <p>1.2. Usted se compromete a utilizar el Sitio Web de manera legal y de acuerdo con estos Términos.</p>

                                        <p>1.3. No se permite el uso del Sitio Web con fines ilegales, fraudulentos o dañinos.</p>

                                        <h4>2. Propiedad Intelectual</h4>

                                        <p>2.1. El contenido del Sitio Web, incluyendo textos, imágenes, gráficos, logotipos y cualquier otro material, está protegido por derechos de autor y otros derechos de propiedad intelectual.</p>

                                        <p>2.2. Usted se compromete a no copiar, modificar, distribuir, transmitir, mostrar, vender o utilizar de cualquier otra manera el contenido del Sitio Web sin el permiso previo por escrito del Laboratorio Clínico Poniente.</p>

                                        <h4>3. Privacidad y Seguridad</h4>

                                        <p>3.1. El uso de sus datos personales se rige por nuestra Política de Privacidad, que puede encontrar en [Enlace a la Política de Privacidad]. Al utilizar el Sitio Web, usted acepta las prácticas de privacidad descritas en dicha política.</p>

                                        <p>3.2. Hemos implementado medidas de seguridad para proteger su información personal, pero no podemos garantizar la seguridad absoluta de los datos transmitidos a través del Sitio Web.</p>

                                        <h4>4. Limitación de Responsabilidad</h4>

                                        <p>4.1. El Laboratorio Clínico Poniente se esfuerza por proporcionar información precisa y actualizada en el Sitio Web, pero no garantiza la exactitud, integridad ni actualidad del contenido.</p>

                                        <p>4.2. El Sitio Web puede contener enlaces a sitios web de terceros. El Laboratorio Clínico Poniente no se hace responsable por el contenido ni por las prácticas de privacidad de estos sitios web.</p>

                                        <p>4.3. En ningún caso, el Laboratorio Clínico Poniente será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que surjan del uso o la imposibilidad de uso del Sitio Web.</p>

                                        <h4>5. Modificaciones</h4>

                                        <p>5.1. El Laboratorio Clínico Poniente se reserva el derecho de modificar estos Términos en cualquier momento. Cualquier cambio será publicado en el Sitio Web y se considerará efectivo desde la fecha de publicación.</p>

                                        <h4>6. Ley Aplicable</h4>

                                        <p>6.1. Estos Términos se rigen por las leyes de Mérida. Cualquier disputa que surja en relación con estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de Mérida.</p>

                                        <p>Al utilizar el Sitio Web, usted acepta estos Términos y se compromete a cumplir con ellos. Si no está de acuerdo con estos Términos, por favor, absténgase de utilizar el Sitio Web.</p>

                                        <i><p>
                                            Fecha de Actulizacion: Viernes, 29 de Septiembre del
                                            2023.
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
