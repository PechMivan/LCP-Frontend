import Benji from '/assets/img/about/Benji.jpg';
import Daniel from '/assets/img/about/Daniel.jpg';
import Geo from '/assets/img/about/Geo.jpg';
import Jose from '/assets/img/about/Jose.jpg';
import Leo from '/assets/img/about/Leo.jpg';
import Lu from '/assets/img/about/Lu.jpg';
import Luis from '/assets/img/about/Luis.jpg';
import Mario from '/assets/img/about/Mario.jpg';
import mision from '/assets/img/about/mision.jpg';
import vision from '/assets/img/about/vision.jpg';

export default function AboutPage() {
  const equipo = [
    {
      id: 1,
      nombre: "Luisa Andrea Eysele Gamboa",
      img : Lu,
      descripcion: "Me apasiona la tecnología, en especial el desarrollo web y la computación en la nube. Actualmente soy desarrolladora Full Stack Jr, he trabajado en soporte remoto, atención a clientes y en NOC para  configuración e inventario de dispositivos como switches y servidores, soy una persona que se adapta rápidamente y me entusiasma mucho aprender cosas nuevas, me gusta trabajar en equipo.",
      rol : "Product Owner",
      active : true
    },{
      id: 2,
      nombre: "Leonardo de Jesús Rosas Santillan",
      img : Leo,
      descripcion: "Soy un desarrollador fullstack apasionado por la tecnología y la programación. Mi entusiasmo y dedicación por crear soluciones innovadoras me impulsan a abordar desafíos complejos con creatividad y determinación. Con una formación en desarrollo web y la implementación de aplicaciones, me siento cómodo trabajando en todas las etapas del ciclo de vida del desarrollo de software. Mi habilidad para colaborar de manera efectiva en equipos multidisciplinarios me permite contribuir de manera significativa a proyectos ambiciosos.",
      rol : "Scrum Master"
    },{
      id: 3,
      nombre: "Benjamín Ortega Martínez",
      img : Benji,
      descripcion: "Soy un desarrollador Java Full Stack con licenciatura en Diseño, constantemente inmerso en la búsqueda del conocimiento en el área de TI, que aborda problemas con enfoque creativo para dar soluciones a distintas necesidades a través del diseño.",
      rol : "Development Team"
    },{
      id: 4,
      nombre: "Georgina Medina Franco",
      img : Geo,
      descripcion: "Desarrolladora Java Full Stack Jr. Entusiasta por la creación de soluciones ágiles, innovadoras y eficaces. Comprometida con el trabajo en equipo. Enfocada al desarrollo de nuevas habilidades y mejora constante de las ya adquiridas.",
      rol : "Development Team"
    },{
      id: 5,
      nombre: "José Eduardo Magaña Inurreta",
      img : Jose,
      descripcion: "Soy un apasionado desarrollador web full stack con experiencia en la creación de soluciones dinámicas y funcionales. Con habilidades sólidas tanto en el front-end como en el back-end, me enfoco en la calidad del código y la usabilidad para ofrecer experiencias excepcionales. Colaborador motivado y ágil, dispuesto a impulsar proyectos desafiantes y contribuir al éxito de equipos de desarrollo dentro de una empresa.",
      rol : "Development Team"
    },{
      id: 6,
      nombre: "Luis David Olea Martinez",
      img : Luis,
      descripcion: "Encuentro en la tecnología una fuente inagotable de inspiración. Mi entusiasmo por el aprendizaje continuo y la resolución creativa de problemas me impulsa a explorar nuevas formas de crear soluciones efectivas.",
      rol : "Development Team"
    },{
      id: 7,
      nombre: "Mario Iván Pech Pérez",
      img : Mario,
      descripcion: "Como Desarrollador Full Stack, abrazo el aprendizaje constante y la programación desafiante. Reconozco la importancia del trabajo en equipo y la comunicación en la creación de soluciones tecnológicas significativas que faciliten la vida de las personas. Mi pasión por resolver problemas impulsa mi crecimiento profesional y personal, mientras colaboro con gente igualmente apasionada en este campo.",
      rol : "Development Team"
    },{
      id: 8,
      nombre: "Daniel Jair León Avila",
      img : Daniel,
      descripcion: "Soy Daniel León, un apasionado desarrollador full stack, que busca constantemente aprender nuevas tecnologías para crear soluciones innovadoras. Tengo un enfoque versátil ya que abarco front-end y back-end, priorizando compromiso, creatividad y trabajo en equipo para la creación de soluciones tecnológicas impactantes y vanguardistas.",
      rol : "Development Team"
    }
  ]
  return (
    <>
    <h1 className="mt-4 text-center">Acerca de nosotros</h1>
    <div className="container min-vh-100">
      <div className="row justify-content-center align-items-center my-5 content-info p-4">
        <h3 className="text-align-left">Misión</h3>
        <hr/>
        <div className="col-lg-6 p-2 order-2 order-lg-1">
          <img className="img-info img-fluid" src={mision} alt="Imagen vision"/>
        </div>
        <div id="mision" className="col-lg-6 order-1 order-lg-2">
          <p className='info'>En Laboratorio Clínico Poniente, nuestra misión es proporcionar servicios de diagnóstico médico de alta
            calidad, precisos y confiables para contribuir al bienestar y la salud de nuestros pacientes. A través de
            tecnología de vanguardia y un equipo altamente capacitado, estamos comprometidos a ofrecer resultados clínicos
            precisos y oportunos que apoyen a los profesionales de la salud en la toma de decisiones médicas informadas y
            en la mejora de la calidad de vida de las personas que atendemos.
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center my-5 content-info p-4">
        <h3 className="h3-izquerda">Visión</h3>
        <hr/>
        <div className="col-lg-6">
          <p className='info'>Nuestra visión es ser reconocidos como el laboratorio clínico líder y de referencia en nuestra
            región.Buscamos alcanzar la excelencia en el ámbito del diagnóstico médico a través de la innovación
            constante, la investigación y la adopción de las mejores prácticas en el campo de la medicina de laboratorio.
            Aspiramos a establecer relaciones de confianza y colaboración con los profesionales de la salud y las
            instituciones médicas, con el objetivo de convertirnos en un pilar fundamental en la mejora de la salud y el
            bienestar de la comunidad que servimos.</p>
        </div>
        <div className="col-lg-6 p-2">
          <img className="img-info img-fluid" src={vision} alt="Imagen vision"/>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-10 justify-content-center">
          <h3>Nuestro Equipo</h3>
          <div id="carouselExampleInterval" className="carousel slide content-info" data-bs-ride="carousel">
            <div className="carousel-inner">
              {
                equipo.map( (p) => (
                  <div key={p.id} className={`carousel-item ${p.active && "active"}`} data-bs-interval="10000">
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-lg-4">
                          <img src={p.img} className="img-fluid rounded-start" alt="Luisa Andrea Eysele Gamboa"/>
                        </div>
                        <div className="col-lg-8">
                          <div className="card-body">
                            <h5 className="card-title">{p.nombre}</h5>
                            <p className="card-text">{p.descripcion}</p>
                            <p className="card-text"><small className="text-body-secondary">{p.rol}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
