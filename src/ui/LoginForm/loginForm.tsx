import React from 'react'

const LoginForm = () => {
    return (
        <form className={"bg-primary-100 p-[40px] rounded-xl w-[450px] h-[450px] flex flex-col items-center  justify-center gap-[30px] "}>
            <h1>Login</h1>
            <input className='w-full p-6 border-[2px] rounded-[5px] border-[#2e374a] bg-primary-50 text-[white]' type="text" placeholder="username" name="username" />
            <input className='w-full p-6 border-[2px] rounded-[5px] border-[#2e374a] bg-primary-50 text-[white]' type="password" placeholder="password" name="password" />
            <button className='w-full p-6 bg-[teal] border-none cursor-pointer rounded-[5px]'>Login</button>
        </form>
    )
}

export default LoginForm
