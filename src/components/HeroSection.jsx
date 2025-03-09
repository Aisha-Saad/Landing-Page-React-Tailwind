
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 hg:mt-20">
        <h1 className=" text-4xl sm:text-6xl text-center tracking-wide">
          VirtualR bulid tools 
      <span className="bg-gradient-to-r from-orange-800 to-red-800 text-transparent bg-clip-text">{" "}for developers</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae exercitationem dolorum voluptas. Sapiente distinctio eius odit culpa nam porro, vero explicabo beatae quia suscipit saepe. 
          Impedit accusamus nobis ea. Dolores dignissimos aliquid reprehenderit ab obcaecati earum iusto veniam facere.</p>
          <div className="flex jus justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-3 rounded-md'>Start for free</a>
            <a href="#" className='py-3 px-4 mx-3 rounded-md border '>Docunmentaion</a>
          </div>

          <div className="flex mt-10 justify-center">
              <video  autoPlay loop muted className=' rounded-lg w-1/2 border  border-orange-700 shadow-orange-400 mx-2 my-4'>
              <source src={video1} type="video/mp4" />
              Your browser dose not support the vide tag
              </video>
              <video  autoPlay loop muted className=' rounded-lg w-1/2 border  border-orange-700 shadow-orange-400 mx-2 my-4'>
              <source src={video2} type="video/mp4" />
              Your browser dose not support the vide tag
              </video>
          </div>
    </div>
  )
}

export default HeroSection