import React from 'react'
import './ProductCard.css'


export default (props)=>{
    return(
        <div className={`pCard product_${props.indexProduct+1} ${props.product.actual ? props.product.ClassActual : ''}`} key = {props.product.id}>
            { props.loginClick ?
                <button
                    className={'btn btn-danger deleteBTN'}
                    onClick={props.DeleteCard.bind(this,props.indexProduct,props.product)}
                ><i className="fas fa-times"></i></button> : null
            }
            <div className={"pImgCard"}>
                <img src={props.product.ProductImg} width={'90%'} height={'90%'} alt=""/>
            </div>
            <div className={"pSecText"}>
                <div className={"pDescription"}>
                    <h2>Discount {props.product.Discount}% {props.state.loginClick ? <input onChange={props.DiscountD.bind(this,props.product)} value={props.product.Discount} min={"0"} max={"100"} type={"number"}/>:null}</h2>
                    <h2>Name ` {props.product.ProductName}</h2>
                    <h3>Count ` {props.product.Count} KG {props.loginClick ? <><button className={"btn btn-outline-danger"} onClick={props.ShopCountMinus.bind(this,props.product)}>-</button> <button className={"btn btn-outline-success"} onClick={props.ShopCountPlus.bind(this,props.product)}>+</button></>:null}</h3>
                    <div className={"ChooseQuantityCount"}>
                        <button
                            className={"btn btn-outline-danger"}
                            onClick={props.ChooseQuantityCountMinusMinus.bind(this,props.product)}
                            disabled={props.product.ChooseQuantityCountMinusMinusBtn}
                        ><i className={"fas fa-angle-double-left"}></i></button>
                        <button
                            className={"btn btn-outline-danger"}
                            onClick={props.ChooseQuantityCountMinus.bind(this,props.product)}
                            disabled={props.product.ChooseQuantityCountMinusBtn}
                        ><i className={"fas fa-minus"}></i></button>
                        <span style={{color:"red",fontSize:'30px'}}>{props.product.ChooseQuantityCount}</span>
                        <button
                            className={"btn btn-outline-success"}
                            onClick={props.ChooseQuantityCountPlus.bind(this,props.product)}
                            disabled={props.product.ChooseQuantityCountPlusBtn}
                        ><i className={"fas fa-plus"}></i></button>
                        <button
                            className={"btn btn-outline-success"}
                            onClick={props.ChooseQuantityCountPlusPlus.bind(this,props.product)}
                            disabled={props.product.ChooseQuantityCountPlusPlusBtn}
                        ><i className={"fas fa-angle-double-right"}></i></button>
                    </div>
                    <h3>Price ` 1 KG={props.product.Discount > 0 ? <><del style={{color:"red"}}>{props.product.Price}</del> <br/> <new>New Price ={props.product.Discount > 99 ? "Free" : <newprice style={{color:"lime"}}>{props.product.NewDiscountPrice}</newprice> }</new></> : <price>{props.product.Price}</price> } AMD</h3>
                </div>
                <div className={"pBtnCards"}>
                    <button
                        className={'btn btn-success'}
                        onClick={props.AddCardBasket.bind(this,props.product)}
                    >+<i className="fas fa-cart-plus"></i></button>
                    <button
                        className={props.product.actual ? 'btn btn-primary' : 'btn btn-outline-primary'}
                        onClick={props.ActualCard.bind(this,props.product)}
                    >Actual</button>
                    <button
                        className={"btn btn-info"}
                        onClick={props.ProductMoreInfo.bind(this,props.product)}>Learn More</button>
                </div>
            </div>
        </div>
    )
}