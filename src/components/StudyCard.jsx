

export default function StudyCard() {
  return (
    <>
      <div className="container my-5 px-0 tarjeta2">
        <div className="d-flex justify-content-center align-items-center headcard">
          <h3> Tipo de analisis</h3>
        </div>
        <div className=" px-2 card">
          <p >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            labore ipsum deserunt minima amet, quia veniam quibusdam officia
            ipsam eum, totam nemo? Itaque, vero distinctio. Itaque, amet.
            Exercitationem, repellendus consequuntur.
          </p>

        </div>
          <div className="row">
            <div className="w-100 col-md-9 mb-md-0 mb-5 ">
              <div className="d-flex justify-content-center align-items-center footcard">
                <h3> Descargar</h3> {/* aquí iría el enlace de descarga para los pdf de resultados */}
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
