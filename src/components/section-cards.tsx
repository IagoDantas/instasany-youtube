'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Mockup from '/public/mockup-main.png'

import Card01 from '/public/image-01.png'

import Card02 from '/public/image-02.png'
import Card03 from '/public/image-03.png'
import Card04 from '/public/image-04.png'
import Card05 from '/public/image-05.png'
import Card06 from '/public/image-06.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export function SectionCards() {

  const mockupRef = useRef(null)
  const titleRef = useRef(null)
  const sectionRef = useRef(null)
  const card01Ref = useRef(null)
  const card02Ref = useRef(null)
  const card03Ref = useRef(null)
  const card04Ref = useRef(null)
  const card05Ref = useRef(null)
  const card06Ref = useRef(null)

  const section = sectionRef.current


  function animateCards(images: null[], position: number) {
    gsap.fromTo(images, {
      opacity: 0,
      x: position
    }, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: .2,
      scrollTrigger: {
        trigger: section,
        start: 'center center',
      }
    })
  }


  useEffect(() => {
    const mockupPhone = mockupRef.current
    const title = titleRef.current



    gsap.fromTo(mockupPhone, {
      opacity: 0,
      scale: .5
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power5.out'
    })

    gsap.fromTo(title, {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: '55% center',
      }
    })
    const img01 = card01Ref.current
    const img02 = card02Ref.current
    const img03 = card03Ref.current
    const img04 = card04Ref.current
    const img05 = card05Ref.current
    const img06 = card06Ref.current

    const leftImages = [img01, img02, img03]
    const rightImages = [img04, img05, img06]

    animateCards(leftImages, 50)
    animateCards(rightImages, -50)
  }, [section, animateCards])

  return (
    <>
      <section className='w-full pb-20' ref={sectionRef}>
        <Image
          src={Mockup}
          alt="Imagem de um mockup de celular"
          className='sticky opacity-0 mx-auto top-72 -mt-[32rem] mb-16 z-10'
          ref={mockupRef}
        />

        <h2 className='text-center text-7xl font-semibold text-black mb-56 opacity-0' ref={titleRef}>Faça <span className='text-green-title-cards'>você</span> mesmo de casa</h2>
        <div className="relative w-full max-w-[82.5rem] h-[35.1rem] mx-auto" >
          <Image src={Card01} ref={card01Ref} className="absolute opacity-0 top-8 left-44" alt='card 01' />
          <Image src={Card02} ref={card02Ref} className="absolute opacity-0 bottom-32 left-0" alt='card 02' />
          <Image src={Card03} ref={card03Ref} className="absolute opacity-0 bottom-0 left-80" alt='card 03' />
          <Image src={Card04} ref={card04Ref} className="absolute opacity-0 top-0 right-32" alt='card 04' />
          <Image src={Card05} ref={card05Ref} className="absolute opacity-0 right-0 bottom-28" alt='card 05' />
          <Image src={Card06} ref={card06Ref} className="absolute opacity-0 bottom-0 right-80" alt='card 06' />
        </div>
      </section>
    </>
  )
}