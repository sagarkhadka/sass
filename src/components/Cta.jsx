import { Button } from './Button'

const Cta = () => {
  return (
    <>
      <div className='py-24 bg-primary'>
        <div className='container'>
          <div className='space-y-11'>
            <h1 className='text-4xl font-semibold text-center text-white'>
              Begin sending web push within minutes!
            </h1>
            <p className='text-center max-w-[50ch] mx-auto text-white text-lg'>
              Drive visitors back to your blog, personal or e-commerce site with
              targeted website push notifications.
            </p>
            <div className='mx-auto w-fit'>
              <Button variant='secondary'>start free trial</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cta
