import React from 'react'
import Tabla from '../componets/Tabla'

const Listar = () => {
    return (
        <div>
            <h1 className='font-black text-4xl text-blue-500'>Vehicle Information</h1>
            <hr className='my-4' />
            <p className='mb-8'>You can see vehicle information</p>
            <Tabla/>
        </div>
    )
}

export default Listar