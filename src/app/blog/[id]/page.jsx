"use client"
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function BlogDetails() {
    const params = useParams()
    const router = useRouter()
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            const data = await res.json()
            setPost(data)
            setLoading(false)
        }
        fetchPosts()
    }, [])

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <div className="flex  w-96 flex-col gap-4 p-5 bg-base-200">
                    <div className="skeleton h-8 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className='flex justify-end'>
                        <div className="skeleton h-10 w-1/4 place-items-end"></div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card card-dash  w-96 bg-purple-100">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                    <div className="card-actions justify-end">
                        <button className='btn bg-purple-400' onClick={() => {
                            router.back()
                        }}>Go Back</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
