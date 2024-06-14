import Image from 'next/image'
import React from 'react'
import diary from "../../public/images/diary.png"
import { homePage } from '@/lib/language'
const { title, description } = homePage

const NoRecord = () => {  
  return (
    <>
    <Image src={diary.src} alt="diary" width={300} height={300} />
    <div className='flex flex-col items-center justify-center gap-y-4'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-lg'>{description}</p>
    </div>
    </>
  )
}

NoRecord.propTypes = {}

export default NoRecord