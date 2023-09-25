import StudyCard from '../components/StudyCard';
import { useLocalStorage } from "@uidotdev/usehooks";
export default function UserProfilePage() {
  const [user] = useLocalStorage('user', null);
  return (
    <>
    <div className="container my-5 px-0">
        
        <div className="row col-12 d-flex justify-content-center align-items-center m-0">
        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end mb-2">
            <img className='profilepic' src="/assets/img/resultados/ProfileUser.png" alt="" />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-start">
            <h3>Nombre: {user.name} {user.lastNameP} {user.lastNameM}</h3>
            <h3>Fecha de nacimiento: {user.birthdate}</h3>
            <h3>Correo electrónico: {user.email}</h3>
        </div>
        </div>
       

    </div>
    <div className="container my-5 px-0 tarjeta2">
        <div className="d-flex justify-content-center align-items-center tarjeta">
          <h3>MIS RESULTADOS</h3>
        </div>
        <div className="m-4">
          < StudyCard />
          <div className="row  mx-2">
       
          </div>
        </div>
      </div>
    </>
  )
}
