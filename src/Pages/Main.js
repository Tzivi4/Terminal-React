import React from 'react'
import CardList from '../Components/CardList'
import Header from '../Components/Header'

const Main = ({ data }) => (

    <React.Fragment>

        <Header />

        <CardList
            data={data}
        />
    </React.Fragment>


)

export default Main