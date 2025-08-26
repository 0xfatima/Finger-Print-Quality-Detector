import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
        
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283039] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Fingerprint Quality</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link href='/'><p className="text-white text-sm font-medium leading-normal">Home</p></Link>
              <Link href='/detector'><p className="text-white text-sm font-medium leading-normal">Detect</p></Link>
              <Link href= 'about'><p className="text-white text-sm font-medium leading-normal">About and FAQs</p></Link>
            </div>
            <Link href = '/detector'>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-white text-black  text-sm font-bold leading-normal tracking-[0.015em]"            >
              <span className="truncate">Get started</span>
            </button>
            </Link>
          </div>
        </header>
    </div>
  )
}

export default Header