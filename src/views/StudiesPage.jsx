import AccordionEstudios from "../components/AccordionEstudios";
import {categorias} from "./../modules/estudiosData"
export default function StudiesPage() {
  
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
