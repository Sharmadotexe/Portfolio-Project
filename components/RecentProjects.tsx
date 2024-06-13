import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <div className='py-20' >
        <h1 className='heading'>
            A Small Selection of {' '}
            <span className='text-purple'>Recent Projects</span>
        </h1>
        <div className='flex flex-wrap justify-center items-center p-4 gap-16 mt-10'>
            {projects.map(({id, des, title, img, iconLists, link}) => (
                <div key ={id} className='lg:min-h-[32.5rem] h-[25rem] flex items justify-center sm:w-96 w-[80vw] '>
                    <PinContainer title={title} href={link}>
                        <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                <img src='/bg.png' alt='bg-img'/>
                            </div>
                            <img 
                            src={img}
                            alt={title}
                            className='z-10 absolute bottom-0'/>
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 '>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className=''>

                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects