import React from 'react'
import './Styles/Card.css'

const Card = ({ title, writer, img, year, category, firstColor, secondColor }) => (
    <div className="card mx-auto Card-Body"
        style={{
            background: `linear-gradient(to right, ${firstColor || '#56CCF2'}, ${secondColor || '#2F80ED'})`
        }}
    >
        <div className="card-body">
            <div className="row center">
                <div>
                    <img width="200" src={img} alt="card" className="float-right" />
                </div>
                <div className="col-6 Card-Info">
                    <h1>{title}</h1>
                    <p>{category} por {writer}, {year}</p>
                </div>
            </div>

        </div>

    </div>
)

export default Card