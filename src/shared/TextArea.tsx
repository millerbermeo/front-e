// components/TextArea.tsx
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface TextAreaProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  error?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ id, label, register, rows = 4, error }) => {
  return (
    <fieldset className="bg-white mb-4 rounded-lg">
      <div className="relative bg-inherit">
        <textarea
          id={id}
          rows={rows}
          className="peer resize-none bg-gray-100 w-full rounded-lg text-sm text-gray-500 placeholder-transparent ring-1 px-2 py-2 ring-gray-400 focus:ring-sky-600 focus:outline-none"
          {...register(id)}
          placeholder="Escribe aquí"
        />
        <label
          htmlFor={id}
          className="absolute rounded-xl left-0 -top-3 text-sm text-gray-500 bg-transparent mx-1 px-1 cursor-text peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-white peer-focus:text-sm transition-all peer-focus:bg-[#009688]"
        >
          {label}
        </label>
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}

    </fieldset>
  );
};

export default TextArea;
