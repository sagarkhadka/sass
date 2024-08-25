import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const Features = () => {
  return (
    <>
      <Tabs
        defaultValue='lead-data'
        className='flex flex-col md:flex-row gap-24'>
        <TabsList className='flex-col h-auto gap-3 max-w-[32rem]'>
          <TabsTrigger
            className='p-5 text-neutral-400 w-full justify-start data-[state=active]:shadow-lg data-[state=active]:shadow-neutral-200 whitespace-normal group'
            value='lead-data'>
            <div className='flex flex-col gap-4'>
              <span className='font-semibold text-left text-lg group-data-[state=active]:text-primary'>
                Lead Data Enrichment
              </span>
              <span className='text-base text-left hidden group-data-[state=active]:block'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente itaque nihil ut modi!
              </span>
            </div>
          </TabsTrigger>

          <TabsTrigger
            className='p-5 text-neutral-400 w-full justify-start data-[state=active]:shadow-lg data-[state=active]:shadow-neutral-200 whitespace-normal group'
            value='segmentation'>
            <div className='flex flex-col gap-4'>
              <span className='font-semibold text-left text-lg group-data-[state=active]:text-primary'>
                Advanced Segmentation
              </span>
              <span className='text-base text-left hidden group-data-[state=active]:block'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente itaque nihil ut modi!
              </span>
            </div>
          </TabsTrigger>

          <TabsTrigger
            className='p-5 text-neutral-400 w-full justify-start data-[state=active]:shadow-lg data-[state=active]:shadow-neutral-200 whitespace-normal group'
            value='automation'>
            <div className='flex flex-col gap-4'>
              <span className='font-semibold text-left text-lg group-data-[state=active]:text-primary'>
                Automation & Triggers
              </span>
              <span className='text-base text-left hidden group-data-[state=active]:block'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente itaque nihil ut modi!
              </span>
            </div>
          </TabsTrigger>

          <TabsTrigger
            className='p-5 text-neutral-400 w-full justify-start data-[state=active]:shadow-lg data-[state=active]:shadow-neutral-200 whitespace-normal group'
            value='reporting'>
            <div className='flex flex-col gap-4'>
              <span className='font-semibold text-left text-lg group-data-[state=active]:text-primary'>
                Rich Reporting
              </span>
              <span className='text-base text-left hidden group-data-[state=active]:block'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente itaque nihil ut modi!
              </span>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value='lead-data'>
          <Image src='/images/features.png' alt='' height={500} width={650} />
        </TabsContent>
        <TabsContent value='segmentation'>
          <Image src='/images/features.png' alt='' height={500} width={650} />
        </TabsContent>
        <TabsContent value='automation'>
          <Image src='/images/features.png' alt='' height={500} width={650} />
        </TabsContent>
        <TabsContent value='reporting'>
          <Image src='/images/features.png' alt='' height={500} width={650} />
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>
    </>
  )
}

export default Features
