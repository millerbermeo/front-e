import React from 'react'

const Topbar: React.FC = () => {
    return (
        <div className='w-full py-2.5 bg-[#08B69F] text-white'>
            <div className='container mx-auto flex justify-between items-cente'>
                <div>
                    <span>
                        Black friday
                    </span>
                </div>


                <div>
                    <select name="" id="">
                        <option value="">English</option>
                        <option value="">Espanol</option>
                    </select>

                    <button>
                        help
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Topbar