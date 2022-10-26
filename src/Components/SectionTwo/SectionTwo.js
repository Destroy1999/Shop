import React from 'react'
import Basket from "./Basket/Basket"
import SecTwoBackground from './SectionTwoImg/Basket.jpg'
import './SectionTwo.css'


export default (props)=>{
    return(
        <section>
        <div className={'SecTwo'} style={{background:`url(${SecTwoBackground})`,backgroundSize:"",
            backgroundRepeat:"", backgroundAttachment:""}}>
            <h1>Basket</h1>
            <div className={"BasketPrCoAndPrTotalPrice"}>
                <div className={"PrCount"}>
                    <i className={"fas fa-shopping-cart"}><span style={{color:'red',fontWeight:'bold'}}>{props.arrayBasket.length}</span></i>
                </div>
                <div className={"PrToPrice"}>
                    <h3> Total Price ` <span style={{color:'red',padding:'0 15px'}}> {props.TotalPrice} </span> AMD</h3>
                </div>
            </div>
            <div className={"ProductCard"}>
                {
                    props.arrayBasket.length > 0 ?
                        props.arrayBasket.map((e,i)=>{
                            return <Basket
                                ClassActual = {props.ClassActual}
                                ActualCard = {props.ActualCard}
                                DelCardBasket = {props.DelCardBasket}
                                BasketCount = {props.BasketCount}
                                BasketPrice = {props.BasketPrice}
                                product = {e}
                                indexProduct = {i}
                            />
                        }): <h5>Basket Is Empty</h5>
                }
            </div>
        </div>
        </section>
    )
}