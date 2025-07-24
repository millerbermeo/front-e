import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routesNavbar } from '../utils/arrays'
import CategoriesButton from './CategoriesButton'
import Button from '../shared/Button'

interface MenuItems {
    id: number
    label: string
    route: string
}


const Navbar: React.FC = () => {




    return (
        <nav className='w-full py-5.5 bg-white border-[1px] border-gray-200 '>
            <div className='container mx-auto flex justify-between items-center'>

                <div className='flex gap-10'>

                    <CategoriesButton />

                    <ul className='center gap-5'>
                        {routesNavbar.map((item: MenuItems) => {

                            const location = useLocation()

                            return (
                                <Link key={item.id} to={item.route}>
                                    <li className={`  hover:text-success transition-colors relativ ${location.pathname == item.route ? 'border-b-2 text-[#08B69F] border-[#08B69F]' : 'border-none text-gray-600'}`}>
                                        {item.label}
                                    </li>
                                </Link>
                            )
                        })}

                    </ul>
                </div>

                <div></div>
                <Button className='bg-none'>
                    <span>Contacto: 3216459321</span>
                </Button>

            </div>
        </nav>
    )
}

export default Navbar