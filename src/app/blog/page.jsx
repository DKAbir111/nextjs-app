

import Link from 'next/link'

import React from 'react'

export default async function BlogPage() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()

    return (
        <div className='container mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
            {
                posts.map(post => <div key={post.id} className="card bg-purple-100 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.body}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/blog/${post.id}`}>
                                <button type='button' className="btn bg-purple-400">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
