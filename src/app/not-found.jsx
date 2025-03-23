import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='place-items-center min-h-screen place-content-center'>
            <h2 className='text-2xl font-semibold text-purple-400'>Not Found</h2>
            <p className='py-2'>Could not find requested resource</p>
            <Link href="/" className='btn bg-purple-400 text-white'>Return Home</Link>
        </div>
    )
}