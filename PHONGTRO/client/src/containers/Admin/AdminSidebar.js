import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { memuSidebar } from '../../ultils/constant'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'

const activeStyle = 'font-medium px-[10px] gap-5 h-[40px] flex items-center text-red-500 border-b-2 border-blue-500 border-transparent rounded-xl'
const notActiceStyle = 'font-medium px-[10px] gap-5 h-[40px] flex items-center hover:text-red-500 border-b-2 hover:border-blue-500 border-transparent hover:rounded-xl cursor-pointer'

const AdminSidebar = ({ admin }) => {
    const navigate = useNavigate()
    const { currentData } = useSelector(state => state.user)
    return (
        <div className='flex-none flex flex-col gap-6 bg-white max-h-screen'>
            <div className=' bg-secondary1 border rounded-xl py-5 flex flex-col items-center justify-center'>
                <img src={currentData?.avatar} alt="avatar" className='w-20 h-20 object-cover rounded-full border-2 border-white' />
                <div className='flex items-center gap-4'>
                    
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-semibold'>{currentData?.name}</span>
                        <small className='text-white'>{currentData?.phone}</small>
                    </div>
                </div>
                <span className='text-white' >Mã thành viên: <small className='font-medium text-red-400'>{currentData?.id?.toUpperCase()}</small></span>
            </div>

            <div className='h-screen bg-white py-5 text-black px-3'>
                {memuSidebar?.map(item => {
                    return (
                        <NavLink
                            className={({ isActive }) => isActive ? activeStyle : notActiceStyle}
                            key={item.id}
                            to={item?.path}
                        >
                            {item?.icon}
                            {item.text}
                        </NavLink>
                    )
                })}
                <span onClick={() => navigate('/')} className={notActiceStyle}><AiOutlineLogout size={24} />Tới website</span>
            </div>
        </div>
    )
}

export default memo(AdminSidebar)