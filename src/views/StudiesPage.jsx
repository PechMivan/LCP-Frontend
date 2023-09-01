import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import AccordionEstudios from "../components/AccordionEstudios";
import PlaceHolderComponent from "../components/PlaceHolderComponent";
export default function StudiesPage() {
  const { usuario } = useParams();
  const [categorias, setCategorias] = useState([]);

  const getData = async () => {
    const response = await fetch("https://apilcp.onrender.com/api/estudios");
    const cat = await response.json();
    console.log("Obtenemos Datos");
    setCategorias(cat);
  }
  useEffect(() => {

    getData();

  }, [])

  return (
    <>
      <div className="py-2 d-flex flex-column align-items-center">
        <h3 className="text-center">Estudios</h3>
        <div className={`w-100 ${categorias.length === 0 ? "d-block" : "d-none"} `}>
          <PlaceHolderComponent/>
        </div>
        <div className="w-100 row">
            {
              categorias.map((categoria, index) => (
                <AccordionEstudios key={index} categoria={categoria} index={index} getData={getData} usuario={usuario ? usuario : 'usuario'}/>
              ))
            }
        </div>
      </div>
    </>
  );
}
