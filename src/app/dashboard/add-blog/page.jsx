import React from 'react'

export default function AddBlog() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Title</label>
                        <input type="text" className="input" placeholder="Title" />
                        <label className="fieldset-label">Body</label>
                        <input type="textarea" className="input" placeholder="Body" />
                        <button className="btn bg-purple-400 mt-4">Add Blog</button>
                    </fieldset>
                </div>
            </div>

        </div>
    )
}
