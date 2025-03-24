"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Navbar() {
    const router = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Blog',
            path: '/blog'
        },
        {
            name: 'Meal',
            path: '/meal'
        },
        {
            name: 'Dashboard',
            path: '/dashboard'
        }

    ]

    const pathname = usePathname()
    const isDashboard = pathname.includes('dashboard')
    if (isDashboard) {
        return (
            <>
            </>
        )
    }
    return (
        <nav className="fixed top-0 z-20 right-0 left-0 shadow-md">
            <ul className="flex justify-evenly h-full py-5  bg-purple-400">
                {
                    router.map((route, index) => {
                        return (
                            <li key={index}>
                                <Link href={route.path}
                                    className={`px-3 py-2 rounded-md transition-all ${pathname === route.path ? "bg-white text-purple-400 font-semibold" : "text-white"
                                        }`}
                                >{route.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
