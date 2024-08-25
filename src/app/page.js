import { Fragment } from 'react'
import { Chrome } from 'lucide-react'
import Image from 'next/image'

import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import WorkCard from '@/components/WorkCard'
import { work } from '@/data/workdata'
import { Button } from '@/components/Button'
import Features from '@/components/Features'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className=''>
      <Navigation />
      <Hero />
      <section className='container py-28 md:py-48'>
        <div className='space-y-5 mx-auto mb-20 max-w-[65ch]'>
          <h1 className='text-5xl font-semibold text-primary-foreground text-center'>
            How it works
          </h1>
          <p className='text-center text-neutral-500 text-lg'>
            Drive visitors back to your blog, personal or e-commerce site with
            targeted website push notifications.
          </p>
        </div>

        {work.map((item, index) => (
          <Fragment key={index}>
            <WorkCard
              index={index}
              title={item.title}
              description={item.description}
              image={item.imageSource}
            />
          </Fragment>
        ))}
      </section>

      <section className='py-24 md:py-40 border-y border-stone-200 bg-accent'>
        <div className='container'>
          <div className='space-y-5 mx-auto mb-20 max-w-[65ch]'>
            <h1 className='text-5xl font-semibold text-primary-foreground text-center'>
              Support
            </h1>
            <p className='text-center text-neutral-500 text-lg'>
              Supported on every push enabled browsers, including:
            </p>
          </div>

          <div className='flex items-center justify-center flex-wrap gap-14'>
            <Chrome color='#aab9ce' size={150} />
            <Image
              src='/images/safari.svg'
              alt='safari'
              height={150}
              width={150}
            />
            <Image
              src='/images/firefox.svg'
              alt='firefox'
              height={150}
              width={150}
            />
            <Image
              src='/images/android.svg'
              alt='android'
              height={180}
              width={180}
            />
          </div>

          <div className='flex justify-center mt-20'>
            <Button className='bg-secondary text-white w-fit'>
              Start free trial
            </Button>
          </div>
        </div>
      </section>

      <section className='py-28 md:py-48 container'>
        <div className='space-y-5 mx-auto mb-20 max-w-[65ch]'>
          <h1 className='text-5xl font-semibold text-primary-foreground text-center'>
            Features you&apos;ll love
          </h1>
          <p className='text-center text-neutral-500 text-lg'>
            Drive visitors back to your blog, personal or e-commerce site with
            targeted website push notifications.
          </p>
        </div>
        <div className='mt-20'>
          <Features />
          <div className='flex justify-center mt-20'>
            <Button className='bg-secondary text-white w-fit'>
              Start free trial
            </Button>
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </main>
  )
}
