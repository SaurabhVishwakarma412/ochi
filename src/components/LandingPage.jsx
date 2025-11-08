import React from 'react'
import { GoArrowUpRight } from "react-icons/go";   // ✅ Correct import

const LandingPage = () => {
    return (
        <div className='w-full h-screen pt-1 bg-zinc-900 text-white'>
            <div className='textstructure mt-40 px-20'>
                <div className='masker'>
                    <h1 className='uppercase tracking-tighter font-semibold text-8xl'>WE CREATE</h1>
                </div>
                <div className='flex items-center'>
                    <div
                        className="h-20 w-32 rounded-xl bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://ochi-clone-website.vercel.app/_next/image?url=%2Fcontent-image01.jpg&w=3840&q=75')",
                        }}
                    ></div>
                    <div className='masker'>
                        <h1 className='uppercase tracking-tighter font-semibold text-8xl'>EYE OPENING</h1>
                    </div>
                </div>
                <div className='masker'>
                    <h1 className='uppercase tracking-tighter font-semibold text-8xl'>PRESENTATION</h1>
                </div>
            </div>

            <div className='w-full h-[1px] bg-zinc-700 mt-24'></div>

            <div className='flex justify-around items-center my-4 '>
                <p>Presentation and storytelling agency</p>
                <p>For innovation team and global brands</p>

                <div className='flex items-center gap-2'>
                    <div className='px-4 py-2 rounded-3xl border-[1px] border-zinc-500 font-light cursor-pointer'>
                        START THE PROJECT
                    </div>
                    <div className='px-2 py-2 rounded-3xl border-[1px] border-zinc-500 cursor-pointer'>
                        <GoArrowUpRight size={20} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandingPage
