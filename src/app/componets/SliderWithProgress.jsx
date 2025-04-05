"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
];

const SLIDE_DURATION = 3000;

const SliderWithProgress = () => {
    const [progressArray, setProgressArray] = useState(
        new Array(images.length).fill(0)
    );
    const swiperRef = useRef(null);
    const intervalRef = useRef(null);
    const activeIndexRef = useRef(0);
    const router = useRouter();

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
                goNext(false); // false = auto slide
            }
        }, 50);
    };

    const goNext = (byTap = true) => {
        const swiper = swiperRef.current;
        const currentIndex = activeIndexRef.current;
        if (!swiper) return;

        if (currentIndex === images.length - 1) {
            if (byTap) {
                router.push("/details"); // only tap on last goes to /details
            } else {
                swiper.slideTo(0); // auto go back to first
            }
        } else {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        const swiper = swiperRef.current;
        if (!swiper) return;
        swiper.slidePrev();
    };

    const handleTap = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - bounds.left;

        if (clickX > bounds.width / 2) {
            goNext(true); // tap to next
        } else {
            goPrev(); // tap to prev
        }
    };

    useEffect(() => {
        startProgress(activeIndexRef.current);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div
            className="relative w-full max-w-lg mx-auto cursor-pointer"
            onClick={handleTap}
        >
            {/* Progress Bars */}
            <div className="absolute top-0 left-0 w-full flex gap-2 px-2 pt-2 z-10">
                {progressArray.map((progress, index) => (
                    <div
                        key={index}
                        className="flex-1 h-1 bg-gray-300 rounded overflow-hidden"
                    >
                        <div
                            className="h-full bg-green-500 transition-all duration-[50ms]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                ))}
            </div>

            {/* Swiper Slider */}
            <Swiper
                loop={false} // we handle manual loop
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    const newIndex = swiper.activeIndex;
                    activeIndexRef.current = newIndex;

                    const newProgressArray = images.map((_, i) => {
                        if (i < newIndex) return 100;
                        if (i === newIndex) return 0;
                        return 0;
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
