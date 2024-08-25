import { Button } from './Button'

const Navigation = () => {
  return (
    <>
      <nav className='bg-primary top-0'>
        <div className='grid grid-cols-2 container py-4'>
          <h2 className='text-white text-xl font-semibold'>
            aim<span className='text-primary-foreground'>Tell</span>
          </h2>
          {/* <ul className='flex justify-center items-center gap-14 col-span-3'>
            <li className=''>
              <a className='cursor-pointer text-white duration-200 hover:text-primary-foreground'>
                Features
              </a>
            </li>
            <li className=''>
              <a className='cursor-pointer text-white duration-200 hover:text-primary-foreground'>
                Pricing
              </a>
            </li>
            <li className=''>
              <a className='cursor-pointer text-white duration-200 hover:text-primary-foreground'>
                Resources
              </a>
            </li>
          </ul> */}
          <div className='flex items-center gap-3 justify-end'>
            <Button variant='link' className='text-white'>
              Log In
            </Button>
            <Button variant={'outline'} className='text-white uppercase'>
              Start Free trial
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
