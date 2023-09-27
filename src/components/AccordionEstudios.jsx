/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import CreateComponent from "../components/CreateComponent";
import IndicationsComponent from "./IndicationsComponent";

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
                src={categoria.icono}
                alt={`Icono especialidad ${categoria.especialidad}`}
                style={{ width: "50px", marginRight: "10px" }}
              />
              {categoria.especialidad}
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
                  {categoria.estudios.map((estudio, key) => (
                    <tr key={key}>
                      <th>{key + 1}</th>
                      <td className="px-0">{estudio.nombre}</td>
                      <td align="center">

                        {/* ///// BOTÓN ELIMINAR ///// */}
                        <button
                          className={`btn btn-danger ${
                            usuario === "admin" ? "d-block" : "d-none"
                          }`}
                          onClick={() => eliminar(estudio.nombre)}
                        >
                          <i className="bi bi-trash"></i> Eliminar
                        </button>
                        
                        {/* ///// COMPONENTE INDICACIONES ///// */}
                        <IndicationsComponent
                          estudio={estudio.nombre}
                          index={key}
                          usuario={usuario}
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
