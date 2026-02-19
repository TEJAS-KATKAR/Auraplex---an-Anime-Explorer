import { banner1,banner2,banner3,banner4,banner6,banner7,banner8,banner9,banner10, Hero } from '../assets'
import { useState, useEffect } from "react";

function Animation() {

  // 🔥 Dynamic radius based on screen width
  const [radius, setRadius] = useState(280);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(100);        // phone
      } else if (window.innerWidth < 768) {
        setRadius(180);        // small tablet
      } else {
        setRadius(280);        // desktop
      }
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#e6e6f0] flex justify-center md:items-center p-4">

      {/* MAIN CARD */}
      <div className="
        relative w-full max-w-6xl
        h-[45vh] sm:h-[65vh] md:h-[90vh]
        rounded-3xl overflow-hidden shadow-2xl bg-white
      ">

        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/014/919/870/non_2x/millimeter-graph-paper-grid-seamless-pattern-abstract-geometric-squared-background-line-pattern-for-school-technical-engineering-scale-measurement-illustration-on-white-background-vector.jpg')] bg-cover bg-center z-0"></div>

        {/* 3D SLIDER */}
        <div className="
          absolute
          top-[38%] sm:top-[4%] md:top-[0%]
          left-1/2 -translate-x-1/2
          z-10 slider-scene
        ">

          <div
            className="
              slider-rotate
              relative
              w-[60px] h-[80px]
              sm:w-[160px] sm:h-[210px]
              md:w-[140px] md:h-[200px]
            "
          >
            {[banner1,banner2,banner3,banner4,banner6,banner7,banner8,banner9,banner10].map((img, i) => (
              <div
                key={i}
                className="item"
                style={{
                  transform: `
                    rotateY(${i * (360 / 9)}deg)
                    translateZ(${radius}px)
                  `
                }}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* HERO IMAGE */}
        <img
          src={Hero}
          className="
            absolute bottom-0 left-1/2 -translate-x-1/2
            h-[50%] sm:h-[60%] md:h-[80%]
            object-contain
            z-5
          "
        />

{/* CONTENT */}
<div className="
  absolute md:bottom-6 top-4 md:top-auto
  left-1/2 -translate-x-1/2
  w-[90%] z-20
  flex flex-col
  md:flex-row
  items-center md:items-end
  justify-start md:justify-between
  text-center md:text-left
  gap-2 md:gap-0
">
  
  <h1 className="
    text-5xl sm:text-4xl md:text-7xl
    font-extrabold
    text-[#2a2841]
    leading-none
  ">
    AURA PLEX
  </h1>

  <div className="md:text-right">
    <h2 className="text-base sm:text-lg md:text-2xl font-semibold">
      TEJAS K.
    </h2>
    <h4 className="text-xs sm:text-sm md:text-base">
      Web Design
    </h4>
    <h4 className="text-[10px] sm:text-sm md:text-base">
      Follow me on Linkedin
    </h4>
  </div>

</div>


      </div>
    </div>
  )
}

export default Animation
