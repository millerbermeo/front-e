import React from 'react'
import SliderHome from '../components/SliderHome'
import ContentImage from '../components/ContentImage'
import InfoPage from '../components/InfoPage'

const Home: React.FC = () => {
    return (
        <>
            <SliderHome />

            <InfoPage />
            <section className='py-10'>
                <h3 className="text-3xl font-semibold text-gray-800 text-center mb-10 md:text-4xl lg:text-4xl">
                    Productos Más Vendidos
                </h3>
                <ContentImage />
            </section>



        </>
    )
}

export default Home