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
    const [isLogin, setIsLogin] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="container mx-auto fixed inset-x-0 top-[30px] z-20">
            <div className="p-[40px] rounded-[30px] bg-white flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        height={36}
                        width={133}
                        className=""
                    />
                </Link>

                {/* Tombol Hamburger untuk layar kecil */}
                <div className="block md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigasi utama untuk layar besar */}
                <nav className="hidden md:flex md:flex-1 md:justify-center">
  <ul className="flex items-center space-x-6">
    <li className="nav-item">
      <a href="#" className="nav-link">Kantor & Ruang Kerja</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">Layanan Bisnis</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">Services</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">Tentang Kami</a>
    </li>
  </ul>
</nav>


                {/* Login/Signup untuk layar besar */}
                {!isLogin && (
                    <div
                        data-login={isLogin}
                        className="hidden md:flex items-center space-x-3"
                    >
                        <Button variant="secondary" size="header">
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                        <Button variant="default" size="header" className="shadow-button">
                            <Link href="/sign-up">Sign Up</Link>
                        </Button>
                    </div>
                )}

                {/* Profil pengguna dropdown untuk layar besar */}
                {isLogin && (
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            data-login={isLogin}
                            className="hidden md:block outline-none"
                        >
                            <div className="flex items-center space-x-2">
                                <Title title="Ariana Xian" subtitle="Howdy" section="header" />
                                <Image
                                    src="/images/avatar.webp"
                                    alt="avatar"
                                    height={48}
                                    width={48}
                                    className="rounded-full"
                                />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[240px] mr-8 space-y-4">
                            <DropdownMenuItem>
                                <Link href={"/dashboard"}>Dashboard</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/dashboard/my-listings"}>My Office</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>My Rentals</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/sign-in">Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>

         {/* Menu Mobile */}
<div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white rounded-lg shadow-lg w-full max-w-[400px] md:max-w-none md:w-auto mt-[30px] md:mt-0 md:ml-auto`}>
    <nav>
        <ul className="flex flex-col items-center space-y-4">
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
    {!isLogin && (
        <div
            data-login={isLogin}
            className="flex flex-col items-center space-y-3 mt-4"
        >
            <Button variant="secondary" size="header">
                <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button variant="default" size="header" className="shadow-button">
                <Link href="/sign-up">Sign Up</Link>
            </Button>
        </div>
    )}
    {isLogin && (
        <div className="flex items-center space-x-2 mt-4">
            <Title title="Ariana Xian" subtitle="Howdy" section="header" />
            <Image
                src="/images/avatar.webp"
                alt="avatar"
                height={48}
                width={48}
                className="rounded-full"
            />
        </div>
    )}
</div>

        </header>
    )
}

export default Header
