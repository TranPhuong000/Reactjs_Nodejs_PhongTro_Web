import React, { memo } from 'react'


const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullWidth, px, IcBefore, gradientColorStops, width}) => {
    return (
        <button
            type='button'
            className={`py-2 ${px ? px : 'px-2'} ${textColor} ${bgColor} ${fullWidth && 'w-full'} ${gradientColorStops} ${width} outline-none rounded-md text-base`}
            onClick={onClick}
        >
            {IcBefore && <span><IcBefore /></span>}
            <span className='text-center'> {text}</span>
            {IcAfter && <span><IcAfter /></span>}

        </button>
    )
}

export default memo(Button)


// outline-none rounded-md hover:underline flex items-center justify-center gap-1