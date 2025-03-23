import Link from "next/link"


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
            name: 'Contact',
            path: '/contact'
        }
    ]
    return (
        <nav >
            <ul className="flex justify-evenly h-full py-5  bg-purple-400">
                {
                    router.map((route, index) => {
                        return (
                            <li key={index}>
                                <Link href={route.path}>{route.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
