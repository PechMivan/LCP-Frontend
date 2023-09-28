import { Link, useNavigate } from "react-router-dom";
import Logo from "/assets/img/Logo.svg";
import { useLocalStorage } from "@uidotdev/usehooks";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user", null);
  const LogOut = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <nav className="bg-gradient navbar navbar-dark navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/estudios">
                Estudios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contáctanos
              </Link>
            </li>
            {!user && (
              <li className="nav-item">
                <Link className="nav-link" to="/resultspage">
                  Resultados
                </Link>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <Link className="nav-link" to="/userprofile">
                  Perfil
                </Link>
              </li>
            )}
          </ul>

          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user && (
                <li className="nav-item" id="logout">
                  <button className="nav-link" onClick={LogOut}>
                    <i className="bi bi-box-arrow-right"></i> Cerrar sesión
                  </button>
                </li>
              )}

              {!user && (
                <li className="nav-item" id="login">
                  <Link className="nav-link" to="/login">
                    <i className="bi bi-box-arrow-left"></i> Inicio de sesión
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
