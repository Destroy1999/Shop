import React from 'react'
import './ActualCard.css'


export default (props)=>{
    return(
        <div className={`pCard ${props.product.actual ? props.product.ClassActual : ''}`} key = {props.product.id}>

            <div className={"pImgCard"}>
                <img src={props.product.ProductImg} width={'90%'} height={'90%'} alt=""/>
            </div>

            <div className={"pSecText"}>
                <div className={"pDescription"}>
                    <h2>Name ` {props.product.ProductName}</h2>
                    <h3>Count ` {props.product.Count} KG</h3>
                    <h3>Price ` 1 KG={props.product.Price} AMD</h3>
                </div>
                <div className={"pBtnCards"}>
                    <button
                        className={'btn btn-primary'}
                        onClick={props.ActualCard.bind(this,props.product)}
                    >Actual</button>
                </div>
            </div>

        </div>
    )
}