import React, { memo, useState } from 'react'
import icons from '../ultils/icons'
import { Link } from 'react-router-dom'
import { formatVietnameseToString } from '../ultils/Common/formatVietnameseToString'
import { path } from '../ultils/constant'
import { apiUpdateWishlist } from '../services/post'
import { toast } from 'react-toastify'


const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons

const Item = ({ images, user, title, star, description, attributes, address, id, islover, setUpdate }) => {

    const handleStar = (star) => {
        let stars = []
        for (let i = 1; i <= +star; i++) stars.push(<GrStar className='star-item' size={18} color='#eab308' />)
        return stars

    }
    const handleUpdateWishlist = async (e) => {
        e.stopPropagation()
        const response = await apiUpdateWishlist({ pid: id })
        if (response.data?.err === 0) {
            setUpdate(prev => !prev)
            toast.success(response.data.msg)
        }
    }
    return (
        <div className='w-full flex border-t border-orange-600 py-4 relative'>

            {/* Link hình ảnh */}
            <Link
                to={`${path.DETAIL}${formatVietnameseToString(title?.replaceAll('/', ''))}/${id}`}
                className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'
            >
                {images && images?.length > 0 && images.filter((i, index) => [...Array(4).keys()].some(i => i === index))?.map((i, index) => {
                    return (
                        <img key={index} src={i} alt="preview" className='w-[47%] h-[120px] object-cover' />
                    )
                })}
                <span className='bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-4'>{`${images?.length} ảnh`}</span>
            </Link>

            {/* <div
                className='text-white absolute p-4 right-5 bottom-2 left-[27%]'
                onClick={e => {
                    e.stopPropagation()
                    handleUpdateWishlist(e)
                }}
            > */}

                {/* Yêu thích
                {islover ? <RiHeartFill size={26} color='red' /> : <RiHeartLine size={26} />}
            </div> */}


            {/* Tiêu đề */}
            <div className='w-3/5'>
                <div className='flex justify-between gap-4 w-full pl-2 '>
                    <Link to={`${path.DETAIL}${formatVietnameseToString(title?.replaceAll('/', ''))}/${id}`} className='text-red-600 font-medium'>
                        {title}
                    </Link>
                </div>
                <div className='my-2 flex items-center justify-between gap-2'>
                    <span className='font-bold flex-3 text-green-600 text-xl whitespace-nowrap overflow-hidden text-ellipsis pl-2'>{attributes?.price}</span>
                    <span className='flex-1 absolute right-0'>{attributes?.acreage}</span>
                </div>

                <div className='flex items-center justify-between pt-1'>
                    <span className='pl-2'>
                        {handleStar(+star).length > 0 && handleStar(+star).map((star, number) => {
                                    return (
                                        <span key={number}>{star}</span>
                                    )
                                })}
                    </span>
                    <span className='flex-2 whitespace-nowrap overflow-hidden text-ellipsis absolute right-0 '>
                                    {`${address?.split(',')[address?.split(',').length - 2]},
                                    ${address?.split(',')[address?.split(',').length - 1]}`}
                    </span>            
                </div>

                {/* Thông tin user */}
                <div className='absolute bottom-0'>
                                <div className='flex items-center gap-1 m-2'>
                                    <img src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png" alt="avatar" className='w-[30px] h-[30px] object-cover rounded-full' />
                                    <p className='text-base'>{user?.name}</p>
                                </div>
                                <div className='m-3'>
                                    <a
                                        className='bg-secondary1 text-white p-1 rounded-md hover:bg-white hover:text-blue-800 border-b-2 hover:border-blue-500 border-transparent hover:bg-red-200'
                                        href='/'
                                        target='_blank'
                                    >
                                        {`Gọi ${user?.phone}`}
                                    </a>
                                </div>
                                <div className='m-3'>
                                    <a
                                            className='text-secondary1 px-1 rounded-md border border-blue-800 hover:border-b-2 hover:border-blue-500 hover:bg-red-200 hover:text-blue-800 '
                                            href={`https://zalo.me/${user?.zalo}`}
                                            target='_blank'
                                            rel='noreferrer'>
                                            Nhắn zalo
                                        </a>
                                </div>
                    </div>

                {/* Mô tả */}
                {/* <p className='text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden'>
                    {description}
                </p> */}

               
                    <div className='text-white absolute right-0 bottom-0 my-5'
                            onClick={e => {
                                e.stopPropagation()
                                handleUpdateWishlist(e)
                            }}
                        >

                            {/* Yêu thích */}
                            {islover ? <RiHeartFill size={26} color='red' /> : <RiHeartLine size={26} color='red' />}       
                    </div>
            </div>
        </div>
    )
}

export default memo(Item)