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
import ResultsPage from "./views/ResultsPage";
import UserProfilePage from "./views/UserProfilePage";



const App = () => {
  
  return (
    <>
    
      <NavComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/estudios/:usuario?" element={<StudiesPage />} />
        <Route path="/agendar-cita/:estudio?" element={<AgendarCita />} />
        <Route path="/estudio/:estudio" element={<StudyPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resultspage" element={<ResultsPage />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
        
      </Routes>
      <FooterComponent/>
    </>
  );
};

export default App;
