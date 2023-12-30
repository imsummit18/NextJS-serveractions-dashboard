import Pagination from '@/ui/dashboard/pagintion/page'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdSearch } from 'react-icons/md'

const Products = () => {
    return (
        <div className='mt-5 bg-primary-100 p-4 rounded-xl'>
            <div className='flex items-center justify-between'>
                <div className=' w-fit flex items-center gap-3 bg-[#2e374a] p-3 rounded-xl'>
                    <MdSearch size={24} />
                    <input className='bg-transparent  text-[white]' type="text" placeholder='Search for a product...' />
                </div>
                <Link href="/dashboard/products/add">
                    <button className='p-[10px] bg-[#5d57c9] text-[white] border-none rounded-[10px] cursor-pointer'>Add New</button>
                </Link>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td className='p-[10px]'>Title</td>
                        <td className='p-[10px]'>Description</td>
                        <td className='p-[10px]'>Price</td>
                        <td className='p-[10px]'>Created At</td>
                        <td className='p-[10px]'>Stock</td>
                        <td className='p-[10px]'>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-[10px]'>
                            <div className='flex gap-3 items-center'>
                                <Image src="/moproduct.png" className='rounded-[50%]' width={40} height={40} alt='' />
                                Iphone
                            </div>
                        </td>
                        <td className='p-[10px]'>
                        Desc
                        </td>
                        <td className='p-[10px]'>Rs 2022</td>
                        <td className='p-[10px]'>13.01.2022</td>
                        <td className='p-[10px]'>active</td>
                        <td className='p-[10px] flex space-x-4'>
                            <Link href="/"><button className=' bg-[teal] py-[5px] px-[10px] cursor-pointer  rounded-[5px]'>View</button></Link>
                            <Link href="/"><button className='bg-[crimson] py-[5px] px-[10px] cursor-pointer  rounded-[5px]'>Delete</button></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default Products
