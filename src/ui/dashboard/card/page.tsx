import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
    return (
        <div className=' cursor-pointer w-full bg-primary-100 hover:bg-[#2e374a] p-5 rounded-xl flex gap-5'>
            <MdSupervisedUserCircle size={24} />
            <div className='flex flex-col gap-5'>
                <span>Total Users</span>
                <span className='text-xl font-medium'>10.273</span>
                <span className='text-sm font-[300]'>
                    <span className='text-[lime] mr-1'>12%</span>
                    more than previous</span>
            </div>
        </div>
    )
}

export default Card
