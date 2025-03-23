import Link from 'next/link'
import React from 'react'
import { CiHome } from "react-icons/ci";
export default function SideBar() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full p-4 w-72">
                    <li><Link href={'/dashboard'}>Profile</Link></li>
                    <li><Link href={'/dashboard/add-blog'}>Add Blog</Link></li>
                    <li><Link href={'/'}><CiHome /> Go Home</Link></li>
                </ul>
            </div>
        </div>
    )
}
