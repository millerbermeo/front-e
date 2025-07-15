import React from 'react'
import { PackageCheck, Tags, HelpCircle, ShoppingBag } from 'lucide-react'

const InfoPage: React.FC = () => {
    return (
        <div className="lg:container bg-white -translate-y-10 mx-auto shadow-md p-7 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><ShoppingBag color='#08B69F' size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                                Sobre la tienda
                            </h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">
                                Encuentra productos seleccionados con calidad garantizada.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><Tags color='#08B69F' size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                                Categorías variadas
                            </h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">
                                Electrónica, hogar, ropa, accesorios ¡y mucho más!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><HelpCircle color='#08B69F' size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                                Asistencia personalizada
                            </h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">
                                Atención al cliente para ayudarte en todo momento.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><PackageCheck color='#08B69F' size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                                Productos verificados
                            </h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">
                                Solo trabajamos con proveedores confiables y calificados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage
