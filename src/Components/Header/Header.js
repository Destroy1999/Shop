import React from 'react'
import NavBar from "./NavBar/NavBar";
import HeaderBackground from './HeaderImg/backHead.jpg'
import './Header.css'


export default (props) =>{
    return(
        <header>
            <div className={"Header"}
             style={{background:`url(${HeaderBackground})`,backgroundSize:"",
            backgroundRepeat:"", backgroundAttachment:""}}
        >

            <NavBar
                loginClick = {props.loginClick}
                valLogin = {props.valLogin}
                valPassWord = {props.valPassWord}
                valLoginL = {props.valLoginL}
                valPassWordP = {props.valPassWordP}
                state = {props.state}
                Admin = {props.Admin}
                Login = {props.Login}
            />



            <div className={"container-fluid"}>
                <div id={"demo"} className={"carousel slide"} data-ride={"carousel"}>


                    <ul className={"carousel-indicators"}>
                        {props.arrCarousel.map((e,i)=>{
                            return <li data-target={"#demo"} data-slide-to={`${i}`} className={e.CarouselClassActive}></li>
                        })}
                    </ul>


                    <div className={"carousel-inner"}>

                        {props.arrCarousel.map((e,i)=>{
                            return <div className={`carousel-item ${e.CarouselClassActive}`}>
                                <img src={e.CarouselImg} alt={"Fruit"} width={"100%"} height={"650px"}/>
                                <div className={"carousel-caption"}>
                                    <h1>{e.CarouselTitle}</h1>
                                    <p>{e.CarouselText}</p>
                                </div>
                            </div>
                        })}

                    </div>


                    <a className={"carousel-control-prev"} href={"#demo"} data-slide={"prev"}>
                        <i className={"fas fa-angle-left"}></i>
                    </a>
                    <a className={"carousel-control-next"} href={"#demo"} data-slide={"next"}>
                        <i className={"fas fa-angle-right"}></i>
                    </a>

                </div>
            </div>
            </div>
        </header>
    )
}