import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-center text-white justify-between'>
      <h1 className='text-2xl font-bold text-left'>Hello <br /> {data.name}</h1>
      <button className='bg-red-600 rounded-lg px-2 py-1 hover:bg-red-700 font-semibold'>Log Out</button>
    </div>
  )
}

export default Header
