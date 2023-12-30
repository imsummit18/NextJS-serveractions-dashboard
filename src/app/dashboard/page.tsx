import Transactions from '@/ui/dashboard/Transactions/page'
import Card from '@/ui/dashboard/card/page'
import RightBar from '@/ui/dashboard/rightBar/rightBar'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='flex flex-4'>
            <div>
                <div className='flex my-5 gap-5 '>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div>
                    <Transactions />
                    {/* <Chart /> */}
                </div>
            </div>
            <div className='flex-1'>
                <RightBar />
            </div>
        </div>
    )
}

export default Dashboard
