import React, { useState } from 'react'
import { FaHeart, FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { faqItems } from '../common/Faqdata';


export default function FaqComp() {

    let [currentid, SetcurrentId] = useState(0)

    return (
            
            <div className='faq w-[100%]  p-2'>
                <h1 className='text-[40px] text-center'>FAQ</h1>
                <div className="faqMid max-w-[1320px] py-4 mx-auto">

                    {faqItems.map((obj, index) => {
                        let { id, question, answer } = obj
                        return (
                            <>
                                <div className="faqitems shadow-lg relative mb-6 max-w-[100%]" key={index}>
                                    <h2 className='text-[18px] bg-[#ef4444] p-3 text-[#111827] font-[500]' onClick={() => SetcurrentId(id != currentid ? id : 0)}>{question}</h2>
                                    <span className='absolute right-0 top-5 text-[25px] px-1 text-[#111827]'>{currentid === id ? <FaMinus /> : <FaPlus />}</span>
                                    <p className={`px-3 py-3  ${currentid === id ? 'block' : 'hidden'}`} key={index}>{answer}</p>
                                </div>
                            </>
                        )
                    })}


                </div>
                </div>

    )


                


}
