import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { path } from '../../ultils/constant'


const notActive = 'py-2 px-3 flex items-center justify-center hover:bg-secondary2 hover:rounded-xl font-semibold'
const active = 'py-2 px-3 flex items-center justify-center hover:bg-secondary2 hover:rounded-xl bg-secondary1 rounded-xl text-white'

const Navigation = ({ isAdmin }) => {

    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.app)
    const { currentData } = useSelector(state => state.user)
    useEffect(() => {
        dispatch(actions.getCategories())
    }, [])
    return (
        <div className={`w-full flex ${isAdmin ? 'justify-start' : 'justify-center'} items-center h-[56px] text-blue`}>
            <div className='w-5/5 flex h-full items-center justify-center font-semibold text-md'>
                <div className='m-3'>
                    <NavLink
                        to={`/`}
                        className={({ isActive }) => isActive ? active : notActive}
                    >
                        Trang chủ
                    </NavLink>
                </div>
                {categories?.length > 0 && categories.map(item => {
                    return (
                        <div key={item.code} className='h-full flex justify-center items-center p-2' >
                            <NavLink
                                to={`/${formatVietnameseToString(item.value)}`}
                                className={({ isActive }) => isActive ? active : notActive}
                            >
                                {item.value}
                            </NavLink>
                        </div>
                    )
                })}
                <div className='m-2'>
                    <NavLink
                        to={path.CONTACT}
                        className={({ isActive }) => isActive ? active : notActive}
                    >
                        Liên hệ
                    </NavLink>
                </div>
                {currentData.id && <NavLink
                    to={`/${path.WISHLIST}`}
                    className={({ isActive }) => isActive ? active : notActive}
                >
                    Bài đăng yêu thích
                </NavLink>}
            </div>
        </div>
    )
}

export default Navigation