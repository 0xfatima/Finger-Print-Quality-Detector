'use client'
import React, {useState} from 'react'

const page = () => {
    
    const [image, setImage] = useState(null);
    const [result, setResult] = useState({ cnn: "", svm: "" });
    
    const handleChange = async (e) => {
  const file = e.target.files[0];

        if(file){
                        setImage(URL.createObjectURL(file))

              const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch("/api/predict", {
      method: "POST",
      body: formData,
    });

    const text = await res.text(); // get raw response first
    const data = text ? JSON.parse(text) : {};

    if (res.ok) {
        const [svm, cnn] = data.result.data;
      console.log("Prediction result:", data.result);
      setResult({cnn:cnn.label, svm:svm.label} )
    } else {
      console.error("API Error:", data.error || "Unknown error");
    }
  } catch (err) {
    console.error("Request failed:", err);
  }
        }
};


  return (
    <div className='pt-24 flex flex-col  items-center min-h-screen gap-5'>
        <p>
          acceptable formats: png, jpg
        </p>
        <button className='bg-white text-black rounded-md'>
            <input type="file" required accept='.png,.jpg' onChange={handleChange} className='px-3 py-3 '/>
            </button>
        

        {image&& (<div className='bg-gray-300 custom-card'>
          <img
            src={image}
            alt="Uploaded preview"
            className="w-64 h-auto rounded-lg border border-gray-500"
          />
        </div>)
        }

        
          {result.cnn && <p>{result.cnn}</p>}
    {result.svm && <p>{result.svm}</p>}
        
        
    </div>
  )
}

export default page