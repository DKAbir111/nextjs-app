"use client"

import { useRouter } from "next/navigation"
export default function GoBack() {
    const router = useRouter()
    return (
        <button
            className='btn bg-purple-400'
            onClick={() => {
                router.back()
            }}
        >
            Go Back
        </button>
    )
}
