import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto mt-12 rounded-lg overflow-hidden">
      {/* خلفية السلايدر بحجم أكبر */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[550px] md:h-[600px] lg:h-[650px] rounded-lg relative z-0"
      >
        <SwiperSlide>
          <img
            src="/images/deva1.jpg"
            alt="Slide 1"
            className="h-full w-full object-contain max-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/deva2.jpg"
            alt="Slide 2"
            className="h-full w-full object-contain  max-auto"
          />
        </SwiperSlide>
      </Swiper>

      {/* الكلام فوق الصور على الشمال بدون أي background */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 md:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-6xl text-center"
        >
          <p className="text-lg mb-3">Front-End Developer</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-emerald-400">Fatma Sayed</span>
          </h1>
          <p className="text-slate-200 text-lg mb-6">
            I craft fast, accessible, and delightful UIs with React and Tailwind.
            <br />
            Strong problem-solving, clear communication.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-primary px-6 py-3">
              View Projects
            </a>
            <a href="/cv.pdf" className="btn btn-ghost px-6 py-3">
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
