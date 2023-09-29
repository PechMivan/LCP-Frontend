/* eslint-disable react/jsx-no-target-blank */
import { Link } from 'react-router-dom';
import Logo from '/assets/img/Logo.svg';
import AvisoPrivacidad from '../components/AvisoPrivacidad';
import TerminosCondiciones from '../components/TerminosCondiciones';
export default function FooterComponent() {
  return (
    <footer className="bg-gradient p-2">
      <div className="col mb-3">
        <Link className="navbar-brand" to="/"><img src={Logo} className="logo" /></Link>
      </div>
      <div className="d-flex">
        <div className="col mb-3">
          <h5 className="text-white"> Menú</h5>
          <ul className="nav flex-column md-flex-row">
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/estudios">Estudios</Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/contacto">Contáctanos</Link>
            </li>
            <li className="nav-item mb-2"> <AvisoPrivacidad /></li>
          </ul>
        </div>
        <div className="col mb-6">
          <h5 className="text-white">Redes sociales</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link text-white" target="_blank" href="https://www.facebook.com/Labponiente">
                <i className="bi bi-facebook m-1"></i>
                Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" target="_blank" href="https://www.instagram.com/clinicoponiente">
                <i className="bi bi-instagram m-1"></i>
                Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" target="_blank" href="/">
                <i className="bi bi-whatsapp m-1"></i>
                Whatsapp
              </a>
            </li>
            <li className="nav-item mb-2"><TerminosCondiciones /></li>
          </ul>



        </div>
      </div>
    </footer>
  )
}
