import React from 'react'
import '../Components/Styles/Errors.css'
import NotFoundImg from '../Images/404.png'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <React.Fragment>
        <div className="text-center">
            <h1 className="Error_Text">Error: 404 Page Not Found</h1>
            <img src={NotFoundImg} alt="404 NotFound" className="Error_Image" />
        </div>
        <Link to="/inicio" className="d-flex p-0 m-5">
            <button className="col-2 btn btn-danger mx-auto">
                Inicio
            <i class="fas fa-arrow-right ml-2 text-center"></i>
            </button>
        </Link>
    </React.Fragment>
)

export default NotFound