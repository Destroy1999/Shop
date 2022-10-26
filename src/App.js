import React,{Component} from 'react'
import Header from "./Components/Header/Header";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import Footer from "./Components/Footer/Footer";
import Actual from "./Components/Actual/Actual";
import RandomProduct from "./Components/RandomProduct/RandomProduct";
import Error404 from "./Components/Error404/Error404";
import './App.css';
import {Route,Redirect,Switch} from "react-router-dom";



export default class App extends Component{


    state = {
        AllProducts:[
            {
                id:0,
                ProductName:'Apple',
                ProductType:'Fruit',
                ProductImg:'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png',
                Price:400,
                Discount:'0',
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:20,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:1,
                ProductName:'Banana',
                ProductType:'Fruit',
                ProductImg:'https://hy.medicine-worlds.com/01_banany-pri-pankreatite.jpg',
                Price:700,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:18,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:2,
                ProductName:'Apricot',
                ProductType:'Fruit',
                ProductImg:'https://chesenbio.com/wp-content/uploads/2019/11/1-MCP-on-apricot.png',
                Price:600,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:22,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:3,
                ProductName:'Grape',
                ProductType:'Fruit',
                ProductImg:'https://foodcity.ru/storage/products/October2018/dSTg1Wk44PJACMVYH1Z5.jpg',
                Price:450,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:150,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:4,
                ProductName:'Limon',
                ProductType:'Fruit',
                ProductImg:'https://fermoved.ru/wp-content/uploads/2018/05/frukt-ovosh-ili-yagoda.jpg',
                Price:550,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:3,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:5,
                ProductName:'Granate',
                ProductType:'Fruit',
                ProductImg:'https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2014/01/10/Production/Health/Images/bigstock-Half-of-pomegranate-on-a-white-12359999.jpg?t=20170517',
                Price:2500,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:6,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:6,
                ProductName:'Pineapple',
                ProductType:'Fruit',
                ProductImg:'https://images.av.ru/av.ru/product/h53/h1b/8953463635998.jpg',
                Price:5000,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:6,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:7,
                ProductName:'Strawberry',
                ProductType:'Fruit',
                ProductImg:'https://foodcity.ru/storage/products/October2018/7wtGdiWLVqhsFNJIzGgT.jpg',
                Price:1500,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:80,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:8,
                ProductName:'Pear',
                ProductType:'Fruit',
                ProductImg:'https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png',
                Price:350,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:47,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:9,
                ProductName:'Сabbage',
                ProductType:'Vegetables',
                ProductImg:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
                Price:500,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:10,
                ProductName:'Tomato',
                ProductType:'Vegetables',
                ProductImg:'https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=',
                Price:250,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:11,
                ProductName:'Corn',
                ProductType:'Vegetables',
                ProductImg:'https://previews.123rf.com/images/atoss/atoss1412/atoss141200023/34217883-single-an-ear-of-corn-isolated-clipping-path.jpg',
                Price:1200,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:12,
                ProductName:'Pepper',
                ProductType:'Vegetables',
                ProductImg:'https://images.ctfassets.net/6jpeaipefazr/1TOr5LlvLrYUqKCky4x7Xe/a93a8da6d9f1e52f2e8f5204c5374b56/co-op-red-peppers.jpg?fm=jpg&fl=progressive&q=60&w=400&h=400&fit=scale',
                Price:150,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:13,
                ProductName:'Cucumber',
                ProductType:'Vegetables',
                ProductImg:'https://www.kroger.com/product/images/large/front/0000000094062',
                Price:350,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:14,
                ProductName:'Carrot',
                ProductType:'Vegetables',
                ProductImg:'https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg',
                Price:350,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:15,
                ProductName:'Brocoli',
                ProductType:'Vegetables',
                ProductImg:'https://cdn.shopify.com/s/files/1/1891/6405/products/shop-online-from-china-vegetables-brocoli-fresh-food-in-dubai-and-abu-dhabi-24624346702_1200x1200.jpg?v=1536787867',
                Price:550,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:16,
                ProductName:'Pumpkin',
                ProductType:'Vegetables',
                ProductImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EsJ_xnLuSkndmuWJPaK6KwzJLX01-8nxPw&usqp=CAU',
                Price:2500,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:17,
                ProductName:'Potato',
                ProductType:'Vegetables',
                ProductImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHLJVJxBcO2rNj906m5bauCpzG-AaZeGYe5XsKV-s9CAczsTpm59rO3B63g1ZeRBgJiM&usqp=CAU',
                Price:250,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
            {
                id:18,
                ProductName:'Onion',
                ProductType:'Vegetables',
                ProductImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG',
                Price:150,
                Discount:0,
                NewDiscountPrice:0,
                BasketPrice:0,
                Count:50,
                ChooseQuantityCount:1,
                ChooseQuantityCountPlusBtn:false,
                ChooseQuantityCountMinusBtn:true,
                ChooseQuantityCountPlusPlusBtn:false,
                ChooseQuantityCountMinusMinusBtn:true,
                BasketCount:0,
                ProductMoreInfoTitle:'Lorem ipsum dolor sit amet.',
                ProductMoreInfoText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta dolores dolorum error, iure, libero, minima minus odit quod repellat saepe sequi vel voluptas voluptate.',
                actual:false,
                x:false,
            },
        ],
        ShopProducts:[],
        arrayBasket:[],
        arrCarousel:[
            {
                id:0,
                CarouselImg:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg",
                CarouselTitle:"Welcome To My First Shop",
                CarouselText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, repellat!",
                CarouselClassActive:"active",
            },
            {
                id:1,
                CarouselImg:"https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature_thumb.jpg?sfvrsn=7abe71fe_4",
                CarouselTitle:"Welcome To My First Shop",
                CarouselText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, repellat!",
                CarouselClassActive:"",
            },
            {
                id:2,
                CarouselImg:"https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_2100,h_1427,c_scale/v1588088840/iStock-467652436.jpg",
                CarouselTitle:"Welcome To My First Shop",
                CarouselText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, repellat!",
                CarouselClassActive:"",
            },
            {
                id:3,
                CarouselImg:"https://images.theconversation.com/files/232033/original/file-20180815-2906-h00fij.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
                CarouselTitle:"Welcome To My First Shop",
                CarouselText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, repellat!",
                CarouselClassActive:"",
            },
        ],
        Actual:[],
        arrayRandom:[],
        Admin:{
                Login:'Admin',
                PassWord:'Admin',
                AdminImg:'https://clck.ru/SsiW5',
                Staff:'Admin'
            },
        TotalPrice:0,
        loginClick:false,
        valLogin:'',
        valPassWord:'',
        valOne:'',
        valTwo:0,
        valThree:0,
        valFour:'',
        ClassActual:'',
        ProductInfo:'',
    }




    Login = () =>{
        if(this.state.Admin.Login === this.state.valLogin && this.state.Admin.PassWord === this.state.valPassWord){
            this.state.loginClick = !this.state.loginClick
            this.setState({})
        }else{
            alert('sxal Login kam password')
        }
    }

    AddCardBasket = (e)=>{
        let productBasketFind = this.state.arrayBasket.find( arrB => arrB === e)
        if(productBasketFind === undefined){
            e.Count -= e.ChooseQuantityCount
            e.BasketCount += e.ChooseQuantityCount
            this.state.arrayBasket.unshift(e)
            this.setState({})
        }else if(productBasketFind !== undefined && e.Count >= e.ChooseQuantityCount){
            e.Count -= e.ChooseQuantityCount
            e.BasketCount += e.ChooseQuantityCount
            this.setState({})
        }


        if(e.Count <= e.ChooseQuantityCount){
            e.ChooseQuantityCount = e.Count
            e.ChooseQuantityCountMinusBtn = false
            e.ChooseQuantityCountPlusBtn = true
            this.setState({})
        }

        if(e.Discount > 0){
            e.BasketPrice = e.BasketCount * e.NewDiscountPrice
        }else{
            e.BasketPrice = e.BasketCount * e.Price
        }
        this.setState({})
        var sum = 0
        for(var i = 0; i < this.state.arrayBasket.length; i++){
            sum += this.state.arrayBasket[i].BasketPrice
        }
        this.state.TotalPrice = sum

        if(e.Count === 0){
            this.state.AllProducts.splice(this.state.AllProducts.indexOf(e),1)
            this.state.ShopProducts.splice(this.state.ShopProducts.indexOf(e),1)
            this.setState({})
        }
    }

    DelCardBasket = (e,i)=>{
        this.state.arrayBasket.splice(i,1)
        e.Count += e.BasketCount
        e.BasketCount = 0
        e.ChooseQuantityCount = 1
        e.ChooseQuantityCountMinusBtn = true
        e.ChooseQuantityCountPlusBtn = false
        e.ChooseQuantityCountMinusMinusBtn = true
        e.ChooseQuantityCountPlusPlusBtn = false
        let productAllShopFind = this.state.AllProducts.find( AllProductsS => AllProductsS === e)
        if(productAllShopFind === undefined){
            this.state.AllProducts.unshift(e)
        }
        this.setState({
            TotalPrice: this.state.TotalPrice - e.BasketPrice
        })
    }

    DeleteCard = (i,e)=>{
        var DelBFind = this.state.arrayBasket.find( k => k === e)
        var DelAFind = this.state.Actual.find( k => k === e)
        if(DelBFind === undefined && DelAFind === undefined){
            this.state.AllProducts.splice(i,1)
            this.setState({})
        }
        else if(DelAFind !== undefined && DelBFind === undefined){
            var Aindex = this.state.Actual.indexOf(DelAFind)
            this.state.Actual.splice(Aindex,1)
            this.state.AllProducts.splice(i,1)
            this.setState({})
        }
        else if(DelBFind !== undefined && DelAFind === undefined){
            var Bindex = this.state.arrayBasket.indexOf(DelBFind)
            this.state.arrayBasket.splice(Bindex,1)
            this.state.AllProducts.splice(i,1)
            this.setState({
                TotalPrice: this.state.TotalPrice - e.BasketPrice
            })
        }
        else{
            var Aindex = this.state.Actual.indexOf(DelAFind)
            this.state.Actual.splice(Aindex,1)
            var Bindex = this.state.arrayBasket.indexOf(DelBFind)
            this.state.arrayBasket.splice(Bindex,1)
            this.state.AllProducts.splice(i,1)
            this.setState({
                TotalPrice: this.state.TotalPrice - e.BasketPrice
            })
        }
        this.setState({})
    }

    ActualCard =(e)=> {
        e.actual = !e.actual
        e.ClassActual = 'actual'
        var actualindex = this.state.Actual.indexOf(e)
        var afind = this.state.Actual.find(af => af === e)
        var actual = this.state.AllProducts.filter(ac => ac.actual === false)
        if(actual !== undefined && afind === undefined){
            this.state.Actual.unshift(e)
            this.setState({})
        }else{
            this.state.Actual.splice(actualindex, 1)
            this.setState({})
        }
            this.setState({})
    }

    valLoginL =(e)=>{
        this.setState({
            valLogin: e.target.value
        });
    }

    valPassWordP =(e)=>{
        this.setState({
            valPassWord: e.target.value
        });
    }

    AddANewProductToTShop = ()=> {
        var PrNameFind = this.state.AllProducts.find( npo => npo.ProductName.trim().toUpperCase() === this.state.valOne.trim().toUpperCase() )
        var NewProductobj = {
            id:this.state.AllProducts.length,
            ProductImg:this.state.valFour,
            ProductName:this.state.valOne,
            ProductType:'',
            Price:this.state.valThree,
            Discount:``,
            NewDiscountPrice:0,
            BasketPrice:0,
            Count:this.state.valTwo,
            ChooseQuantityCount:1,
            ChooseQuantityCountPlusBtn:false,
            ChooseQuantityCountMinusBtn:true,
            ChooseQuantityCountPlusPlusBtn:false,
            ChooseQuantityCountMinusMinusBtn:true,
            BasketCount:0,
            ProductMoreInfoTitle:'',
            ProductMoreInfoText:'',
            actual:false,
            x:false,
        }

        if(PrNameFind === undefined && this.state.valOne && this.state.valTwo && this.state.valThree && this.state.valFour !== ''){
            this.state.AllProducts.push(NewProductobj)
            this.setState({})
        }else{
            alert("Arden ka aydpisi Mirg")
        }
    }

    DiscountD = (e,i) =>{
        e.Discount = i.target.value
        if(i.target.value === ''){
            e.Discount = 0
        }if(i.target.value > 100) {
            e.Discount = 100
        }
        e.NewDiscountPrice = e.Price-( e.Price / 100 * e.Discount )
        this.setState({})
    }

    valOnePN = (e)=>{
        this.setState({
            valOne: e.target.value
        })
    }

    valTwoPC = (e)=>{
        this.setState({
            valTwo: e.target.value
        })
    }

    valThreePP = (e)=>{
        this.setState({
            valThree: e.target.value
        })
    }

    valFourPIU = (e)=>{
        this.setState({
            valFour: e.target.value
        })
    }

    ChooseQuantityCountMinus = (e)=>{
        e.ChooseQuantityCount--
        if(e.ChooseQuantityCount > 1){
            e.ChooseQuantityCountPlusBtn = false
            e.ChooseQuantityCountPlusPlusBtn = false
            this.setState({})
        }else{
            e.ChooseQuantityCountMinusBtn = true
            e.ChooseQuantityCountMinusMinusBtn = true
            this.setState({})
        }
    }

    ChooseQuantityCountPlus = (e)=>{
        e.ChooseQuantityCount++
        if(e.ChooseQuantityCount < e.Count){
            e.ChooseQuantityCountMinusBtn = false
            e.ChooseQuantityCountPlusPlusBtn = false
            e.ChooseQuantityCountMinusMinusBtn = false
            this.setState({})
        }else{
            e.ChooseQuantityCountPlusBtn = true
            e.ChooseQuantityCountPlusPlusBtn = true
            this.setState({})
        }
    }

    ChooseQuantityCountMinusMinus = (e)=>{
        e.ChooseQuantityCount = 1
        if(e.ChooseQuantityCount > 1){
            e.ChooseQuantityCountPlusPlusBtn = false
            e.ChooseQuantityCountMinusMinusBtn = true
            e.ChooseQuantityCountMinusBtn = true
            this.setState({})
        }else{
            e.ChooseQuantityCountMinusMinusBtn = true
            e.ChooseQuantityCountMinusBtn = true
            e.ChooseQuantityCountPlusPlusBtn = false
            e.ChooseQuantityCountPlusBtn = false
            this.setState({})
        }
    }

    ChooseQuantityCountPlusPlus = (e)=>{
        e.ChooseQuantityCount = e.Count
        this.setState({})
        if(e.ChooseQuantityCount < e.Count){
            e.ChooseQuantityCountMinusMinusBtn = false
            e.ChooseQuantityCountPlusPlusBtn = true
            e.ChooseQuantityCountPlusBtn = true
            this.setState({})
        }else{
            e.ChooseQuantityCountPlusPlusBtn = true
            e.ChooseQuantityCountPlusBtn = true
            e.ChooseQuantityCountMinusMinusBtn = false
            e.ChooseQuantityCountMinusBtn = false
            this.setState({})
        }
    }

    ShopCountMinus = (e)=>{
        if(e.Count !== 0){
            e.Count--
            this.setState({})
        }
        if(e.Count <= e.ChooseQuantityCount){
            e.ChooseQuantityCount = e.Count
            e.ChooseQuantityCountPlusBtn = true
            e.ChooseQuantityCountPlusPlusBtn = true
            this.setState({})
        }
    }

    ShopCountPlus = (e)=>{
        e.Count++
        this.setState({})
        if(e.Count > e.ChooseQuantityCount){
            e.ChooseQuantityCountPlusBtn = false
            e.ChooseQuantityCountPlusPlusBtn = false
            this.setState({})
        }
    }

    RandomProducts = () =>{
        var x = this.state.AllProducts[Math.floor(Math.random()*this.state.AllProducts.length)]
        var y = this.state.AllProducts[Math.floor(Math.random()*this.state.AllProducts.length)]
        var z = this.state.AllProducts[Math.floor(Math.random()*this.state.AllProducts.length)]
        if(this.state.arrayRandom.length < 1){
            this.state.arrayRandom.push(x,y,z)
        }else{
            this.state.arrayRandom.splice(0, this.state.arrayRandom.length)
            this.state.arrayRandom.push(x,y,z)
        }
        this.setState({})
    }

    ProductMoreInfo = (e) =>{
        this.state.ProductInfo = e
        this.setState({})
        document.body.style = "overflow: hidden;"
    }

    ClosePCardInfo = (e) =>{
        this.setState({ ProductInfo: "" })
        document.body.style = "overflow: visible;"
    }

    FilterAll = () =>{
        this.state.ShopProducts.splice(0,this.state.ShopProducts.length)
        this.setState({})
    }

    FilterFruits = () =>{
        this.state.ShopProducts.splice(0,this.state.ShopProducts.length)
        var Fruits = this.state.AllProducts.filter(FruitsA => FruitsA.ProductType === "Fruit")
        this.state.ShopProducts = Fruits
        this.setState({})
    }

    FilterVegetables = () =>{
        this.state.ShopProducts.splice(0,this.state.ShopProducts.length)
        var Vegetables = this.state.AllProducts.filter(VegetablesA => VegetablesA.ProductType === "Vegetables")
        this.state.ShopProducts = Vegetables
        this.setState({})
    }

    Header = () => {
        return <Header
                arrCarousel = {this.state.arrCarousel}
                loginClick = {this.state.loginClick}
                valLogin = {this.state.valLogin}
                valPassWord = {this.state.valPassWord}
                state = {this.state}
                Admin = {this.state.Admin}
                Login = {this.Login}
                valLoginL = {this.valLoginL}
                valPassWordP = {this.valPassWordP}
        />
    }
    SectionOne = () => {
        return <SectionOne
                DiscountD = {this.DiscountD}
                ShopProducts = {this.state.ShopProducts}
                FilterAll = {this.FilterAll}
                FilterFruits = {this.FilterFruits}
                FilterVegetables = {this.FilterVegetables}
                ClosePCardInfo = {this.ClosePCardInfo}
                state = {this.state}
                ProductMoreInfo = {this.ProductMoreInfo}
                ClassActual = {this.state.ClassActual}
                ActualCard = {this.ActualCard}
                DeleteCard = {this.DeleteCard}
                AddCardBasket = {this.AddCardBasket}
                AddANewProductToTShop = {this.AddANewProductToTShop}
                Admin = {this.state.Admin}
                loginClick = {this.state.loginClick}
                AllProducts = {this.state.AllProducts}
                arrayBasket = {this.state.arrayBasket}
                valOne = {this.state.valOne}
                valTwo = {this.state.valTwo}
                valThree = {this.state.valThree}
                valFour = {this.state.valFour}
                ChooseQuantityCountMinus = {this.ChooseQuantityCountMinus}
                ChooseQuantityCountMinusMinus = {this.ChooseQuantityCountMinusMinus}
                ChooseQuantityCountPlus = {this.ChooseQuantityCountPlus}
                ChooseQuantityCountPlusPlus = {this.ChooseQuantityCountPlusPlus}
                ChooseQuantityCountPlusPlusBtn = {this.state.ChooseQuantityCountPlusPlusBtn}
                ChooseQuantityCountMinusMinusBtn = {this.state.ChooseQuantityCountMinusMinusBtn}
                ChooseQuantityCountPlusBtn = {this.state.ChooseQuantityCountPlusBtn}
                ChooseQuantityCountMinusBtn = {this.state.ChooseQuantityCountMinusBtn}
                ShopCountMinus = {this.ShopCountMinus}
                ShopCountPlus = {this.ShopCountPlus}
                valOnePN = {this.valOnePN}
                valTwoPC = {this.valTwoPC}
                valThreePP = {this.valThreePP}
                valFourPIU = {this.valFourPIU}
        />
    }
    SectionTwo = () => {
        return <SectionTwo
                ClassActual = {this.state.ClassActual}
                ActualCard = {this.ActualCard}
                DeleteCard = {this.DeleteCard}
                AddCardBasket = {this.AddCardBasket}
                DelCardBasket = {this.DelCardBasket}
                arrayBasket = {this.state.arrayBasket}
                TotalPrice = {this.state.TotalPrice}
                AllProducts = {this.state.AllProducts}
        />
    }
    Actual = () => {
        return <Actual
                ClassActual = {this.state.ClassActual}
                ActualCard = {this.ActualCard}
                Actual = {this.state.Actual}
        />
    }
    Footer = () => {
        return <Footer/>
    }
    RandomP = () => {
        return <RandomProduct
        state = {this.state}
        RandomProducts = {this.RandomProducts}
        />
    }
    Error404 = () => {
        return <Error404/>
    }

    render(){
        return(
            <>
                <Switch>
                    <Route exact path={"/"}>
                        {this.Header()}
                        {this.RandomP()}
                        {this.Footer()}
                    </Route>

                    <Route path={"/shop"}>
                        {this.Header()}
                        {this.SectionOne()}
                        {this.Footer()}
                    </Route>

                    <Route path={"/actual"}>
                        {this.Header()}
                        {this.Actual()}
                        {this.Footer()}
                    </Route>

                    <Route path={"/basket"}>
                        {this.Header()}
                        {this.SectionTwo()}
                        {this.Footer()}
                    </Route>

                    <Route path={"/error404"}>
                        {this.Header()}
                        {this.Error404()}
                        {this.Footer()}
                    </Route>

                    <Redirect to={"/error404"}/>
                </Switch>
            </>
        )
    }



}