import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";


export default function Model({buttontext}) {
    let [Model,SetModel]=useState(0)
  return (
    <>
    <button className='bg-[transparent] text-white py-2 px-4 rounded-[10px] border-[0.10px] border-[#f1f1f1]' onClick={()=>SetModel(1)}>open model</button>

    <div className={`w-[500px] border-2 border-white rounded-2 fixed ${Model===1 ? "top-[50%]" : "top-[-100%]"} left-[50%] translate-x-[-50%] translate-y-[-50%] h-[500px] p-4`}>
        <span className='absolute top-0 right-0 text-white text-[20px] bg-[red] rounded-[50%] p-1' onClick={()=>SetModel(0)} ><RxCross1/></span>
        <form action="" className='w-[100%]'>
            <label htmlFor="name" className='text-white'>
                <input type="text" placeholder='name' className='text-white w-[100%] h-[50px] border-2 p-2 mb-3' id="name" />
            </label>
             <label htmlFor="email" className='text-white mb-3'>
                <input type="email" placeholder='email' id="email" className='w-[100%] h-[50px] border-2 p-2 mb-3 text-white' />
            </label>
            <label htmlFor="phone" className='text-white mb-3'>
                <input type="tel" placeholder='phone' id="phone" className='w-[100%] h-[50px] border-2 p-2 mb-3 text-white' />
            </label>
            <textarea name="comment" width="100%" row='30' className='w-[100%] h-[50px] border-2 p-2 mb-3 text-white' placeholder='comment'></textarea>
            {/* <button>Submit</button> */}

            <button className='bg-[#ef4444] text-white py-2 px-4 rounded-[10px]'>{buttontext}</button>

        </form>



    </div>
    </>
  )
}
