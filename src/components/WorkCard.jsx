import Image from 'next/image'

import { cn } from '@/lib/utils'

const WorkCard = ({ index, title, description, image }) => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-14 mb-20 md:mb-0 items-center'>
        <div className='space-y-4 max-w-[50ch]'>
          <small className='uppercase text-secondary tracking-widest font-semibold'>
            step {index + 1}
          </small>
          <h3 className='text-3xl font-semibold'>{title}</h3>
          <p>{description}</p>
          {/* <div className='flex items-center gap-3'>
            <Dot color='#3dba5e' size={34} />
            <Dot color='#3dba5e' size={34} />
            <Dot color='#3dba5e' size={34} />
          </div> */}
        </div>
        <div
          className={cn('relative aspect-flex flex justify-end md:h-[30rem]', {
            'md:-order-1': index % 2 !== 0,
          })}>
          <Image
            src={image}
            alt=''
            // fill
            width={750}
            height={350}
            className='object-contain'
          />
        </div>
      </div>
    </>
  )
}

export default WorkCard
