import React from 'react'
import './RandomProduct.css'
import BackGif from './BackGif/Random.gif'
import RandomCard from "./RandomCard/RandomCard";

export default (props)=>{
    return(
        <section>
            <div className={'SecRandom'}>
                <div className={"RandomTitleBtn"}>
                <h1>Random Product</h1>
                <button className={"btn btn-success"} onClick={props.RandomProducts.bind(this,props.product)}>Random Products</button>
                </div>
                <div className={"ProductCard"} style={{background:`linear-gradient(#8080804f,#8080804f),url(${BackGif})`,backgroundSize:"",
                    backgroundRepeat:"", backgroundAttachment:""}}>
                    {
                        props.state.arrayRandom.length > 0 ?
                            props.state.arrayRandom.map((e,i)=>{
                                return <RandomCard
                                    state = {props.state}
                                    product = {e}
                                    indexProduct = {i}
                                />
                            }): <h5 >Actual Is Empty</h5>
                    }
                </div>
            </div>
        </section>
    )
}
