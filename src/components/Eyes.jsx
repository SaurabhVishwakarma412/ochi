import React, { useEffect, useState } from 'react'
import bgImage from '../assets/bgImage.jpg';

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Mouse position
            let x = e.clientX;
            let y = e.clientY;

            // Center of the screen
            let centerX = window.innerWidth / 2;
            let centerY = window.innerHeight / 2;

            // Difference
            let deltaX = x - centerX;
            let deltaY = y - centerY;

            // Correct angle calculation
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className='eye w-full h-screen overflow-hidden bg-zinc-900 bg-cover bg-center'
            style={{
                backgroundImage: `url(${bgImage})`
            }}>
            <div className='relative w-full h-full flex items-center justify-center'>
                <div className='flex gap-10'>

                    {/* Left Eye */}
                    <div className='flex items-center justify-center w-[30vh] h-[30vh] rounded-full bg-zinc-100 shadow-md'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                                className='absolute top-1/2 left-1/2 w-full h-5 origin-center'
                            >
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Eye */}
                    <div className='flex items-center justify-center w-[30vh] h-[30vh] rounded-full bg-zinc-100 shadow-md'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='absolute top-1/2 left-1/2 w-full h-5 origin-center'>
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Eyes
