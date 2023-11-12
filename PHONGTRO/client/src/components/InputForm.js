import React, { memo } from 'react'
import '../index.css'
const InputForm = ({ label, value, setValue, keyPayload, invalidFields, setInvalidFields, type, placeholder}) => {
    return (
        <div className='relative' >
            <input
                placeholder=' '
                type={type || 'text'}
                id={keyPayload}
                className='w-full h-14 px-3 pt-6 text-base border-b-2 focus:outline-none focus:rounded-lg focus:border focus:border-blue-800 focus:border-b-2 transition-colors duration-500 peer' autoComplete='off'
                value={value}
                onChange={(e) => setValue(prev => ({ ...prev, [keyPayload]: e.target.value || '' }))}
                onFocus={() => setInvalidFields && setInvalidFields([])}
            />
            <label htmlFor={keyPayload} className='text-black px-3 text-base absolute left-0 top-1 cursor-text
                input-text 
                peer-focus:px-4
                peer-focus:-top-1
                peer-focus:text-blue-800 
                transition-all duration-500
                peer-focus:text-md
                peer-placeholder-shown:text-md
                peer-focus:border-blue-800 '  >
            {label}
            </label>
            
            {invalidFields?.some(i => i.name === keyPayload) && <small className='text-red-500 italic' >{invalidFields.find(i => i.name === keyPayload)?.message}</small>}
        </div>
    )
}

export default memo(InputForm)