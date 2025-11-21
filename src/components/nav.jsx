import React from 'react'
import Showhide from './showhide'

export const Nav = () => {
  return (
    <>
        <nav className='flex w-screen shadow-sm items-center h-13 fixed bg-white'>
            <div className='w-[50%]'>
                <header><a href='/'>
                    <h1 className='font-bold text-3xl mx-3 text-pink-300 cursor-pointer'>We<span className='text-indigo-300'>Plan</span></h1>
                </a></header>
            </div>
            <div className='w-[50%] flex justify-end items-center mr-5'>
                <h1 className='cursor-pointer text-xl'>
                <Showhide/>
                </h1>
            </div>
        </nav>
    </>
  )
}

export default Nav