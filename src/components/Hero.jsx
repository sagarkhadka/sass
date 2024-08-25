import { CirclePlay } from 'lucide-react'

import { Button } from './Button'

const Hero = () => {
  return (
    <>
      <main className='grid grid-cols-1 md:grid-cols-2 min-h-[55vh] md:min-h-[87vh] bg-primary'>
        <div className='flex justify-end py-20 px-8 w-full'>
          <div className='flex md:max-w-[46.25rem] w-full h-full justify-end gap-12 md:gap-20 flex-col md:pb-20'>
            <h1 className='text-3xl sm:text-3xl md:text-7xl text-white'>
              <strong>Grow your business</strong> with web push notifications
            </h1>
            <div className='flex flex-wrap items-center gap-3'>
              <Button
                variant='secondary'
                className='shadow-lg shadow-primary-dark'>
                Start free trial
              </Button>
              <Button
                variant='link'
                className='text-white flex items-center gap-3'>
                <span>Watch Video</span> <CirclePlay size={22} />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
