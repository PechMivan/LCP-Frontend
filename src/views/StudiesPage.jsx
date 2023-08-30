import { useEffect, useState } from "react";
import AccordionEstudios from "../components/AccordionEstudios";
export default function StudiesPage() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://apilcp.onrender.com/api/estudios");
      const cat = await response.json();
      console.log(cat);
      setCategorias(cat);
    }
    getData();

  }, [])

  return (
    <>
      <div className="py-2 d-flex flex-column align-items-center">
        <h3 className="text-center">Estudios</h3>
        <div className="w-100 row">
            {
              categorias.map((categoria, index) => (
                <AccordionEstudios key={index} categoria={categoria} index={index} />
              ))
            }
        </div>
      </div>
    </>
  );
}
