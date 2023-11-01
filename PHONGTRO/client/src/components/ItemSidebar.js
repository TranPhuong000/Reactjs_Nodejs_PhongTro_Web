import React, { memo } from 'react'
import icons from '../ultils/icons'
import { formatVietnameseToString } from '../ultils/Common/formatVietnameseToString'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

const { GrNext } = icons

const ItemSidebar = ({ title, content, isDouble, type }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location);

    const formatContent = () => {
        const oddEl = content?.filter((item, index) => index % 2 !== 0)
        const evenEl = content?.filter((item, index) => index % 2 === 0)
        const formatContent = oddEl?.map((item, index) => {
            return {
                right: item,
                left: evenEl?.find((item2, index2) => index2 === index)
            }
        })

        return formatContent
    }
    const handleFilterPosts = (code) => {
        navigate({
            pathname: location?.pathname,
            search: createSearchParams({
                [type]: code,
            }).toString()
        });
    }


    return (
        <div className='rounded-md w-full'>
            <div className='w-full border rounded-t-2xl bg-secondary1'>
                <h3 className='text-lg font-semibold p-2 text-center text-white'>{title}</h3>
            </div>
            {!isDouble && <div className='flex flex-col gap-2 border bg-slate-100 rounded-b-2xl pl-2' >
                {content?.length > 0 && content.map(item => {
                    return (
                        <Link
                            to={`${formatVietnameseToString(item.value)}`}
                            key={item.code}
                            className='flex gap-2 items-center mt-1 cursor-pointer hover:text-orange-600'
                        >
                            <GrNext size={10} color='#ccc' />
                            <p>{item.value}</p>
                        </Link>
                    )
                })}
            </div>}
            {isDouble && <div className='flex flex-col gap-2 border bg-slate-100 rounded-b-2xl pl-2' >
                {content?.length > 0 && formatContent(content).map((item, index) => {
                    return (
                        <div key={index} className=''>
                            <div className=' flex items-center justify-around'>
                                <div
                                    onClick={() => handleFilterPosts(item.left.code)}
                                    className='flex flex-1 gap-2 items-center mt-1 cursor-pointer hover:text-orange-600'
                                >
                                    <GrNext size={10} color='#ccc' />
                                    <p>{item.left.value}</p>
                                </div>
                                <div
                                    className='flex flex-1 gap-2 items-center mt-1 cursor-pointer hover:text-orange-600'
                                    onClick={() => handleFilterPosts(item.right.code)}
                                >
                                    <GrNext size={10} color='#ccc' />
                                    <p>{item.right.value}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default memo(ItemSidebar)