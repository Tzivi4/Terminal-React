import React from 'react'
import useFetch from '../Hooks/useFetch'
import Main from '../Pages/Main'
import Loading from '../Components/Loading'
import url from '../url'
import FatalError from '../Pages/500'

const MainContainer = () => {

    const { data, loading, err } = useFetch(`${url}/inicio`)

    if (loading)
        return <Loading />
    if (err)
        return <FatalError />

    return <Main id="root"
        data={data}
    />
}

export default MainContainer