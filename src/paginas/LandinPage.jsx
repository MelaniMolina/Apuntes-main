import logoDarkMode from '../assets/dark.png'
// import segundo from '../assets/seg-log.jpg'
// import tercero from '../assets/ter-log.jpg'
// import cuarto from '../assets/cuar-log.png'
// import logoCar from '../assets/logo_principal.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const LandinPage = () => {
    const [darkMode, setdarkMode] = useState(false)
    return (
        <div className={darkMode ? "dark" : ""}>

            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>

                <nav className='p-10 mb-12 flex justify-between'>
                    <ul className='flex items-center'>
                        <li><Link to="/login" className='bg-gray-600 text-slate-400 px-6 py-2 rounded-full ml-8 hover:bg-gray-900 hover:text-white' href="#">Login</Link></li>
                    </ul>
                </nav>

                <div className='text-center'>
                    <h2 className='text-5xl py-2 text-drak  -600 font-medium md:text-6xl'>Car registration system</h2>
                    <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
                        Welcome to Online Vehicle Registration and Sales Systems, Find Varieties and More
                    </p>
                </div>
                <div className='relative mx-auto  bg-gradient-to-b from-indigo-400 rounded-full w-80 h-80 mt-12 overflow-hidden md:w-96 md:h-96 dark:border-4 border-teal-300'>
                    <img src="src/assets/logo_principal.jpg" alt="logo-Carro" />
                </div>

            </main>


            <br></br>
            <div className='text-5xl flex justify-center gap-16 py-3'>
                <img src="src/assets/seg-log.jpg" alt="logo1" width={80} height={60} className={'dark:border-2  rounded-full'} />

                <img src="src/assets/ter-log.jpg" alt="logo1" width={60} height={60} className={'dark:border-2  rounded-full'} />


            </div>


        </div>
    )
}