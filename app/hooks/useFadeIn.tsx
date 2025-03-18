'use client'; // Ensure this code runs only on the client side

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const useFadeIn = () => {
    useEffect(() => {
        // Select all elements with the class 'fade-in' to animate
        const elements = document.querySelectorAll('.fade-in');

        // Loop through each element and trigger GSAP fade-in animation when it comes into view
        elements.forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 50, // Start from 50px below the original position
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element, // This tells ScrollTrigger which element to observe
                    start: 'top 80%', // Animation starts when the element's top is 80% from the top of the viewport
                    end: 'top 30%', // Animation ends when the element's top is 30% from the top of the viewport
                    toggleActions: 'play none none reverse', // Play on enter, reverse on exit
                },
            });
        });
    }, []); // Empty dependency array ensures this runs once after the component mounts
};

export default useFadeIn;
