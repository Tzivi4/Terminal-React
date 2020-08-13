import React from 'react'
import Card from '../Components/Card'

const CardList = ({ data }) => (
    <React.Fragment>
        {data.map((article, i) => {
            console.log(data)
            return (
                <Card
                    key={i}
                    {...article}
                />
            )
        })}
    </React.Fragment>
)

export default CardList