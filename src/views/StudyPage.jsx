import { useParams } from "react-router-dom";

const testArray = [
  {
    nombre: "prueba",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur officia aliquam veritatis consequatur quos fugit assumenda suscipit quas. Aperiam quod fuga maxime iure eos, repellat vitae dolore libero delectus!",
    img: "/assets/img/about/vision.jpg",
  },
  {
    nombre: "prueba",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur officia aliquam veritatis consequatur quos fugit assumenda suscipit quas. Aperiam quod fuga maxime iure eos, repellat vitae dolore libero delectus!",
    img: "/assets/img/about/vision.jpg",
  },
  {
    nombre: "prueba",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur officia aliquam veritatis consequatur quos fugit assumenda suscipit quas. Aperiam quod fuga maxime iure eos, repellat vitae dolore libero delectus!",
    img: "/assets/img/about/vision.jpg",
  },
];

export default function StudyPage() {
  const { estudio } = useParams();
  return (
    <>
      <div className="w-100 overflow-hidden p-2">
        <div className="row gx-5 justify-content-center my-5 p-4">
          <div className="col-lg-8 p-4 p-lg-2">
            <div className="row">
              <h3 className="text-center">{estudio}</h3>
              <img
                className="img-info img-fluid"
                src="/assets/img/about/vision.jpg"
                alt="Imagen vision"
              />
            </div>
            <div className="row my-5">
              <p className="info lh-lg fs-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum quos eligendi adipisci atque, obcaecati maxime ipsa
                nisi, vitae, temporibus quibusdam voluptate beatae omnis?
                Numquam quidem iusto itaque animi. Neque, exercitationem!
                Officia commodi nisi repellat fugiat sint perferendis accusamus
                neque voluptatibus ratione modi. Nobis repudiandae pariatur
                facere sed ullam totam, eum molestiae fuga tempora odio
                accusantium placeat, molestias ad quae alias? Ipsum sint
                molestiae vitae adipisci. Perspiciatis itaque molestiae,
                reprehenderit aut optio explicabo et? Sapiente recusandae earum
                cupiditate et maxime deserunt. Quod sapiente nesciunt obcaecati
                porro sed omnis quia asperiores labore.
              </p>
            </div>

            <div className="row content-info">
              <div className="row d-flex justify-content-around">
                <div className="col-6">
                  <h3>Indicaciones</h3>
                </div>
                <div className="col-6">
                  <h3 className="bi bi-clock-history text-center">
                    {" "}
                    1 - 2 días
                  </h3>
                </div>
              </div>
              <div className="row d-flex justify-content-around m-0 p-4">
                <ul className="my-3">
                  <li>
                    Al agendar tu cita, asegurarás tu lugar en la fecha elegida.
                  </li>
                  <li>
                    Si el paciente es menor de edad, deberá acudir con un
                    adulto; padre, madre o tutor.
                  </li>
                  <li>Evitar tomar alcohol o cualquier sustancia similar.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <h3 className="text-center">Otros servicios</h3>
            {testArray.map((estudio, key) => {
              return (
                <div class="card my-3 content-info">
                  <img src={estudio.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{estudio.nombre}</h5>
                    <p class="card-text">{estudio.descripcion}</p>
                    <a href="#" class="btn btn-primary">
                      Ver
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
