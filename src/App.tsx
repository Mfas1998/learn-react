import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Test from "./components/test";


function App() {
  
  const products = [
    {
      id: 1,
      name: "Samsung S21 ultra",
      price: "900$",
      quantity:3,
      url: "https://images.samsung.com/sg/smartphones/galaxy-s21/buy/s21_ultra_basicgroup_kv_mo_img.jpg",
    },
    {
      id: 2,
      name: "iphone 14 pro",
      price: "1000$",
      quantity:4,
      url: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP875/sp875-sp876-iphone14-pro-promax.png",
    },
    {
      id: 3,
      name: "Apple MacBook Pro",
      price: "2500$",
      quantity:0,
      url: "https://www.custommacbd.com/cdn/shop/products/macb…4997-656b-434f-b279-d95719be16e3.jpg?v=1659592998",
    },
    {
      id: 4,
      name: "Apple Watch SE",
      price: "900$",
      quantity:4,
      url: "https://i5.walmartimages.com/asr/9a1bb2ac-15a2-43a…de5a49a36cae.1cb6dca1cc83e3a0e6fd02dfb6591107.png",
    },
    {
      id: 5,
      name: "Galaxy Z flip 3",
      price: "1100$",
      quantity:9,
      url: "https://m.media-amazon.com/images/I/61E+6my831L._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 6,
      name: "HUAWEI P50 Pro",
      price: "900$",
      quantity:0,
      url: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pro/list/black.png",
    },
  ];


  return (
    <div className="App">


      {/* <ProductCard 
       name= "Samsung S21 ultra"
      price= "900$"
      url= "https://images.samsung.com/sg/smartphones/galaxy-s21/buy/s21_ultra_basicgroup_kv_mo_img.jpg"
     /> */}

     { products.map((e)=> <ProductCard key={e.id} {...e}/>)}
     

     {/* ---- render products where quantity >0 */}
      {/* {
      products.map((e)=> e.quantity> 0 ?  <ProductCard key={e.id} {...e}/>:'')
      } */}



    {/* <Test/> */}

    </div>
  )
  
}

export default App;

