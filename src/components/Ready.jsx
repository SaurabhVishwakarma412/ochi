import React, { useEffect, useState } from 'react';

const Ready = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;

      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      let deltaX = x - centerX;
      let deltaY = y - centerY;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eye flex justify-center items-center relative w-full h-screen overflow-hidden bg-green-500 bg-cover bg-center">
      
      {/* Text Section */}
      <div className="w-full leading-none text-center absolute ">
        <h1 className="text-[20vh] font-bold text-black">READY</h1>
        <h1 className="text-[20vh] font-bold text-black">TO START</h1>
        <h1 className="text-[20vh] font-bold text-black">THE PROJECT?</h1>
      </div>

      {/* Eyes Section */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="flex gap-20">
          
          {/* Left Eye */}
          <div className="flex items-center justify-center w-[20vh] h-[20vh] rounded-full bg-zinc-100 shadow-md">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-5 origin-center"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="flex items-center justify-center w-[20vh] h-[20vh] rounded-full bg-zinc-100 shadow-md">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 w-full h-5 origin-center"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Ready;
