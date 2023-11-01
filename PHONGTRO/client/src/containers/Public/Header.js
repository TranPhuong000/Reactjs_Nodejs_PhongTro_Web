import React, { useCallback, useEffect, useRef, useState } from 'react'
import logo from '../../assets/logoNNVV.png'
import { Button, User } from '../../components'
import icons from '../../ultils/icons'
import { useNavigate, Link, useSearchParams, useLocation } from 'react-router-dom'
import { path } from '../../ultils/constant'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import menuManage from '../../ultils/menuManage'
import menuAdmin from '../../ultils/menuAdmin'
import Navigation from './Navigation'


const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown } = icons

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const headerRef = useRef()
    const { isLoggedIn } = useSelector(state => state.auth)
    const { currentData } = useSelector(state => state.user)
    const [isShowMenu, setIsShowMenu] = useState(false)
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, [])
    useEffect(() => {
        headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [searchParams.get('page'), location.pathname])

    return (
        <div ref={headerRef} className='w-full '>
            <div className='w-full flex items-center justify-between shadow-md'>
                <Link to={'/'} >
                    <img
                        src={logo}
                        alt="logo"
                        className='w-[240px] h-[90px] object-contain'
                    />
                </Link>
                
                <Navigation/>

                <div className='flex items-center gap-1'>
                    {!isLoggedIn && <div className='flex items-center gap-1'>
                        {/* <small>Phongtro123.com xin chào !</small> */}
                        <Button
                            width='w-28'
                            text={'Đăng nhập'}
                            textColor='text-white'
                            // bgColor='bg-[#3961fb]'
                            gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                            onClick={() => goLogin(false)}
                        />
                        <Button
                            width='w-28'
                            text={'Đăng ký'}
                            textColor='text-white'
                            // bgColor='bg-[#3961fb]'
                            gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                            onClick={() => goLogin(true)}
                        />
                    </div>}
                    {isLoggedIn && <div className='flex items-center gap-3 relative'>
                        {/* <User /> */}
                        <Button
                            width='w-28'
                            text={'Tài khoản'}
                            textColor='text-white'
                            // bgColor='bg-blue-700'
                            gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                            // px='px-4'
                            // IcAfter={BsChevronDown}
                            onClick={() => currentData?.role === 'R3' ? navigate('/he-thong/sua-thong-tin-ca-nhan') : setIsShowMenu(prev => !prev)}
                        />
                        {isShowMenu && currentData?.role === 'R2' && <div className='absolute min-w-200 z-50 top-full bg-white shadow-md rounded-md p-4 right-0 flex flex-col'>
                            {menuManage.map(item => {
                                return (
                                    <Link
                                        className='hover:text-orange-500 flex items-center gap-2 text-blue-600 border-b border-gray-200 py-2'
                                        key={item.id}
                                        to={item?.path}
                                    >
                                        {item?.icon}
                                        {item.text}
                                    </Link>
                                )
                            })}
                            <span
                                className='cursor-pointer hover:text-orange-500 text-blue-500 py-2 flex items-center gap-2'
                                onClick={() => {
                                    setIsShowMenu(false)
                                    dispatch(actions.logout())
                                }}
                            >
                                <AiOutlineLogout />
                                Đăng xuất
                            </span>
                        </div>}
                        {isShowMenu && currentData?.role === 'R1' && <div className='absolute min-w-200 top-full bg-white shadow-md rounded-md p-4 right-0 flex flex-col'>
                            {menuAdmin.map(item => {
                                return (
                                    <Link
                                        className='hover:text-orange-500 flex items-center gap-2 text-blue-600 border-b border-gray-200 py-2'
                                        key={item.id}
                                        to={item?.path}
                                    >
                                        {item?.icon}
                                        {item.text}
                                    </Link>
                                )
                            })}
                            <span
                                className='cursor-pointer hover:text-orange-500 text-blue-500 py-2 flex items-center gap-2'
                                onClick={() => {
                                    setIsShowMenu(false)
                                    dispatch(actions.logout())
                                }}
                            >
                                <AiOutlineLogout />
                                Đăng xuất
                            </span>
                        </div>}
                    </div>}
                    {(currentData?.role === 'R1' || currentData?.role === 'R2') && <Button
                        width='w-28'
                        text={'Đăng tin mới'}
                        textColor='text-white'
                        // bgColor='bg-secondary2'
                        gradientColorStops='bg-gradient-to-r from-red-800 via-red-400 to-red-300 hover:from-red-300 hover:via-red-400 hover:to-red-800'
                        // IcAfter={AiOutlinePlusCircle}
                        onClick={() => navigate('/he-thong/tao-moi-bai-dang')}
                    />}
                </div>
            </div>
        </div>
    )
}

export default Header