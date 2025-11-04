import React from 'react'

const About = () => {
    return (
        <div className=' text-black w-full min-h-screen p-8 bg-[#CDEA68] rounded-3xl'>
            <div>
                <h1 className='my-16 font-sans text-4xl'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
                <div className='w-full h-px bg-zinc-500 '></div>

                {/* skipping this part */}

                {/* <div className='flex'>
                <p className='w-1/2'>What you can expect:</p>
                <div className='w-1/2 flex'>
                    <div className='w-1/2'>
                        <p>We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"</p>
                        <p>Our clients make the world go round - from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.</p>
                        <p>Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.</p>
                    </div>
                    <div className='w-1/2'>
                        <p>S:</p>
                        <div>Instagram</div>
                        <div>Facebook</div>
                        <div>Linkedin</div>
                        <div>Behance</div>
                    </div>
                </div>
            </div> */}

                <div className='w-full h-px bg-zinc-500 '></div>

                <div className='flex'>
                    <div className='w-1/2'>
                        <h1 className='text-5xl'>Our approach:</h1>
                        <button className='flex uppercase gap-10 text-xl items-center px-6 py-4 bg-zinc-900 mt-10 rounded-full text-white'>READ MORE
                            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                        </button>
                    </div>
                    <div className="w-1/2 h-[70vh] rounded-2xl m-4 overflow-hidden bg-green-400 flex justify-center items-center">
                        <video
                            className="w-full h-full object-cover rounded-2xl" autoPlay muted loop repeat
                            src="https://ochi.design/wp-content/uploads/2025/09/ochi.design-Presentation-Agency-1.mp4"
                        />
                    </div>


                </div>  
            </div>

        </div>

    )
}

export default About
