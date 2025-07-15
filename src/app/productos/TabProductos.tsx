import React from 'react'
import { productos } from '../../utils/arrays'
import CardProducto from './CardProducto'

const TabProductos: React.FC = () => {
    return (
        <section className="w-full">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
                {productos.map((producto, index) => (
                    <CardProducto key={index} {...producto} />
                ))}
            </div>
        </section>
    )
}

export default TabProductos
