import React from 'react'
import CardProducto from './CardProducto'
import {useProducts} from "../services/productsServices";
import LoaderData from "../../utils/LoaderData";

const TabProductos: React.FC = () => {

    const  {data: products, isPending, isError} = useProducts()
    if (isPending) return <p><LoaderData /></p>;
    if (isError) return <p>Ocurrió un error al cargar productos.</p>;
    return (
        <section className="w-full">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
                {products.map((producto, index) => (
                    <CardProducto key={index} {...producto} />
                ))}
            </div>
        </section>
    )
}

export default TabProductos
