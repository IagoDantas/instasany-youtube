import Image from "next/image";

import LogoImg from '/public/logo.svg'
import Link from "next/link";
import SearchIcon from '/public/icon-search.svg'
import IconUser from '/public/icon-user.svg'
import { GridContainer } from "./grid";


const arrayMenu = [
  'Inicio',
  'Benefícios',
  'Pra quem é o curso?',
  'Preços promocionais',
  'Sobre nós',
]

export const Header = () => {

  const activedStyled = "bg-green-actived text-opacity-100 rounded-full"

  return (
    <header className="relative w-full h-24 bg-green-primary flex items-cente">
      <GridContainer className="flex items-center justify-between">
        <Image
          src={LogoImg}
          alt="Instasany logo"
        />
        <div className="flex items-center gap-20">
          <nav className="flex">.
            {
              arrayMenu.map((item, index) => {
                return (
                  <Link key={index} className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-colors ${index === 0 ? activedStyled : ''}`} href="#">{item}</Link>
                )
              })
            }

          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Image
                src={SearchIcon}
                alt="Search"
              />
            </button>
            <button className="flex items-center gap-2 text-white font-medium">
              <Image
                src={IconUser}
                alt="User"
              />
              <span>
                Fazer Login
              </span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}

