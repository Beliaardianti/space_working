'use client'
import { Button } from '@/components/atomics/button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/atomics/dropdown-menu'
import Title from '@/components/atomics/title'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="container mx-auto fixed inset-x-0 top-[30px] z-20 px-4 md:px-8">
    <div className="p-4 md:p-6 lg:p-6 rounded-2xl bg-white flex justify-between items-center max-w-screen-lg mx-auto">
  <Link href="/">
    <Image  
      src="/images/logo.svg"
      alt="logo"
      height={36}
      width={133}
    />
  </Link>

  <nav className="hidden md:flex w-full justify-end">
    <ul className="flex items-center space-x-8 md:text-sm">
      <li className="cursor-pointer font-semibold hover:text-primary">
        Kantor & Ruang Kerja
      </li>
      <li className="cursor-pointer font-semibold hover:text-primary">
        Layanan Bisnis
      </li>
      <li className="cursor-pointer font-semibold hover:text-primary">
        Services
      </li>
      <li className="cursor-pointer font-semibold hover:text-primary">
        Tentang Kami
      </li>
    </ul>
  </nav>



  <div
    data-login={isLogin}
    className="hidden md:flex items-center space-x-3"
  >
    {/* <Button variant="secondary" size="header">
      <Link href="/sign-in">Sign In</Link>
    </Button> */}
    {/* <Button variant="default" size="header" className="shadow-button">
      <Link href="/sign-up">Sign Up</Link>
    </Button> */}
  </div>

  <div className="md:hidden flex items-center">
    <button onClick={toggleMenu}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
      </svg>
    </button>
  </div>

  {/* <DropdownMenu>
    <DropdownMenuTrigger
      data-login={isLogin}
      className="hidden md:flex items-center space-x-2 outline-none"
    >
      <Title title="Ariana Xian" subtitle="Howdy" section="header" />
      <Image
        src="/images/avatar.webp"
        alt="avatar"
        height={48}
        width={48}
        className="rounded-full"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-[240px] mr-8 space-y-4">
      <DropdownMenuItem>
        <Link href="/sign-in">Logout</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu> */}
</div>


      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 rounded-2xl mt-4 shadow-lg text-center">
          <nav>
            <ul className="flex flex-col items-start space-y-4">
              <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
                Kantor & Ruang Kerja
              </li>
              <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
                Layanan Bisnis
              </li>
              <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
                Services
              </li>
              <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
                Tentang Kami
              </li>
            </ul>
          </nav>
          {/* <div
            data-login={isLogin}
            className="flex flex-col items-start space-y-3 mt-4"
          >
            <Button variant="secondary" size="header">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button variant="default" size="header" className="shadow-button">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div> */}
        </div>
      )}
    </header>
  )
}

export default Header
