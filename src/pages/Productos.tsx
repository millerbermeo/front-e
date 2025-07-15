import TabProductos from '../app/productos/TabProductos'
import React from 'react'

const Productos: React.FC = () => {
    return (
        <div className='w-full'>
            <div className="w-[90%] mx-auto">
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 1" defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10">

                        <TabProductos />
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 2" />
                    <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 3" />
                    <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
                </div>
            </div>
        </div>
    )
}

export default Productos