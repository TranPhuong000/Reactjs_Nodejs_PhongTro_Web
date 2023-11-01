import React from 'react'
import { text } from '../../ultils/constant'
import { Province, ItemSidebar, RelatedPost } from '../../components'
import { List, Pagination } from './index'
import { useSelector } from 'react-redux'
import { Search } from './index'
import {useLocation } from 'react-router-dom'
import { path } from '../../ultils/constant'


const Homepage = () => {
    const location = useLocation()
    const { categories, prices, areas } = useSelector(state => state.app)
    const { posts, count } = useSelector(state => state.post)

    return (
        <div className='w-full flex flex-col gap-3' >
            <div>
                <h1 className='text-[28px] font-bold text-center' >{text.HOME_TITLE}</h1>
                <p className='text-base text-gray-700 text-center'>{text.HOME_DESCRIPTION}</p>
            </div>
            <Province />
            {location.pathname !== `/${path.CONTACT}` && location.pathname !== `/${path.LOGIN}` && !location.pathname?.includes(path.DETAIL) && !location.pathname?.includes(path.WISHLIST) && <Search />}  
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List />
                    <Pagination posts={posts} count={count} />
                </div>
                <div className='w-[30%] flex flex-col gap-4 justify-start items-center'>
                    <ItemSidebar content={categories} title='Danh sách cho thuê' />
                    <ItemSidebar isDouble={true} type='priceCode' content={prices} title='Xem theo giá' />
                    <ItemSidebar isDouble={true} type='areaCode' content={areas} title='Xem theo diện tích' />
                    <RelatedPost />
                </div>
            </div>

        </div>
    )
}

export default Homepage