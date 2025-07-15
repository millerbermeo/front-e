import React from 'react'
import  '../styles/loader.css'


const Loader: React.FC = () => {
    return (
        <div className="loader">
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
        </div>
    )
}

export default Loader