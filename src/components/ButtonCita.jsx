import { Link } from 'react-router-dom';
export default function ButtonCita({icon = false, estudio}) {
  return (
    <Link className="btn-green" to={ estudio ? `/agendar-cita/${estudio}` : "/agendar-cita"}>
      { icon && <i className="bi bi-calendar-date-fill icon"></i>}
      AGENDA TU CITA
    </Link>
  )
}
