import analisisClinico from '/assets/img/promociones/Analisis_clinicos.jpg';
import descuento from '/assets/img/promociones/Descuento.png';
import pcr from '/assets/img/promociones/pruebaPcr.jpg'; 
import analisis from '/assets/img/promociones/Analisis.png';
import domicilio from '/assets/img/destacados/Servicio_a_domicilio.jpg';
import empresas from '/assets/img/destacados/Servicio_empresas.jpg';
import checkUp from '/assets/img/destacados/Check_up_basico.jpg';
import ButtonCita from '../components/ButtonCita';

function HomePage() {
  const destacados = [
    {
      title : "Servicio a Domicilio",
      subtitle : "No salgas de tu casa. Agenda tu estudio de laboratorios cualquier día de la semana.",
      img : domicilio,
    },
    {
      title : "Servicio para empresas",
      subtitle : "Contamos con paquetes y beneficios a precio especial para empresas que requieran análisis para sus colaboradores.",
      img : empresas,
    },
    {
      title : "Agenda tu cita las 24hrs",
      subtitle : "Nos preocupamos por tu salud por lo cual contamos con el servicio de estudios clínicos disponible las 24 horas.",
      img : checkUp,
    }
  ]
  return (
    <div className="d-flex flex-column">
      <div id="carouselExampleIndicators" className="carousel slide ">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <div className='h-max-carousel'>
              <img src={analisisClinico} className="w-100 img-bg-promotion"
              alt="Imagen de estudio PCR"/>
              <div className="h-100 card-promo d-flex flex-column justify-content-around align-items-center">
                <img src={descuento} alt="Imagen de analisis" className="img-promotion"/>
                <h4 className="title-promotion text-center md-h1">15% de descuento</h4>
                <ul>
                  <li>Check up básico</li>
                  <li>Perfil ginecológico</li>
                  <li>Perfil preoperatorio</li>
                  <li>Perfil diabético</li>
                  <li>Perfil prematrimoniales</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item position-relative">
            <img src={pcr} className="w-100 img-bg-promotion object-fit-cover h-max-carousel"
              alt="Imagen de estudio PCR"/>
            <div className="h-100 card-promo d-flex flex-column justify-content-around align-items-center">
              <img src={analisis} alt="Imagen de analisis" className="img-promotion"/>
              <h4 className="title-promotion text-center md-h1">PRUEBA COVID-19 ANTÍGENO Y PCR</h4>
              <h4 className="subtitle-promotion text-center">SERVICIO A DOMICILIO</h4>
              <div className="d-flex justify-content-center">
                <h4 className="title-promotion-important text-center text-shadow-red text-white">
                  24 HRS</h4>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center bg-blue-ligth p-3 m-3 rounded-1">
        <ButtonCita icon/>
      </div>
      <div className="row mx-3 rounded-1 gap-2 d-flex flex-wrap justify-content-center p-3">
        <div className="d-flex justify-content-center">
          <p className="text-center section-title">
            DESTACADOS
          </p>
        </div>
        {
          destacados.map( (destacado, i) => (
            <div key={i} className="bg-blue-ligth p-3 rounded-1 max-width-320 d-flex flex-column justify-content-between align-items-center content-info">
              <img src={destacado.img} alt="Imagen de analisis" className="w-100 rounded-1"/>
              <div className="flex-grow-1 d-flex flex-column justify-content-between">
                <p className="text-center text-color-principal text-title-destacado">{destacado.title}</p>
                <p className="text-color-principal text-subtitle-destacado">{destacado.subtitle}</p>
                <div className="w-100 d-flex justify-content-center">
                  <ButtonCita/>
                </div>
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default HomePage