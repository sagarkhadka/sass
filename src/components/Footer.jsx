import Image from 'next/image'
import { Button } from './Button'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <footer className='pt-20 pb-12'>
        <div className='container'>
          <div className='flex flex-col md:flex-row gap-16 md:gap-24'>
            <Image
              src='/images/logo.jpeg'
              alt='logo'
              height={80}
              width={160}
              className='object-contain'
            />

            <div className='flex gap-16 md:gap-20 flex-wrap'>
              <div className='min-w-[16rem] space-y-4'>
                <h5 className='font-semibold text-2xl text-stone-500'>
                  Site Map
                </h5>
                <ul>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Log in</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div className='min-w-[16rem] space-y-4'>
                <h5 className='font-semibold text-2xl text-stone-500'>
                  Resources
                </h5>
                <ul>
                  <li>Acquisition</li>
                  <li>Support</li>
                  <li>Retention</li>
                </ul>
              </div>
            </div>

            <div className='flex-[2] flex md:justify-center h-fit pt-4'>
              <Button>Start Free trial</Button>
            </div>

            <div>
              <div className='flex items-center gap-6'>
                <Facebook />
                <Instagram />
                <Linkedin />
              </div>
            </div>
          </div>

          <div className='pt-12 mt-12 border-t border-neutral-300'>
            <p className='text-center'>
              &copy; Drebba 2024. All rights reserved. Terms and Conditions.
              Privay Policy
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
