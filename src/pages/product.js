// import { Grid } from 'lucide-react'
'use client'
import React from 'react'
import { useState } from 'react'
import Nav from './nav';
const product = () => {
    const [cart, setcart] = useState([])
    const addToCart=(d)=>{
        
setcart([...cart,d])
// alert(`The product id: ${d.id} , Name: ${d.name}  has been add to cart!  & and the total product is ${cart.length +1}`)
    }
  const  datas=[
        {id:1,
            src:"https://m.media-amazon.com/images/I/81a2KiCWpSL._AC_SX300_SY300_QL70_FMwebp_.jpg",
        name: "Cycle",
        price: 1200
        },
         {id:2,
            src:"https://m.media-amazon.com/images/I/8170FdFwkML._AC_SX300_SY300_QL70_FMwebp_.jpg",
        name: "TV",
        price: 5200
        },
       
        {id:
            3,
            src:"https://m.media-amazon.com/images/I/81a2KiCWpSL._AC_SX300_SY300_QL70_FMwebp_.jpg",
        name: "Cycle",
        price: 1200
        },
         {id:
            4,
            src:"https://m.media-amazon.com/images/I/81a2KiCWpSL._AC_SX300_SY300_QL70_FMwebp_.jpg",
        name: "Cycle",
        price: 1200
        },
         {id:
            5,
            src:"https://m.media-amazon.com/images/I/81a2KiCWpSL._AC_SX300_SY300_QL70_FMwebp_.jpg",
            name: "Cycle",
            price: 1200
        },
    ]
    return (
        <div>
    <Nav cart={cart}/>
<div className="h-[450px] w-[100%] flex justify-center  text-center flex-col bg-cover bg-center bg-[url('/bg.jpg')]">
<p className='text-[60px] md:text-[100px] text-white  font-bold text-shadow-gray-950'>Market Store</p>
    <p className=' text-[20px] md:text-[50px] text-white font-bold text-shadow-gray-950'>Get your favouite in your caste</p>
    </div>
    <div className=' bg-gray-200 h-full w-[100%] grid grid-cols-2  md:grid-cols-4 '>

{datas.map((d)=>{
 return  (
    
     <div className='  rounded-2xl p-5 mt-15 mx-2 hover:scale-105 transition-all  bg-white 'key={d.id}>
    {/* <div className=' h-55 bg-amber-950 mb-5'>

    </div> */}
    <img src={d.src} className=' h-55 mb-5 m-auto rounded-lg'/>
   Name: {d.name}
   <br/>
   Price: {d.price}
    <div className=' grid gap-2.5 rounded-lg  grid-cols-2'>
        <button className='bg-red-300  rounded-lg text-xs h-7 transition-all  hover:bg-red-200'>Buy </button>
        <button onClick={()=>addToCart(d)} className='transition-all  text-xs bg-green-400  rounded-lg hover:bg-green-300'>Add to Cart </button>
    </div>
    </div>)})}

   
    </div>
  </div>)
}

export default product