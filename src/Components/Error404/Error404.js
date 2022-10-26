import React from 'react'
import './Error404.css'
import {Link} from 'react-router-dom'

export default ()=>{
    return(
        <>
            <h1>Error404 url not undefined</h1>
            <Link to={"/"} >Back to Home</Link>
        </>
    )
}