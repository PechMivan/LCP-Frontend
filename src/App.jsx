import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import NavComponent from "./components/NavComponent";
import StudiesPage from "./views/StudiesPage";
import FooterComponent from "./components/FooterComponent";
import AgendarCita from "./views/AgendarCita";

const App = () => {
  return (
    <>
      <NavComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/estudios" element={<StudiesPage />} />
        <Route path="/agendar-cita" element={<AgendarCita />} />
      </Routes>
      <FooterComponent/>
    </>
  );
};

export default App;
