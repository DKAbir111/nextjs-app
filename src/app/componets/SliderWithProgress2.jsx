"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

const images = [
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
];

const SLIDE_DURATION = 3000;

const SliderWithProgress2 = () => {
    const [progress, setProgress] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    setCurrentSlide((prevSlide) => {
                        const nextSlide = (prevSlide + 1) % images.length;
                        return nextSlide;
                    });
                    return 0; // Reset progress bar when it reaches 100
                }
                return prevProgress + (100 / (SLIDE_DURATION / 50)); // Increment progress
            });
        }, 50);

        return () => clearInterval(progressInterval);
    }, [currentSlide]); // Re-run when the slide changes

    const handleSlideChange = (index) => {
        setProgress(0);
        setCurrentSlide(index);
        if (index === images.length - 1) {
            router.push("/details"); // Navigate to /details on the last slide
        }
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handleSlideChange,
        initialSlide: currentSlide, // Start from the current slide
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full flex gap-2 px-2 pt-2 z-10">
                <div className="flex-1 h-1 bg-gray-300 rounded overflow-hidden">
                    <div
                        className="h-full bg-green-500 transition-all duration-[50ms]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Swiper Slider */}
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderWithProgress2;
