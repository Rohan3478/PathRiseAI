"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { useEffect } from 'react'
const HeroSection = () => {

    const imageRef = useRef(null);
    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {

            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled")
            }
            else {
                imageElement.classList.remove("scrolled")
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    

  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl gradient-title'>
                    Your AI Career Assistant for
                    <br/>
                    Professional Success 
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                    Advance your career with personalized guidance, interview prep and AI-powered tools for job success.
                </p>
            </div>
            <div>
                <Link href="/dashboard">
                <Button size="lg" className="px-8">Get Started</Button>
                </Link>
            </div>
            <div className='hero-image-wrapper mt-5 md:mt-0'>
                <div ref={imageRef} className='hero-image'>
                    <Image
                    src={"/banner1.jpg"} 
                    width={1080}
                    height={720}
                    alt='Banner PathRiseAI'
                    className='rounded-lg shadow-2xl border mx-auto'
                    priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection