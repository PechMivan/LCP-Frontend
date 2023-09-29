import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import AccordionEstudios from "../components/AccordionEstudios";
import PlaceHolderComponent from "../components/PlaceHolderComponent";
export default function StudiesPage() {
  const { usuario } = useParams();
  const [categorias, setCategorias] = useState([]);
  const [ cat1, setCat1 ] = useState([]);
  const [ cat2, setCat2 ] = useState([]);

  const getData = async () => {
    const response = await fetch("https://lcp-backend.onrender.com/api/v1/categories");
    const cat = await response.json();
    setCat1(cat.slice(0,cat.length/2));
    setCat2(cat.slice(cat.length/2));
    setCategorias(cat);
    console.log(cat);
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
            <div className="col-12 col-md-6">
            {
              cat1.map((categoria, index) => (
                <AccordionEstudios key={index} categoria={categoria} index={index} getData={getData} usuario={usuario ? usuario : 'usuario'}/>
              ))
            }
            </div>
            <div className="col-12 col-md-6">
            {
              cat2.map((categoria, index) => (
                <AccordionEstudios key={index} categoria={categoria} index={index+cat1.length} getData={getData} usuario={usuario ? usuario : 'usuario'}/>
              ))
            }
            </div>
        </div>
      </div>
    </>
  );
}
