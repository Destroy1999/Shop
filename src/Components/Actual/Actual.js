import React from 'react'
import './Actual.css'
import ActualCard from './ActualCard/ActualCard'


export default (props)=>{
    return(
        <section>
            <div className={'SecActual'}>
                <h1>Actual</h1>
                <div className={"ProductCard"}>
                    {
                        props.Actual.length > 0 ?
                            props.Actual.map((e,i)=>{
                                return <ActualCard
                                    ClassActual = {props.ClassActual}
                                    ActualCard = {props.ActualCard}
                                    Actual = {props.Actual}
                                    product = {e}
                                    indexProduct = {i}
                                />
                            }): <h5 >Actual Is Empty</h5>}
                </div>
            </div>
        </section>
    )
}