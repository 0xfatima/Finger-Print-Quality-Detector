import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed centered image with parallax effect */}
      <div className="fixed top-1/2 left-1/2 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40">
        <Image
          src="/img.png"
          alt="finger image"
          width={400}
          height={400}
          className="invert"
        />
      </div>

      {/* Content that scrolls over the image */}
      <div className="flex flex-col items-center  z-1000 px-10 pt-40 text-white">
        <h1 className="text-center font-extrabold text-9xl font-mono mb-40 fade-in">
          DETECT QUALITY
        </h1>
        <Link href='/detector'><button className='bg-gray-300 text-black w-24 h-10 rounded-lg cursor-pointer '>Detect</button></Link>
        {/* Add more paragraphs if needed to enable scrolling */}
        {/* <div className="h-[150vh]"></div> */}
      </div>

      <div className=' pt-28 w-100 px-12 justify-between'>
        <p className="max-w-xl  text-lg leading-relaxed text-[#a6a6a6]">
          Fingerprint Quality Detection is a crucial step in biometric authentication systems to ensure accurate and reliable identification. It involves analyzing fingerprint images to assess their clarity, contrast, and overall usability for recognition algorithms. Poor-quality fingerprints—due to smudges, dryness, or improper placement—can lead to false matches or failed verifications. By using advanced image processing techniques and machine learning models, fingerprint quality detection systems can automatically classify images as “good” or “bad” quality. This helps in prompting users to re-scan if needed and improves the performance of fingerprint-based security systems in real-world applications like mobile devices, attendance systems, and border control.
        </p>
      
      </div>
    </div>
  )
}

export default page
