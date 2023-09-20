import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import NavComponent from "./components/NavComponent";
import StudiesPage from "./views/StudiesPage";
import FooterComponent from "./components/FooterComponent";
import AgendarCita from "./views/AgendarCita";
import StudyPage from "./views/StudyPage";
import RegistroPage from "./views/RegistroPage";
import LoginPage from "./views/LoginPage";



const App = () => {
  // Verificar si el usuario ha iniciado sesión (por ejemplo, si hay datos de usuario en el localStorage)
  const userLoggedIn = localStorage.getItem("userData") !== null;
  return (
    <>
      {userLoggedIn ? (
        <NavComponentUser isLogged={true} />
      ) : (
        <NavComponent isLogged={false} />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/estudios/:usuario?" element={<StudiesPage />} />
        <Route path="/agendar-cita/:estudio?" element={<AgendarCita />} />
        <Route path="/estudio/:estudio" element={<StudyPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
      <FooterComponent/>
    </>
  );
};

export default App;
