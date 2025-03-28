import React from 'react'
import { Certificates } from '../assets'
import { ArrowUpRight } from 'lucide-react'

const Achievements = () => {
  return (
    <div className='relative bg-slate-950 w-screen md:py-20 px-6 py-12 md:px-30'>
      <h1 className="text-4xl font-semibold text-violet-500 mb-6">CERTIFICATIONS.</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {Certificates.map((certificate, index) => (
          <div key={index} className='bg-slate-900 flex flex-row items-center p-4 rounded-xl gap-4'>
            {/* Image */}
            <img src={certificate.image} alt={certificate.name} className='h-20 w-20 rounded-lg'/>

            {/* Text Content */}
            <div className='flex flex-col'>
              <h2 className='text-white text-md font-semibold'>{certificate.name}</h2>
              <p className='text-gray-500 text-sm'>{certificate.description}</p>
              
              {/* View Link */}
              <a href={certificate.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-green-400 flex items-center text-sm underline'>
                View
                <ArrowUpRight size={14}/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements

