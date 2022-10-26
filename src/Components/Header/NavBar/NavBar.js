import React from 'react'
import './NavBar.css'
import {NavLink} from 'react-router-dom'


export default (props)=>{
    return(
        <nav>
            <ul>
                <li>
                    <NavLink exact to={"/"}><i className={"fas fa-home"}><span>H</span></i></NavLink>
                </li>
                <li>
                    <NavLink to={"/shop"}><i className="fas fa-shopping-cart"><span>S</span></i><span style={props.state.AllProducts.length > 0 ? {color:"orange"} : {color:"red"}}>{props.state.AllProducts.length}</span></NavLink>
                </li>
                <li>
                    <NavLink to={"/basket"}><i className="fas fa-shopping-basket"></i><span style={props.state.arrayBasket.length > 0 ? {color:"orange"} : {color:"red"}}>{props.state.arrayBasket.length}</span></NavLink>
                </li>
                <li>
                    <NavLink to={"/actual"}><i className="fas fa-clipboard-check"><span></span></i><span style={props.state.Actual.length > 0 ? {color:"orange"} : {color:"red"}}>{props.state.Actual.length}</span></NavLink>
                </li>



                <div className={'login'}>
                    <div className={"adminControl"}>
                    {
                        props.loginClick ?
                            <div className={"admin"}>
                                <img style={{borderRadius:'100px'}} src={props.Admin.AdminImg} width={"50px"} height={"50px"} alt={"UserAdmin"}/>
                                <h2 style={{color:'yellow'}}>{props.Admin.Staff} </h2>
                            </div> : null
                    }

                    <div className={"adminInputsControl"}>
                    {
                        props.loginClick ? null : <>
                            <input
                                onChange={props.valLoginL.bind(this)}
                                type={"text"}
                                value = {props.valLogin}
                                placeholder={'Enter Your Login'}
                            />
                            <input
                                onChange={props.valPassWordP.bind(this)}
                                type={"password"}
                                value = {props.valPassWord}
                                placeholder={'Enter Your PassWord'}
                            />
                        </>
                    }
                        <button
                            className={props.loginClick ? 'btn btn-outline-danger' : 'btn btn-success'}
                            onClick={props.Login.bind(this)}
                        >
                            {props.loginClick ? 'Log Out' : 'Log In'}
                        </button>
                    </div>

                    </div>
                </div>

            </ul>
        </nav>
    )
}