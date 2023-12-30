import Link from 'next/link';
import React from 'react'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md";
import MenuLink from './MenuLink/page';
import Image from 'next/image';
const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className='sticky top-0'>
            <div className='flex items-center space-x-5 mb-2'>
                <Image className='rounded-[50%]' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt='' objectFit='cover' width={45} height={45} />
                <div className='flex flex-col'>
                    <span className='text-[12px] text-primary-200'>Sumit Ghimire</span>
                    <span>Admnistrator</span>

                </div>
            </div>
            <ul>
                {
                    menuItems.map((el: any, index: any) => (
                        <li key={index}><span className='text-primary-200 font-bold text-[13px] mt-5'>
                            {el?.title}</span>
                            {el?.list.map((item: any, index: any) => (
                                <MenuLink item={item} />))}</li>
                    ))
                }
            </ul>
            <button className='p-5 w-full  mx-0 rounded-xl flex items-center gap-[10px]  hover:bg-[#2e374a] flex gap-[10px] cursor-pointer rounded-xl items-center  px-5 mb-5 '>
                <MdLogout size={16} />
                Logout
            </button>
        </div>
    )
}

export default Sidebar
