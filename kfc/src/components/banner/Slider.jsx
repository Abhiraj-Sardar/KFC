import React from 'react'

const Slider = () => {
    return (
        <div className='container w-70   h-80'>
            <div className="slider-content h-80 flex gap-5 " >
                <div className="slide flex  gap-60 flex-grow-0 flex-shrink-0 basis-full" >
                    <div className='ml-40'>
                        <h1 className='text-5xl text-slate-200'>BARGAIN</h1>
                        <h1 className='text-5xl text-slate-200'>BUCKET MENU</h1>
                        <h1 className='text-5xl text-slate-200'>CAMPAIGN</h1>
                        <br/>
                        <p className=' text-slate-200 justify-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, inventore nemo.<br/> Molestias dolor similique aliquid minus. Porro, laborum sequi nisi similique <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eaque <br/>similique ducimus. soluta modi.</p>
                        <button className='rounded-full hover:bg-yellow-300 text-lg font-bold border-2 border-white mt-12 p-2 text-white'>ORDER NOW</button>
                    </div>
                    <img src="img/kfcbucket.png" alt="Image 1" />
                </div>
                {/* <div className="slide flex  gap-60 flex-grow-0 flex-shrink-0 basis-full" >
                    <div className='ml-40'>
                        <h1 className='text-5xl text-slate-200'>BARGAIN</h1>
                        <h1 className='text-5xl text-slate-200'>BUCKET MENU</h1>
                        <h1 className='text-5xl text-slate-200'>CAMPAIGN</h1>
                        <p className=' text-slate-200 justify-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, inventore nemo.<br/> Molestias dolor similique aliquid minus. Porro, laborum sequi nisi similique <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eaque <br/>similique ducimus. soluta modi.</p>
                        <button className='rounded-full hover:bg-yellow-300 text-lg font-bold border-2 border-white mt-12 p-2 text-white'>ORDER NOW</button>
                    </div>
                    <img src="img/kfcbucket.png" alt="Image 1" />
                </div>
                <div className="slide flex  gap-60 flex-grow-0 flex-shrink-0 basis-full" >
                    <div className='ml-40'>
                        <h1 className='text-5xl text-slate-200'>BARGAIN</h1>
                        <h1 className='text-5xl text-slate-200'>BUCKET MENU</h1>
                        <h1 className='text-5xl text-slate-200'>CAMPAIGN</h1>
                        <p className=' text-slate-200 justify-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, inventore nemo.<br/> Molestias dolor similique aliquid minus. Porro, laborum sequi nisi similique <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eaque <br/>similique ducimus. soluta modi.</p>
                        <button className='rounded-full hover:bg-yellow-300 text-lg font-bold border-2 border-white mt-12 p-2 text-white'>ORDER NOW</button>
                    </div>
                    <img src="img/kfcbucket.png" alt="Image 1" />
                </div> */}
                
            </div>
        </div>
    )
}

export default Slider
