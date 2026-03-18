// import { Grid } from 'lucide-react'
'use client'
import React from 'react'
import { useState } from 'react'
const product = () => {
    const [cart, setcart] = useState([])
    const addToCart=(d)=>{
        
setcart([...cart,d])
alert(`The product id: ${d.id} , Name: ${d.name}  has been add to cart!  & and the total product is ${cart.length +1}`)
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
    <div className=' bg-gray-200 h-screen  grid grid-cols-2  md:grid-cols-4 '>

{datas.map((d)=>{
 return  ( <div className=' h-70 rounded-2xl p-5 mt-15  'key={d.id}>
    {/* <div className=' h-55 bg-amber-950 mb-5'>

    </div> */}
    <img src={d.src} className=' h-55 mb-5 rounded-lg'/>
   Name: {d.name}
   <br/>
   Price: {d.price}
    <div className=' grid gap-1 rounded-lg grid-cols-2'>
        <button className='bg-red-300  rounded-lg text-xs h-7 hover:bg-red-200'>Buy </button>
        <button onClick={()=>addToCart(d)} className='text-xs bg-green-400  rounded-lg hover:bg-green-300'>Add to Cart </button>
    </div>
    </div>)})}

   
    </div>
  )
}

export default product