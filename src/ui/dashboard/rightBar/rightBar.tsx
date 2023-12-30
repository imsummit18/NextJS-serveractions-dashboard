import Image from 'next/image'
import React from 'react'
import { MdPlayCircleFilled } from 'react-icons/md'

const RightBar: any = () => {
    return (
        <div className=''>
            <div className=' mx-5  mt-5 p-5 relative bg-gradient-to-t py-5 rounded-xl mb-5'>
                <div className='absolute bottom-0 right-0 w-1/2'>
                    <Image className='opacity-[0.2]' src="/astronaut.png" alt='' width={50} height={50} />
                </div>
                <div className='flex flex-col gap-6'>
                    <span className='font-bold text-[12px] text-primary-200'>🔥 Available Now</span>
                    <h3 className='font-medium text-[12px] text-primary-200'> How to use the new version of the admin dashboard?</h3>

                    <span>Takes 4 minutes to learn</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={"p-[10px] flex items-center bg-[#5d57c9] gap-[10px] text-[white] border-none cursor-pointer rounded-[5px] w-fit"}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>  </div>
            </div>
            <div className=' mx-5  mt-5 p-5 relative bg-gradient-to-t py-5 rounded-xl mb-5'>
                <div className='absolute bottom-0 right-0 w-1/2'>
                    <Image className='opacity-[0.2]' src="/astronaut.png" alt='' width={50} height={50} />
                </div>
                <div className='flex flex-col gap-6'>
                    <span className='font-bold text-[12px] text-primary-200'>🔥 Available Now</span>
                    <h3 className='font-medium text-[12px] text-primary-200'> How to use the new version of the admin dashboard?</h3>

                    <span>Takes 4 minutes to learn</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={"p-[10px] flex items-center bg-[#5d57c9] gap-[10px] text-[white] border-none cursor-pointer rounded-[5px] w-fit"}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>  </div>
            </div>
        </div>
    )
}

export default RightBar
