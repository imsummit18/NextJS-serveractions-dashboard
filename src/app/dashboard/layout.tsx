import Footer from '@/ui/dashboard/footer/page'
import Sidebar from '@/ui/dashboard/sidebar/page'
import Navbar from '@/ui/navbar/page'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <div className='w-[25%] bg-primary-100 p-5'>
                <Sidebar />
            </div>
            <div className='flex-1 p-5'>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
