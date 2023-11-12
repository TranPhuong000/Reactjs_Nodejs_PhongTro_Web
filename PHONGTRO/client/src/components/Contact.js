import React from 'react'
import { text } from '../ultils/dataContact'
import { Button } from '../components'
import logofooter from '../assets/logoNNVV.png'
import logofb from '../assets/facebook.jpg'
import logogm from '../assets/gmail.gif'
import logozl from '../assets/zalo.jpg'

const Contact = () => {
    return (
        <div className='bg-slate-100 p-4 w-full flex flex-col justify-center items-center gap-6 shadow-inner'>
            <div className='flex items-center justify-around w-full'>
                    <div className='flex flex-col items-center'>
                        <img
                            src={text.image}
                            alt="thumbnal"
                            className='w-[200px] h-40 object-contain'
                            />
                        <span className='italic'>Truy cập web theo cách của bạn với các tùy chọn cho thuê của chúng tôi.</span>
                        <span className='italic'>Phòng cho thuê, chỉ cần một cú nhấn chuột.</span>
                    </div>
                    {text.contacts.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-items-start'>
                                <span className='text-blue-800 text-[18px] font-semibold'>{item.text}</span>
                                <span className='text-slate-600 text-[15px] pt-2 hover:text-red-500 cursor-pointer'>{item.phone}</span>
                                <span className='text-slate-600 text-[15px] pt-2 hover:text-red-500 cursor-pointer'>{item.zalo}</span>
                                <span className='text-slate-600 text-[15px] pt-2 hover:text-red-500 cursor-pointer'>{item.smalltext}</span>
                            </div>
                        )
                    })}
                     <div className='flex gap-1 justify-items-end'>
                        {/* <img
                            src={logofb}
                            alt="thumbnal"
                            className='w-[50px] h-50 object-contain rounded-full'
                            /> */}
                            <img
                            src={logogm}
                            alt="thumbnal"
                            className='w-[50px] h-50 object-contain rounded-full'
                            />
                            <img
                            src={logozl}
                            alt="thumbnal"
                            className='w-[40px] h-40 object-contain rounded-full'
                            />
                        </div>
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