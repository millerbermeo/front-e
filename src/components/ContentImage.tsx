import React from 'react'
import Button from '../shared/Button'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { contentIma } from '../utils/arrays'


interface Imagen {
    id: number
    img: string
    nombre: string
}

const ContentImage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="grid grid-cols-3 gap-5">
            {contentIma.map((item: Imagen) => (
                <motion.figure
                    layoutId={`image-${item.id}`}
                    key={item.id}
                    onClick={() => navigate(`/producto/${item.id}`)}
                    className="relative w-full h-96 group overflow-hidden rounded-lg shadow-md cursor-pointer"
                >
                    <motion.img
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60"
                        src={item.img}
                        alt={item.nombre}
                    />
                    <Button
                        onClick={() => {
                            navigate(`/producto/${item.id}`)
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black px-4 py-2 rounded shadow"
                    >
                        <span>
                            Ver más
                        </span>
                    </Button>
                </motion.figure>
            ))}
        </div>
    )
}

export default ContentImage
