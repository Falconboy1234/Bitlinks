
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 items-center justify-between text-white text-xl p-2'>
        <Link className='logo font-bold' href='/'>Bitlinks</Link>
        <ul className='flex items-center justify-center gap-4'>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/About">About</Link>
            </li>
            <li>
                <Link href="/Shorten">Shorten</Link>
            </li>
            <li>
                <Link href="/Contact">Contact</Link>
            </li>
            <li className='gap-2 flex'>            
                <Link className='bg-indigo-500 rounded-xs p-1' href="/github">GitHub</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
