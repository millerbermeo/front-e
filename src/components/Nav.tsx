import React from 'react'
import Button from './Button'
import { BowArrow, Car, Contact, User } from 'lucide-react'

const Nav: React.FC = () => {
    return (
        <div className='w-full h-16'>
            <div className='container mx-auto flex justify-between items-center'>
                <figure className=''>
                    <img className='w-16' src="/logo.png" alt="" />
                </figure>


                <div className='flex gap-5'>
                    <Button className='size-10 pt-1 flex justify-center items-center rounded-full bg-[#FB8C00] text-white'>
                        <Car />
                    </Button>

                    <Button className='size-10 pt-1 flex justify-center items-center rounded-full bg-[#FB8C00] text-white'>
                        <BowArrow />
                    </Button>

                    <Button className='size-10 pt-1 flex justify-center items-center rounded-full bg-[#FB8C00] text-white'>
                        <Contact />
                    </Button>

                    <Button className='size-10 pt-1 flex justify-center items-center rounded-full bg-[#FB8C00] text-white'>
                        <User />
                    </Button>
                </div>

            </div>


        </div>
    )
}

export default Nav