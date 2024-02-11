import React from 'react'

const Navbar = () => {
  return (
    <div className='container flex  lg:gap-80 sm:gap-10 h-20 text-white  font-bold'>
      <img className="lg:ml-40 md:ml-10 sm:ml-10" src='img/kfclogo.png' height={10} width={100}/>
      <div className="lg:ml-40 lg:w-auto md:w-fit sm:w-fit md:ml-40 sm:ml-40 flex justify-center items-center lg:gap-10  md:gap-5 sm:gap-5 lg:text-base md:text-xs sm:text-xs ">
        <div className='aboutus'>ABOUT US</div>
        <div className='aboutus'>FIND US</div>
        <div className='aboutus'>ALL CAMPAIGNS</div>
        <div className='border-3 bg-white text-center border-slate-200 h-8 rounded-full shadow-lg shadow-slate-500/40 hover:bg-sky-700 w-8'><i className="text-red-500 font-bold fa-regular fa-user"></i></div>
        <div className='border-3 bg-white text-center border-slate-200 h-8 rounded-full shadow-lg shadow-slate-500/40 hover:bg-sky-700 w-8'><i className="text-red-500 font-bold fa-solid fa-bag-shopping"></i></div>
      </div>
    </div>
  )
}

export default Navbar
