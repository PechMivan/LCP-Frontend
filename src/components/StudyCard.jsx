

export default function StudyCard({
  index,
  appointment
}) {
  return (
    <>
      <div className="container my-5 px-0 tarjeta2 col-12 col-lg-6 ">
        <div className="d-flex justify-content-center align-items-center headcard">
          <h3> {appointment.dateTime} </h3>
        </div>
        <div className=" px-2 card text-center">
          <ul>
            {
              appointment.studies.map((study, index) => {
                return(<li key={index} style={{listStyleType: "none"}}>{study.name}</li>);
              })
            }
          </ul>

        </div>
          <div className="row">
            <div className="w-100 col-md-9 mb-md-0 ">
              <div className="d-flex justify-content-center align-items-center footcard ">
               <h3><a style={{textDecoration:"none", color:"white"}} href={appointment.urlAnalisis} target="_blank"><i className="bi bi-eye-fill"> Ver Resultados</i></a></h3> 
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
