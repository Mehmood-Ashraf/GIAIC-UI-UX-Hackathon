import React from 'react'
import Header from './Header'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <Header />
        <div className='flex justify-center items-center'>
        <div className='max-w-[630px] flex flex-col gap-8 my-[120px] items-center justify-center'>
            <div>
                <p className='text-primary font-bold text-8xl leading-[104px] font-helvetica'>404</p>
            </div>
            <div className='flex flex-col gap-6'>
                <p className='text-[#333333] font-helvetica font-bold text-center text-[32px] leading-10'>Oops! Look likes something going wrong</p>
                <p className='text-[#4F4F4F] font-inter text-lg text-center'>Page Cannot be found! we’ll have it figured out in no time.
                Menwhile, cheek out these fresh ideas:</p>
            </div>
            <div>
                <Link href={"/"}>
                <button className='bg-primary text-background py-4 px-12 rounded-md'>Go to home</button>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default page