"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
];

const SLIDE_DURATION = 3000; // milliseconds

const SliderWithProgress = () => {
    const [progressArray, setProgressArray] = useState(
        new Array(images.length).fill(0)
    );
    const swiperRef = useRef(null);
    const intervalRef = useRef(null);
    const activeIndexRef = useRef(0);

    const startProgress = (index) => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        const startTime = Date.now();

        intervalRef.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const percentage = Math.min((elapsed / SLIDE_DURATION) * 100, 100);

            setProgressArray((prev) => {
                const updated = [...prev];
                updated[index] = percentage;
                return updated;
            });

            if (percentage >= 100) {
                clearInterval(intervalRef.current);
            }
        }, 50); // update every 50ms for smooth animation
    };

    useEffect(() => {
        startProgress(activeIndexRef.current);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Progress Bars */}
            <div className="absolute top-0 left-0 w-full flex gap-2 px-2 pt-2 z-10">
                {progressArray.map((progress, index) => (
                    <div key={index} className="flex-1 h-1 bg-gray-300 rounded overflow-hidden">
                        <div
                            className="h-full bg-green-500 transition-all duration-[50ms]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                ))}
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: SLIDE_DURATION, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => {
                    const newIndex = swiper.activeIndex;
                    activeIndexRef.current = newIndex;

                    const newProgressArray = images.map((_, i) => {
                        if (i < newIndex) return 100;      // previously viewed slides
                        if (i === newIndex) return 0;       // current slide
                        return 0;                           // future slides
                    });
                    setProgressArray(newProgressArray);
                    startProgress(newIndex);
                }}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderWithProgress;
