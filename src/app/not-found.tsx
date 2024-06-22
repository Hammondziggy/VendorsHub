import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='center h-screen w-screen flex-col gap-3 bg-black'>
      <h2 className='font-bold text-lg text-secondary'>Requested Page Not Found</h2>
      <p className="text-white">Could not find the page you are looking for</p>
      <Link href="/">
        <button className='bg-transparent border border-secondary px-6 py-4 rounded-[25px] text-secondary text-sm hover:text-black hover:bg-secondary'>
            Go Back Home
        </button>
      </Link>
    </div>
  )
}