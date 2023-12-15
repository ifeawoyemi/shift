import React from 'react'
import Navbar from '../component/navbar/Navbar'

const Layout = (children) => {
  return (
    <div className='layout-container'>
        <div>
            <Navbar/>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout