'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { GridContainer } from "./grid";
import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand02 from "/public/icon-hand.svg";
import IconMockup from "/public/mockup.svg";
import gsap from "gsap";


export function SectionHero() {

  const textHeroRef = useRef(null)
  const mockupLeftRef = useRef(null)
  const mockupRightRef = useRef(null)

  useEffect(() => {
    const textHero = textHeroRef.current
    const mLeft = mockupLeftRef.current
    const mRight = mockupRightRef.current

    gsap.fromTo(textHero, {
      opacity: 0,
      y: 20
    },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out'
      })

    gsap.fromTo(mLeft, {
      rotate: 0,

    }, {
      rotate: -12,
      duration: 1,
    })

    gsap.fromTo(mRight, {
      rotate: 0,

    }, {
      rotate: 12,
      duration: 1,
    })

  }, [])

  return (
    <section className="relative w-full bg-green-primary bg-hero bg-no-repeat bg-top h-section-hero border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-[1056px] text-center opacity-0" ref={textHeroRef}>
          <h3 className="text-xl font-medium text-green-actived mb-4">Novo curso focado em instagram</h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-2">Destrave as suas habilidades</h1>
          <div className="flex items-center gap-10 justify-center">
            <button className="flex items-center gap-2">
              <Image
                src={IconFile}
                alt="Ícone de um usuário"
              />
              <span className="text-white font-medium">
                Assinar a lista de espera
              </span>
            </button>
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full h-28 mt-4 max-w-[875px]">
          <Image
            src={IconHand}
            alt="Ícone de uma mão"
            className="absolute bottom-0 left-0"
          />
          <Image
            src={IconHand02}
            alt="Ícone de uma mão"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="flex justify-between absolute -bottom-44 max-w-[957px] w-full">
          <Image
            src={IconMockup}
            alt="Imagem de um mockup de celular"
            className="relative top-[18px] left-[53px]"
            ref={mockupLeftRef}
          />
          <Image
            src={IconMockup}
            alt="Imagem de um mockup de celular"
            className="relative top-[18px] right-[53px]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  )
}