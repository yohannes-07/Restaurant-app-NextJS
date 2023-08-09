import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <div className='flex items-center gap-4 '>
        <Link href='/cart'>
            <div className='relative w-8 h-8 md:w-5 md:h-5 '>
                <Image src='/cart.png' alt='cart icon' fill  />
            </div>
        </Link>
    </div>
  )
}

export default CartIcon
