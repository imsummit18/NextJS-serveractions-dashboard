"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce';
const Search = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const router = useRouter();

    const handleSearch =
        (e: any) => {
            const params:any = new URLSearchParams(searchParams)
            params.set("page", 1)
            if (e.target.value) {
                params.set("q", e.target.value)
            } else {
                params.delete("q")
            }
            router.replace(`${pathname}?${params}`)
        }


    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.delete('q');
        params.delete('page');
        router.replace(`${pathname}?${params}`);
    }, []);



    return (
        <div className=' w-fit flex items-center gap-3 bg-[#2e374a] p-3 rounded-xl'>
            <MdSearch size={24} />
            <input onChange={handleSearch} className='bg-transparent  text-[white]' type="text" placeholder='Search...' />
        </div>
    )
}

export default Search
