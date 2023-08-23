import { Link } from 'react-router-dom';
export default function ButtonCita({icon = false}) {
  return (
    <Link className="px-4 py-3 text-white bg-green border-0 rounded-pill btn-green" to="/agendar-cita">
      { icon && <i className="bi bi-calendar-date-fill icon"></i>}
      AGENDA TU CITA
    </Link>
  )
}
