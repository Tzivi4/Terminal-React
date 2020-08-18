import React from 'react'
import Categories from './Categories'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../Components/Loading'
import FatalError from '../../Pages/FatalEror'
import url from '../config'

const CategoriesContainer = () => {
    const { data, loading, err } = useFetch(`${url}/categorias`)

    if (loading)
        return <Loading />
    if (err)
        return <FatalError />

    return <Categories
        data={data}
    />

}

export default CategoriesContainer