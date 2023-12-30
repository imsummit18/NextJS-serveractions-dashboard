import Image from 'next/image'
import React from 'react'

const SingleUserPage = () => {
    return (
        <div className='flex gap-[50px] mt-5'>
            <div className=' w-[350px] bg-primary-100 p-5 rounded-xl font-bold'>
                <div className='w-full h-[300px] overflow-hidden relative rounded-xl'>
                    <Image src={"/noavatar.png"} className='' alt="" fill />
                </div>
                John Doe
            </div>
            <div className='flex-1 bg-primary-100 p-5 rounded-xl'>
                <form className={"flex flex-col"}>
                    <label className='text-[12px]'>Username</label>
                    <input className='p-5 border-[2px] rounded-[5px] bg-primary-50 text-[white] my-[10px]' name="username" />
                    <label className='text-[12px]'>Email</label>
                    <input className='p-5 border-[2px] rounded-[5px] bg-primary-50 text-[white] my-[10px]' name="email" />
                    <label className='text-[12px]'>Password</label>
                    <input className='p-5 border-[2px] rounded-[5px] bg-primary-50 text-[white] my-[10px]' name="password" />
                    <label className='text-[12px]' >Phone</label>
                    <input className='p-5 border-[2px] rounded-[5px] bg-primary-50 text-[white] my-[10px]' name="phone" />
                    <label className='text-[12px]'>Address</label>
                    <input className='p-5 border-[2px] rounded-[5px] bg-primary-50 text-[white] my-[10px]' name="address" />
                    <label className='text-[12px]'>Is Admin?</label>
                    <select className='p-5 border-[2px] rounded-[5px] bg-primary-50 text-[white] my-[10px]' name="isAdmin" id="isAdmin">
                        <option value={true} >Yes</option>
                        <option value={false} >No</option>
                    </select>
                    <label className='text-[12px]'>Is Active?</label>
                    <select className='p-5 border-[2px] rounded-[5px] bg-primary-50 text-[white] my-[10px]' name="isActive" id="isActive">
                        <option value={true} >Yes</option>
                        <option value={false} >No</option>
                    </select>
                    <button className='w-full p-5 bg-[teal] text-white rounded-[5px] border-none cursor-pointer mt-5'>Update</button>
                </form>
            </div>
        </div>

    )
}

export default SingleUserPage
