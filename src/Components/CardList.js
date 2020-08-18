import React from 'react'
import Card from '../Components/Card'
import '../Components/Styles/CardList.css'

const CardList = ({ data }) => (
    <React.Fragment >
        <div className="col-12 row mt-4 Card-List">
            {data.map((article, i) => {
                return (
                    <Card
                        key={i}
                        {...article}
                    />
                )
            })}
        </div>
    </React.Fragment>
)

export default CardList