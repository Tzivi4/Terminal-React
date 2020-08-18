import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Tab from '../Components/Tab'
import CardList from '../Components/CardList'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

const Main = ({ data }) => (

    <React.Fragment>

        <NavBar/>

        <CategoriesContainer />

        <CardList
            data={data}
        />

        <Tab />

    </React.Fragment>


)

export default Main