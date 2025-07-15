import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Button from './Button'
import ProgressCircle from './ProgressCircle'

const contentSlider = [
    // CONTENIDO 1

    <div className="h-[65vh] px-28 flex items-center justify-between">
        <div className="flex w-full justify-between items-center gap-10">

            {/* COLUMNA IZQUIERDA */}
            <div className="w-full max-w-[50%] flex flex-col gap-6">
                <h1 className="text-5xl uppercase text-[#08B69F] font-bold">¡Tienda online!</h1>

                <p className="text-5xl text-[#272343e0] font-extrabold leading-16 text-balance">
                    Tecnología de punta al mejor precio, ¡todos los días!
                </p>


                {/* <Button className="bg-success p-3 rounded-full w-fit">
                    <span className="font-bold text-lg text-white">Ver productos</span>
                </Button> */}

                <div className="flex gap-4">
                    <ProgressCircle color="#00D390" percentage={90} label="Clientes satisfechos" />
                    <ProgressCircle color="#1E88E5" percentage={100} label="Pagos seguros" />
                    <ProgressCircle color="#FB8C00" percentage={100} label="Garantía de devolución" />
                </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="relative w-full flex justify-end items-end">
                {/* Bola de fondo */}
                <div className="absolute size-[500px] bg-gray-100 rounded-full bottom-0 translate-y-4 z-0" />

                {/* Imagen */}
                <img
                    src="https://cuscoinformatico.com/storage/LAPTOP%20GAMER%20MSI%20SWORD%2017%20HX%20B14VFKG.png"
                    className="z-10 max-w-[80%] object-contain"
                    alt="Laptop promocional"
                />
            </div>
        </div>
    </div>
    ,

    // CONTENIDO 2
    <div>
        <div className="center h-[70vh] px-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </div>,

    // CONTENIDO 3
    <div>
        <div className="center h-[70vh] px-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </div>,

]
const SliderHome: React.FC = () => {
    return (
        <div className="w-full h-[65vh] z-10 bg-white">
            <div className='w-[90%] mx-auto'>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    className="h-full"
                >
                    {contentSlider.map((item, index) => (
                        <SwiperSlide key={index}>
                            {item}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SliderHome