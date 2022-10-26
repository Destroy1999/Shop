import React from 'react'
import './Basket.css'


export default (props)=>{
    return(
        <div className={`pCard ${props.product.actual ? props.product.ClassActual : ''}`} key = {props.product.id}>
                <button
                    className={'btn btn-danger deleteBTN'}
                    onClick={props.DelCardBasket.bind(this,props.product,props.indexProduct)}
                ><i className="fas fa-times"></i></button>
            <div className={"pImgCard"}>
                <img src={props.product.ProductImg} width={'90%'} height={'90%'} alt=""/>
            </div>
            <div className={"pSecText"}>
                <div className={"pDescription"}>
                    <h2>Name ` {props.product.ProductName}</h2>
                    <h3>Count ` {props.product.BasketCount} KG</h3>
                    <h3>Price ` {props.product.BasketPrice} AMD</h3>
                </div>
                <div className={"pBtnCards"}>
                    <button
                        className={props.product.actual ? 'btn btn-primary' : 'btn btn-outline-primary'}
                        onClick={props.ActualCard.bind(this,props.product)}
                    >Actual</button>
                </div>
            </div>
        </div>
    )
}