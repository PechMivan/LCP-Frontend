import { useParams } from "react-router-dom";

export default function StudyPage() {
  const { estudio } = useParams();
  return (
    <>
      <div className="row justify-content-center align-items-center my-5 row-info p-4">
        <h3 className="text-center">{estudio}</h3>
        <hr />
        <div className="col-lg-6 p-2">
          <img
            className="img-info img-fluid"
            src="/assets/img/about/vision.jpg"
            alt="Imagen vision"
          />
        </div>
        <div className="col-lg-6">
          <p className="info">
            Nuestra visión es ser reconocidos como el laboratorio clínico líder
            y de referencia en nuestra región.Buscamos alcanzar la excelencia en
            el ámbito del diagnóstico médico a través de la innovación
            constante, la investigación y la adopción de las mejores prácticas
            en el campo de la medicina de laboratorio. Aspiramos a establecer
            relaciones de confianza y colaboración con los profesionales de la
            salud y las instituciones médicas, con el objetivo de convertirnos
            en un pilar fundamental en la mejora de la salud y el bienestar de
            la comunidad que servimos.
          </p>
          
          <div className="m-4">
            <h4>Indicaciones</h4>
            <ul>
              <li>
                Al agendar tu cita, asegurarás tu lugar en la fecha elegida.
              </li>
              <li>
                Si el paciente es menor de edad, deberá acudir con un adulto;
                padre, madre o tutor.
              </li>
            </ul>

            <h4>Tiempo de entrega de resultados</h4>
            <ul>
              <li>1 dia, 30 minutos, 23 segundos</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
