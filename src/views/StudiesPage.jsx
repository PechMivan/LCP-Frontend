import AccordionEstudios from "../components/AccordionEstudios";
import {categorias} from "./../modules/estudiosData"
export default function StudiesPage() {
  
  return (
    <>
      <div className="py-2">
        <h3 className="text-center">Estudios</h3>
        <div className="row">
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
