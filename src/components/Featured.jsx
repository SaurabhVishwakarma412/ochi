import React from 'react'

const Featured = () => {
    return (
        <div className='w-full py-20'>
            <div>
 
                <h1 className='text-5xl px-20 '>Featured Projects</h1>
                <div className='border-b-[1px] border-zinc-500 my-20 pb-20'></div>
                <div className='w-full px-20 '>
                    {/* card section  */}
                    <div className='cards relative w-full flex gap-10'>
                        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold z-10 text-white'>SAURABH</h1>
                        <div className='cardcontainer w-1/2 h-[70vh] rounded-2xl overflow-hidden'>
                            <div className='card w-full h-full '>
                                <img className='w-full h-full object-cover rounded-2xl' src="https://images.unsplash.com/photo-1760889274812-1ff168f0d1ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500" alt="Card Image" />
                            </div>
                        </div>
                        <div className='cardcontainer w-1/2 h-[70vh] rounded-2xl overflow-hidden'>
                            <div className='card w-full h-full '>
                                <img className='w-full h-full object-cover rounded-2xl' src="https://images.unsplash.com/photo-1760889274812-1ff168f0d1ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500" alt="Card Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
