"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Pagination = () => {
    const pathname = usePathname();
    const router = useRouter()
    const searchParams = useSearchParams();
    const page = searchParams.get("page") || 1
    const params = new URLSearchParams(searchParams)

    // const ITEM_PER_PAGE = 2;
    // const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
    // const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) > 0


    const handleNextPage = () => {
        params.set("page", parseInt(page) + 1)
        router.replace(`${pathname}?${params}`)
    }
    const handlePreviousPage = () => {
        params.set("page", parseInt(page) - 1)
        router.replace(`${pathname}?${params}`)
    }

    return (
        <div className="p-2 flex justify-between">
            <button
                onClick={handlePreviousPage}
                className={`px-4 py-2 cursor-pointer `}
            >
                Previous
            </button>
            <button
                onClick={handleNextPage}
                className={`px-4 py-2 cursor-pointer `}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination
