import React from 'react'
import { text } from '../ultils/dataContact'
import { Button } from '../components'
import logofooter from '../assets/logoNNVV.png'

const Contact = () => {
    return (
        <div className='bg-slate-100 p-4 w-full flex flex-col justify-center items-center gap-6 shadow-inner'>
           
            <div className='flex items-center justify-around w-full'>
               <img
                src={text.image}
                alt="thumbnal"
                className='w-[300px] h-48 object-contain'
                 />
                {text.contacts.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center'>
                            <span className='text-blue-800 font-semibold'>{item.text}</span>
                            <span className='text-black text-[20px] font-semibold'>{item.phone}</span>
                            <span className='text-black text-[20px] font-semibold'>{item.zalo}</span>
                        </div>
                    )
                })}
               
            </div>
            <hr class="h-px my-4 bg-gray-500 border-0 dark:bg-gray-700"></hr>
            <div>
                <span>Copyright © 2023 Nhóm 11-12</span>
            </div>
            {/* <Button
                text='Gửi liên hệ'
                bgColor='bg-blue-600'
                textColor='text-white'
                px='px-6'
            /> */}


             

                    
            {/* <p>{text.content}</p> */}
        </div>
    )
}

export default Contact