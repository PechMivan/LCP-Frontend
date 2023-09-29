import StudyCard from '../components/StudyCard';
import { useEffect, useState, useRef } from "react";

export default function ResultsPage() {
    const [appointment, setAppointment] = useState(null);
    const [uuid, setUuid] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(uuid);
        getAppointmentByUuid(uuid);
    };

    const getAppointmentByUuid = async (uuid) => {
        const response = await fetch(`https://lcp-backend.onrender.com/api/v1/appointments/${uuid}`);
        const appointment = await response.json();
        setAppointment(appointment);
        console.log(appointment);
    }


    return (
            <form onSubmit={handleSubmit} style={{height:"400px"}}>
                    <div className='container-results d-flex justify-content-center align-items-center m-4'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-12'>
                                <h3 className="text-center mb-5">Consulta tus resultados</h3>
                            </div>
                            <div className='col-12 col-md-8 mb-3 mb-md-0'>
                                <input
                                    className="row form-control"
                                    placeholder="ID de estudio"
                                    type="text"
                                    value={uuid}
                                    onChange={(e) => setUuid(e.target.value)}
                                    style={{ marginRight: '20px', }}
                                />
                            </div>
                            <div className='col-12 col-md-2 d-flex justify-content-center '>
                                <button type="submit" className="btn btn-green" style={{color:"white"}}>
                                    Consultar
                                </button>
                            </div>
                            {
                                <StudyCard styles={{}} />
                                

                            }

                        </div>
                    </div>
            </form>
    )
}