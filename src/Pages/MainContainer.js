import React from 'react'
import Main from './Main'
import useFetch from '../Hooks/useFetch'
import Loading from '../Components/Loading'
import FatalError from '../Pages/FatalEror'
import url from '../Components/config'

const CategoriesContainer = () => {

    const { data, loading, err } = useFetch(`${url}/inicio`)

    if (loading)
        return <Loading />
    if (err)
        return <FatalError />

    return <Main
        data={data}
    />

}

export default CategoriesContainer