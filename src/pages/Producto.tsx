import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Minus, Plus, Share, Star } from 'lucide-react'
import Button from '../components/Button'

// Simulando traer el contenido por ID
const contentIma = [
    { id: 1, nombre: "img1", img: "https://www.professionalwireless.com.co/wp-content/uploads/2024/09/NITRO-5-AN515-58-75NM_64GB.png" },
    { id: 2, nombre: "img2", img: "https://co-media.hptiendaenlinea.com/catalog/product/A/1/A14LRLA-1_T1737050436.png" },
    { id: 3, nombre: "img3", img: "https://www.acerstore.cl/cdn/shop/articles/p-pasta-disipadora_jpg.jpg?v=1729285190&width=1100" },
]

const Producto = () => {
    const { id } = useParams()
    const product = contentIma.find(item => item.id === Number(id))

    if (!product) return <p>Producto no encontrado</p>

    return (
        <div className='w-full flex  bg-white justify-between 2xl:container mx-auto pr-10 py-5'>
            <div className='border-r min-w-[55%] flex justify-center items-center gap-5 flex-col border-gray-200'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-4xl h-96 mx-auto"
                >
                    <motion.img
                        src={product.img}
                        alt={product.nombre}
                        className="w-full mx-auto h-full"
                        layoutId={`image-${product.id}`}
                    />
                </motion.div>


                <div className='flex gap-3'>
                    <figure className='mask size-20 p-2 mask-squircle bg-sky-100'>
                        <img src="size-20" alt="ss" />
                    </figure>
                    <figure className='mask size-20 p-2 mask-squircle bg-sky-100'>
                        <img src="size-20" alt="ss" />
                    </figure>
                    <figure className='mask size-20 p-2 mask-squircle bg-sky-100'>
                        <img src="size-20" alt="ss" />
                    </figure>
                    <figure className='mask size-20 p-2 mask-squircle bg-sky-100'>
                        <img src="size-20" alt="ss" />
                    </figure>
                    <figure className='mask size-20 p-2 mask-squircle bg-sky-100'>
                        <img src="size-20" alt="ss" />
                    </figure>
                </div>
            </div>


            <div className="min-w-[45%] mx-auto bg-white p-6  space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                    Portátil Gamer ASUS TUF 21021012
                </h3>

                <div className="flex items-center space-x-2 text-yellow-500">
                    <Star />
                    <span className="text-sm text-gray-600">(4.5 / 5)</span>
                </div>

                <span className="badge badge-soft badge-success">
                    Disponible
                </span>

                <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum
                    nostrum totam dolor enim necessitatibus debitis rem magnam asperiores sunt.
                </p>

                <div className="flex items-center justify-start gap-5  text-sm text-gray-500 border-b pb-4">
                    <span className='flex gap-2'><Heart /> Agregar a lista</span>
                    <span className='flex gap-2'><Share /> Compartir</span>
                </div>

                <p className="text-2xl font-bold text-gray-500">110,00 US$ <span className='text-lg line-through'>120,000 US$</span></p>


                <div className="space-y-3">
                    <p className="text-sm font-bold text-gray-600">Color</p>
                    <div className="flex space-x-3">
                        <Button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-4 py-2 rounded size-8">

                        </Button>
                        <Button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-4 py-2 rounded size-8">

                        </Button>
                        <Button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-4 py-2 rounded size-8">

                        </Button>
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-sm font-bold text-gray-600">Ram</p>

                    <div className="flex space-x-3">
                        <Button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-4 py-2 rounded">
                            <span>
                                8 RAM
                            </span>
                        </Button>
                        <Button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-4 py-2 rounded">
                            <span>
                                16 RAM
                            </span>
                        </Button>
                        <Button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-4 py-2 rounded">
                            <span>
                                12 RAM
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="space-y-3">
                    <p className="text-sm font-bold text-gray-600">Cantidad</p>

                    <div className="flex items-center space-x-2">
                        <input
                            type="number"
                            defaultValue={1}
                            className="w-16 border rounded px-2 py-1 text-center text-sm"
                        />
                        <div className="flex space-x-1">
                            <Button className="p-1 bg-gray-100 rounded hover:bg-gray-200">
                                <Plus />
                            </Button>
                            <Button className="p-1 bg-gray-100 rounded hover:bg-gray-200">
                                <Minus />
                            </Button>
                        </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
                        <span>
                            Comprar
                        </span>
                    </Button>
                </div>

            </div>


        </div>
    )
}

export default Producto
