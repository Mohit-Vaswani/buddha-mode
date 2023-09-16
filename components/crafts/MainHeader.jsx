import React from 'react'

const MainHeader = (props) => {
  return (
    <header className='flex justify-between mt-3'>
      <h2 className='text-4xl font-semibold'>{props.title}</h2>
      {/* <button className='text-3xl bg-orange-600 rounded-lg p-1 px-3'>+</button> */}
    </header>
  )
}

export default MainHeader