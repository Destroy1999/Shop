import React from 'react'
import ProductCard from "./ProductCard/ProductCard"
import SecOneBackground from "../SectionOne/SectionOneImg/Shop.jpg";
import './SectionOne.css'


export default (props)=>{
    return(
        <section>
        <div className={'SecOne'} style={{background:`linear-gradient(#8080804f,#8080804f),url(${SecOneBackground})`,backgroundSize:"",
            backgroundRepeat:"", backgroundAttachment:""}}>
            <h1>Shop</h1>

            {
                props.loginClick ?
                    <div className={"inputsAdd"}>
                        <input
                            className={""}
                            placeholder={'Product Name'}
                            type={"text"}
                            value={props.valOne}
                            onChange={props.valOnePN.bind(this)}
                        />

                        <input
                            className={""}
                            placeholder={'Count'}
                            type={"number"}
                            value={props.valTwo}
                            onChange={props.valTwoPC.bind(this)}
                        />

                        <input
                            className={""}
                            type={"number"}
                            placeholder={'Price'}
                            value={props.valThree}
                            onChange={props.valThreePP.bind(this)}
                        />

                        <input
                            className={""}
                            type={"url"}
                            placeholder={"Product IMG URL"}
                            value={props.valFour}
                            onChange={props.valFourPIU.bind(this)}
                        />

                        <button
                            className={'btnADD btn btn-success'}
                            onClick={props.AddANewProductToTShop.bind(this)}
                        >Add</button>
                    </div> : null
            }

            <div className={"btn-group"} role={"group"} aria-label={"Basic example"}>
                <button
                onClick={props.FilterAll.bind(this)}
                >All Products</button>
                <button
                    type={"button"}
                    className={"btn btn-success"}
                    onClick={props.FilterFruits.bind(this)}
                >Fruits</button>
                <button
                    type={"button"}
                    className={"btn btn-warning"}
                    onClick={props.FilterVegetables.bind(this)}
                >Vegetables</button>
            </div>

            {props.state.ProductInfo !== '' ?
                <div className={"productInfoMore"} id={"productInfoMore"}>
                    <div className={"pCardInfoMore"}>
                        <button
                            className={"btn btn-danger"}
                            onClick={props.ClosePCardInfo.bind(this,props.product)}
                        >X</button>
                        <div className={"PInfoTextSector"}>
                            <h2>{props.state.ProductInfo.ProductName}</h2>
                            <div className="star-ico-sector">
                                <div className="line"></div>
                                <div className='ico-star'><i className="fas fa-star"></i></div>
                                <div className="line"></div>
                            </div>
                            <img src={props.state.ProductInfo.ProductImg} alt={props.state.ProductInfo.ProductName}/>
                            <h3>Count ` {props.state.ProductInfo.Count} KG</h3>
                            <h3>Price ` {props.state.ProductInfo.Price} 'AMD' for 1KG</h3>
                            <div className={"Syllabification"}></div>
                            <h4>{props.state.ProductInfo.ProductMoreInfoTitle}</h4>
                            <p>{props.state.ProductInfo.ProductMoreInfoText}</p>
                        </div>
                    </div>
                </div>: null}

           <div className="ProductCard">
               {
                 props.ShopProducts.length > 0 ?
                     props.ShopProducts.map((e,i)=>{
                         return <ProductCard
                             DiscountD = {props.DiscountD}
                             ClosePCardInfo = {props.ClosePCardInfo}
                             state = {props.state}
                             ProductMoreInfo = {props.ProductMoreInfo}
                             ClassActual = {props.ClassActual}
                             ActualCard = {props.ActualCard}
                             AddCardBasket = {props.AddCardBasket}
                             DeleteCard ={props.DeleteCard}
                             loginClick = {props.loginClick}
                             Admin = {props.Admin}
                             ChooseQuantityCountMinus = {props.ChooseQuantityCountMinus}
                             ChooseQuantityCountMinusMinus = {props.ChooseQuantityCountMinusMinus}
                             ChooseQuantityCountPlus = {props.ChooseQuantityCountPlus}
                             ChooseQuantityCountPlusPlus = {props.ChooseQuantityCountPlusPlus}
                             ChooseQuantityCountPlusBtn = {props.ChooseQuantityCountPlusBtn}
                             ChooseQuantityCountMinusBtn = {props.ChooseQuantityCountMinusBtn}
                             ChooseQuantityCountMinusMinusBtn = {props.ChooseQuantityCountMinusMinusBtn}
                             ChooseQuantityCountPlusPlusBtn = {props.ChooseQuantityCountPlusPlusBtn}
                             ShopCountMinus = {props.ShopCountMinus}
                             ShopCountPlus = {props.ShopCountPlus}
                             product = {e}
                             indexProduct = {i}
                         />
                     }): props.AllProducts.map((e,i)=>{
                         return <ProductCard
                             DiscountD = {props.DiscountD}
                             ClosePCardInfo = {props.ClosePCardInfo}
                             state = {props.state}
                             ProductMoreInfo = {props.ProductMoreInfo}
                             ClassActual = {props.ClassActual}
                             ActualCard = {props.ActualCard}
                             AddCardBasket = {props.AddCardBasket}
                             DeleteCard ={props.DeleteCard}
                             loginClick = {props.loginClick}
                             Admin = {props.Admin}
                             ChooseQuantityCountMinus = {props.ChooseQuantityCountMinus}
                             ChooseQuantityCountMinusMinus = {props.ChooseQuantityCountMinusMinus}
                             ChooseQuantityCountPlus = {props.ChooseQuantityCountPlus}
                             ChooseQuantityCountPlusPlus = {props.ChooseQuantityCountPlusPlus}
                             ChooseQuantityCountPlusBtn = {props.ChooseQuantityCountPlusBtn}
                             ChooseQuantityCountMinusBtn = {props.ChooseQuantityCountMinusBtn}
                             ChooseQuantityCountMinusMinusBtn = {props.ChooseQuantityCountMinusMinusBtn}
                             ChooseQuantityCountPlusPlusBtn = {props.ChooseQuantityCountPlusPlusBtn}
                             ShopCountMinus = {props.ShopCountMinus}
                             ShopCountPlus = {props.ShopCountPlus}
                             product = {e}
                             indexProduct = {i}
                         />
                     })
               }
           </div>

        </div>
        </section>
    )
}