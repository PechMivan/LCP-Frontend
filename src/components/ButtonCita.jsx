import { Link } from 'react-router-dom';
export default function ButtonCita({icon = false}) {
  return (
    <Link className="btn-green" to="/agendar-cita">
      { icon && <i className="bi bi-calendar-date-fill icon"></i>}
      AGENDA TU CITA
    </Link>
  )
}
