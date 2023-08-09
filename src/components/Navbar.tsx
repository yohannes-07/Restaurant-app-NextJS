import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import CartIcon from './CartIcon'

const Navbar = () => {
    const user = false
    return (
        <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
            <div className='hidden md:flex gap-4'>
                <Link href='/'>Home</Link>
                <Link href='/menu'>menu</Link>
                <Link href='/'>Contact</Link>
            </div>

             {/* Logo */}
            <div className='text-xl md:font-bold flex-1 md:text-center'>
                <Link href='/'>Saron</Link>
            </div>

            {/* Mobile  Menu */}
            <div className='md:hidden'>
                <Menu/>
            </div>

            <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
                <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2  cursor-pointer bg-orange-300 px-1 rounded-md'>
                    <Image src='/phone.png' alt='Phone Icon' width={20} height={20}/>
                    <span>123 456 78</span>
                </div>
                {!user ? (

                    <Link href='/login'>Login</Link>
                    ):(
                    <Link href='/orders'>Orders</Link>

                    )
                }
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar