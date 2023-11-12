import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import menuSidebar from '../../ultils/menuSidebar'
import { NavLink } from 'react-router-dom'
import * as actions from '../../store/actions'
import { AiOutlineLogout } from 'react-icons/ai'

const activeStyle = 'py-2 px-3 border-l-4 border-blue-800 flex  items-center gap-2 font-bold bg-blue-100'
const notActiceStyle = ' py-2 px-3 flex hover:border-l-4 hover:border-blue-800  items-center gap-2 cursor-pointer'

const Sidebar = () => {

    const dispatch = useDispatch()
    const { currentData } = useSelector(state => state.user)
    return (
        <div className='w-[280px] flex-none p-4 flex flex-col gap-6 border-r-2'>
            <div className='flex flex-col items-center gap-4'>
            <img src={currentData?.avatar} alt="avatar" className='w-20 h-20 object-cover rounded-full border-2 border-white' />
                <div className='flex items-center gap-4'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='font-bold text-xl'>{currentData?.name}</span>
                        <span className='text-lg'>{currentData?.phone}</span>
                    </div>
                </div>
                <span >Mã thành viên: <small className='font-medium'>{currentData?.id?.toUpperCase()}</small></span>
            </div>
            <div className='py-2 px -3'>
                {menuSidebar.map(item => {
                    return (
                        <NavLink
                            className={({ isActive }) => isActive
                                ? `${activeStyle} ${currentData?.role === item.role ? 'hidden' : ''}`
                                : `${notActiceStyle} ${currentData?.role === item.role ? 'hidden' : ''}`}
                            key={item.id}
                            to={item?.path}
                        >
                            {item?.icon}
                            {item.text}
                        </NavLink>
                    )
                })}
                <span onClick={() => dispatch(actions.logout())} className={notActiceStyle}><AiOutlineLogout />Thoát</span>
            </div>
        </div>
    )
}

export default Sidebar