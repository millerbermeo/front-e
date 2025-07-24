import React from 'react'
import { UseFormRegister } from 'react-hook-form';

interface Option {
    label: string
    value: string
}

interface SelectProps {
    id: string
    label: string
    register:  UseFormRegister<any>
    error?: string
    options: Option[]
}

const Select: React.FC<SelectProps> = ({id, label, register, options, error}) => {
  return (
    <fieldset className='bg-white mb-4 w-full'>
      <div className="relative bg-inherit w-full">
         <select id={id} {...register(id)} className="peer bg-transparent h-10 w-full rounded-lg text-sm text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-sky-600 focus:outline-none">
          <option value="" disabled hidden>Selecciona una opción</option>
          {options.map((opt: Option) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
         <label
          htmlFor={id}
          className="absolute left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 cursor-text peer-focus:text-sky-600 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm transition-all"
        >
          {label}
        </label>
       </div>
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </fieldset>
  )
}

export default Select