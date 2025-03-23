
import React from 'react'

export default function Dashboard() {

    return (
        <div className='min-h-screen flex items-center justify-center container mx-auto'>
            <div className="card card-side bg-purple-100 shadow-sm w-10/12">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Spider man</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-purple-400">More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
