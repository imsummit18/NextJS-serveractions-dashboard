"use client";
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

const Navbar = () => {
    const pathname = usePathname();
    const path = pathname.split("/").pop()
    return (
        <div className='flex justify-between items-center  rounded-xl p-5 bg-primary-100'>
            <div className='capitalize font-bold '>
                {path}
            </div>
            <div className=' flex items-center  gap-3'>
                <div className='flex items-center gap-3 bg-[#2e374a] p-3 rounded-xl'>
                    <MdSearch size={24} />
                    <input className='bg-transparent  text-[white]' type="text" placeholder='Search...' />
                </div>
                <div className='flex gap-3'>
                    <MdOutlineChat size={22} />
                    <MdNotifications size={22} />
                    <MdPublic size={22} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
