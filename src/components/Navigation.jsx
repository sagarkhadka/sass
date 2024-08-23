import React from 'react'

const Navigation = () => {
  return (
    <>
      <nav className='absolute top-0'>
        <div className='grid grid-cols-5 container py-4'>
          <h2 className='text-white text-xl font-semibold'>
            aim<span className='text-primary-foreground'>Tell</span>
          </h2>
        </div>
      </nav>
    </>
  )
}

export default Navigation
