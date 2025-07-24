import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
    id: string;
    label: string;
    type?: string;
    register: UseFormRegister<any>;
    validation?: RegisterOptions;
    error?: string;
}

const Input: React.FC<InputProps> = ({ id, label, type, register, validation, error }) => {
    return (
        <fieldset className="bg-white mb-4 rounded-lg w-full">
            <div className="relative bg-inherit w-full">
                <input
                    type={type}
                    id={id}
                    className={`peer bg-transparent h-10 w-full rounded-lg text-sm text-gray-700 placeholder-transparent ring-1 px-2 ${
                        error ? "ring-red-500" : "ring-gray-400"
                    } focus:ring-2 focus:ring-sky-600 focus:outline-none`}
                    {...register(id, validation)}
                    placeholder="Type inside me"
                />
                <label
                    htmlFor={id}
                    className={`absolute cursor-text rounded-lg left-0 -top-3 text-sm text-gray-500 bg-transparent mx-1 px-1
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2
            peer-placeholder-shown:bg-transparent
            peer-focus:-top-3 peer-focus:text-white peer-focus:text-sm peer-focus:bg-[#009688]
            transition-all`}
                >
                    {label}
                </label>
            </div>
            {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
        </fieldset>
    )
}

export default Input
