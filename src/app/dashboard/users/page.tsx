import { fetchUsers } from '@/app/lib/data'
import Search from '@/ui/dashboard/Search/page'
import Pagination from '@/ui/dashboard/pagintion/page'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdSearch } from 'react-icons/md'

const Users = async ({ searchParams }: { searchParams: any }) => {
    const query = searchParams?.q || " ";
    const page = searchParams?.page || 1;
    const user = await fetchUsers(query, page)
    return (
        <div className='mt-5 bg-primary-100 p-4 rounded-xl'>
            <div className='flex items-center justify-between'>
                <Search />
                <Link href="/dashboard/users/add">
                    <button className='p-[10px] bg-[#5d57c9] text-[white] border-none rounded-[10px] cursor-pointer'>Add New</button>
                </Link>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td className='p-[10px]'>Name</td>
                        <td className='p-[10px]'>Email</td>
                        <td className='p-[10px]'>Created At</td>
                        <td className='p-[10px]'>Role</td>
                        <td className='p-[10px]'>Status</td>
                        <td className='p-[10px]'>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {user.map((el: any) => {
                        return (
                            <>
                                <tr>
                                    <td className='p-[10px]'>
                                        <div className='flex gap-3 items-center'>
                                            <Image src="/noavatar.png" className='rounded-[50%]' width={40} height={40} alt='' />
                                            {el?.username}
                                        </div>
                                    </td>
                                    <td className='p-[10px]'>
                                        {el?.email}
                                    </td>
                                    <td className='p-[10px]'>13.01.2022</td>
                                    <td className='p-[10px]'>{el?.isAdmin ? "Admin" : "Client"}</td>
                                    <td className='p-[10px]'>{el?.isActive ? "active" : "passive"}</td>
                                    <td className='p-[10px] flex space-x-4'>
                                        <Link href="/"><button className=' bg-[teal] py-[5px] px-[10px] cursor-pointer  rounded-[5px]'>View</button></Link>
                                        <Link href="/"><button className='bg-[crimson] py-[5px] px-[10px] cursor-pointer  rounded-[5px]'>Delete</button></Link>
                                    </td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default Users
