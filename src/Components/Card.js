import React from 'react'
import './Styles/Card.css'

const Card = ({ title, writer, img, year, category }) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 Card">
        <div className="card">
            <img className="card-img-top" src={img} alt="Card" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{writer} <br /> {category}, <span className="text-dark">{year}</span></p>
                <a href="#" className="btn btn-primary btn-block">Visitar</a>
            </div>
        </div>
    </div>

)

export default Card