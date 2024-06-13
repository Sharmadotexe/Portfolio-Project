import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 id="contact'>
        <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
            <img
            src='/footer-grid.svg'
            alt='grid'
            className='w-full h-full opacity-40'
            />
            <div className="flex flex-col items-center ">
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take
                    <span className='text-purple'> your </span> digital 
                    presence to next level
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla iste eum nesciunt amet fugiat enim rerum ex temporibus dolores, placeat minima repellendus, fugit, aliquam at asperiores veniam iusto rem?</p>
                <a href='mailto:vikas.sh0812@gmail.com'>
                    <MagicButton 
                    title='lets get in touch'
                    icon={<FaLocationArrow/>}>

                    </MagicButton>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer