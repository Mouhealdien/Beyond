import { Container } from '@/components/global/Container'
import Navbar from '@/components/global/navbar'
import React from 'react'
import Image from 'next/image'
import heroImg from '../../../../public/assets/projectHero.png'
const page = () => {

  const s={
    backgroundImage: "linear-gradient(to bottom, #000000, #3b3b3b, #777777, #b9b9b9, #ffffff)"
  }
  return (
    <div>
    <header className="relative h-[700px] xs:h-[800px]  overflow-hidden">
      <Container>
        <div className="relative w-full   bg-transparent">
          {" "}
          <Navbar customeStyle="absolute" />
        </div>

        
      </Container>
  
      <div className="   ">
        <div className="flex flex-col   absolute bg-transparent w-full top-60  xs:top-96 text-center   z-50    ">
          <h1 className="text-2xl xs:text-2xl md:text-4xl m-auto w-full md:w-[800px] lg:w-full   text-white">
          Restaurant Reservations Revolution
          </h1>
          <h1 className=" pt-2 text-lg md:text-2xl m-auto w-full md:w-[800px] lg:w-full   text-white">
            Case Studies
          </h1>
       
          
        </div>
      </div>

      <div  style={{backgroundColor:'rgba(20, 24, 98,0.5)'}} className=" absolute top-0 left-0 w-full   h-full z-10"></div>
      {/* <div    className="  bg-transparent py-20 border border-black absolute top-[600px] left-0 w-full  h-[300px]   z-10">
        <div
        className='h-[100px]'
        style={s}>

        </div>
      </div> */}

      <Image
        className="absolute   object-cover  -z-10 w-auto min-w-full min-h-full "
        style={{
          filter:
          " blur(10px) ",
        }}
        src={heroImg}
        alt="hero"
        
      />

    </header>
    <div  
    className='mt-[-150px] md:mt-[-100px] relative border border-black '
    >
      <svg className='absolute w-full z-50' width="1728" height="344" viewBox="0 0 1728 344" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1728" height="344" fill="url(#paint0_linear_1203_10007)"/>
<defs>
<linearGradient id="paint0_linear_1203_10007" x1="864" y1="0" x2="864" y2="344" gradientUnits="userSpaceOnUse">
<stop stop-color="#22294B" stop-opacity="0"/>
<stop offset="0.63" stop-color="#A0A3B2"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

    </div>
    </div>
  )
}

export default page