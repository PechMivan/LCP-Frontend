import StudyCard from '../components/StudyCard';
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import ButtonCita from '../components/ButtonCita';
export default function UserProfilePage() {
  const [user] = useLocalStorage('user', null);
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    const response = await fetch(`https://lcp-backend.onrender.com/api/v1/appointments/customer/${user.customerID}`);
    const appointmentsArray = await response.json();
    setAppointments(appointmentsArray);
    console.log(appointmentsArray);
  }
  useEffect(() => {

    getAppointments();

  }, [])


  return (
    <>
    <div className="container my-5 px-0">
        
        <div className="row col-12 d-flex justify-content-center align-items-center m-0">
        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end mb-2">
            <img className='profilepic' src="/assets/img/resultados/ProfileUser2.png" alt="" />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-start">
            <h3><strong>Nombre:</strong> {user.name} {user.lastName1} {user.lastName2}</h3>
            <h3><strong>Fecha de nacimiento: </strong> {user.birthDate}</h3>
            <h3> <strong> Correo electrónico: </strong> {user.email}</h3>
        </div>
        </div>
       

    </div>
    <div className="container my-5 px-0 tarjeta2 py-1">
        <div className="d-flex justify-content-center align-items-center tarjeta">
          <h3>MIS CITAS</h3>
        </div>
        <div className='m-5'>
        {
          appointments.length ? 
          appointments.map((appointment, index) => (<StudyCard key={index} appointment={appointment} index={index}/>))
          : <h1 className='text-center' style={{height:"200px"}}>Sin citas realizadas</h1>
        }

      <div className="d-flex justify-content-center align-items-center p-3 m-3 rounded-1">
        <ButtonCita icon/>
      </div>
        
        </div>
      </div>
    </>
  )
}
