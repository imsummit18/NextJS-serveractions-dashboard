"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuLink = ({ item }: { item: any }) => {
    const pathname = usePathname();
    console.log("item path", item.path)
    return (
        <Link href={`${item?.path}`} className={`p-5 my-2 mx-0 rounded-xl flex items-center gap-[10px] hover:bg-[#2e374a] ${pathname === item?.path ? "bg-[#2e374a]" : ""}`}>
            {item?.icon}
            {item?.title}
        </Link>
    )
}

export default MenuLink
