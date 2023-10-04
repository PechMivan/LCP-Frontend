/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import CreateComponent from "../components/CreateComponent";
import IndicationsComponent from "./IndicationsComponent";
import ButtonCita from '../components/ButtonCita';

export default function AccordionEstudios({
  index,
  categoria,
  getData,
  usuario,
}) {
  const [estudio, setEstudio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const eliminar = async (analisis) => {
    await fetch(
      `https://apilcp.onrender.com/api/estudios/${encodeURI(analisis)}`,
      { method: "DELETE" }
    );
    getData();
    toast.success("El estudio se ha eliminado.");
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <div
        className="accordion accordion-flush col-12"
        id={`accordionFlushExample${index}`}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle={`collapse`}
              data-bs-target={`#flush-collapseOne${index}`}
              aria-expanded="false"
              aria-controls={`#flush-collapseOne${index}`}
            >
              <img
                src={categoria.urlCategory}
                alt={`Icono especialidad ${categoria.name}`}
                style={{ width: "50px", marginRight: "10px" }}
              />
              {categoria.name}
            </button>
          </h2>
          <div
            id={`flush-collapseOne${index}`}
            className="accordion-collapse collapse"
            data-bs-parent={`#accordionFlushExample${index}`}
          >
            <div className="accordion-body p-0 pb-2">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th className="px-0" scope="col">
                      Estudio
                    </th>
                    <th scope="col" className="text-center">
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categoria.studies.map((estudio, key) => (
                    <tr key={key}>
                      <th>{key + 1}</th>
                      <td className="px-0">{estudio.name}</td>
                      <td align="center">

                        {/* ///// BOTÓN ELIMINAR ///// */}
                        <button
                          className={`btn btn-danger ${
                            usuario === "admin" ? "d-block" : "d-none"
                          }`}
                          onClick={() => eliminar(estudio.name)}
                        >
                          <i className="bi bi-eye-slash-fill"></i> Deshabilitar
                        </button>

                        {/* ///// BOTÓN AGENDAR CITA ///// */}
                        <Link className={`btn btn-success2 mb-1 ${usuario === "admin" ? "d-none" :"d-block"}`} to={`/agendar-cita/${estudio.name}`}>Agendar Cita</Link>
                        

                        {/* ///// COMPONENTE INDICACIONES ///// */}
                        <IndicationsComponent
                          estudio={estudio.name}
                          index={estudio.studyId}
                          usuario={usuario}
                          indications={estudio.indications}
                          tiempo={estudio.waitTime}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* ///// COMPONENTE CREAR ESTUDIOS ///// */}
              <CreateComponent
                categoria={categoria}
                getData={getData}
                usuario={usuario}
                index={index}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
