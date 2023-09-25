import { Link } from 'react-router-dom';
import ErrorPageImg from '/assets/img/404/errorpage3.gif'

export default function ErrorPage() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center col-md-12 container-error404">            
        <div className="row text-center ">
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <p className="error404">404</p>
            <h3 className="error-Text mb-5">PÁGINA NO ENCONTRADA</h3>
              <div className="d-grid gap-3 mx-auto">
                <Link to="/">
                  <button type="submit" className="btn btn-green">
                    Volver al inicio
                  </button>
                </Link>
              </div>    
          </div>
            <div className="col-md-6 col-sm-12 col-lg-6 mx-auto">
              <img className="img-error" src={ErrorPageImg} />    
            </div>    
        </div>               
      </div>      
    </div>
  )
}

