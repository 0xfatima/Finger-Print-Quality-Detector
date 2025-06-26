'use client'
import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
    const [image, setImage] = useState(null);
  
    const handleChange=(e)=>{
        const file = e.target.files[0];
        if(file){
        
            setImage(URL.createObjectURL(file))
        }
        
    }

  return (
    <div className='pt-32 flex flex-col  items-center min-h-screen'>
        <p>
          acceptable formats: png, jpg
        </p>
        <input type="file" required accept='.png,.jpg' onChange={handleChange} className='py-10'/>

        {image&& (<div className='bg-gray-300 card'>
          <img
            src={image}
            alt="Uploaded preview"
            className="w-64 h-auto rounded-lg border border-gray-500"
          />
        </div>)
        }
    </div>
  )
}

export default page