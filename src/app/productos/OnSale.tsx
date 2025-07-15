import React from 'react'

interface OnSaleProps {
  porcentaje?: string
}

const OnSale: React.FC<OnSaleProps> = ({ porcentaje = '' }) => {
  return (
    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
      {porcentaje}
    </span>
  )
}

export default OnSale
