import Button from '../../shared/Button'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import OnSale from './OnSale'
import { useNavigate } from 'react-router-dom'
import {Product} from "../../types/products";



const CardProducto: React.FC<Product> = ({
    id,
    name,
    price,
    image_url,

}) => {

    const navigate = useNavigate()

    return (
        <div onClick={()=> navigate(`/producto/${id}`)} className="card min-w-52 w-full bg-base-100 shadow-md hover:shadow-lg transition">
            <OnSale porcentaje='-20%'/>
            <figure className="px-4 pt-4">
                <img
                    src={image_url}
                    alt={name}
                    className="rounded-xl h-40 object-contain"
                />
            </figure>
            <div className="card-body items-start p-4 space-y-1">
                <h2 className="card-title text-sm leading-tight line-clamp-2">{name}</h2>

                {/* Valoración */}
                <div className="rating rating-sm">
                    {
                        // Muestra estrellas grises vacías como en la imagen original
                        Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <input
                                    key={i}
                                    type="radio"
                                    name={`rating-${name}`}
                                    className="mask mask-star-2 bg-gray-300"
                                    disabled
                                />
                            ))
                    }
                </div>

                <p className="text-md font-semibold text-primary">
                    ${price} US$
                </p>

                <div className="card-actions w-full justify-end">
                    <Button className="btn btn-sm bg-white text-[#08B69F] border-[#08B69F]">
                        <ShoppingCart />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardProducto
