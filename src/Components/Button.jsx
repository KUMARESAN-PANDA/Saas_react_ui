import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";

const Button = ({imgurl,cont}) => {
  return (
    <button className=' border-p4 flex   items-center gap-2 py-2 px-3 mt-3 rounded-lg bg-s2 shadow-300 hover:shadow-100 md:mt-5 xl:px-6 xl:py-3'>
        <img src={imgurl} alt="" className='h-6 w-6'/> <h1 className='text-p1 font-poppins  uppercase '>{cont}</h1>
    </button>
  )
}

export default Button