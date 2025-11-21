import React from 'react'
import { useState } from 'react'

export const Showhide = () => {
  const [isVisible, setIsVisible ] = useState(false)

  return (
    <div>
        {isVisible && <div className='bg-white absolute top-13 right-0 sm:w-screen lg:w-90 shadow-xl border-1 border-gray-300 m-3 p-3 rounded-xl cursor-text text-base'>
            WePlan is a site for anyone to easily plan and track all the work they need to complete for the week.
            <br/>
            We aim to make it easier for everyone to track their week and accomplish their goals/needs.
            </div>}
        <button className='cursor-pointer text-pink-300' onClick={() => setIsVisible(!isVisible)}>About</button>
    </div>
  )
}

export default Showhide