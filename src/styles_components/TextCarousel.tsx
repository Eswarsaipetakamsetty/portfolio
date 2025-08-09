import type React from "react";
import { useEffect, useState } from "react";
import "../styles/TextCarousel.css"

interface TextCarouselProps {
    texts: string[];
    interval?: number;
    className?: string;
}

const TextCarousel: React.FC<TextCarouselProps> = ({texts, interval= 2000, className}) => {
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const timer = setInterval(()=> {
            setFade(false)

            setTimeout(() => {
                setIndex((prev)=> (prev+1) %texts.length)
                setFade(true)
            }, 500)
        }, interval)

        return () => clearInterval(timer)
    }, [texts, interval])

    return (
        <span className={`text-carousel ${fade? "fade-in": "fade-out"} ${className}`}>
            {texts[index]}
        </span>
    )
}

export default TextCarousel