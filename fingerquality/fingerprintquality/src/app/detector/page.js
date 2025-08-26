'use client'
import React, {useState} from 'react'
import ResultTable from '../components/resultTable';
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
    <div className='p-24 '>
<div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Upload Fingerprint Image</p>
            </div>
       <div className="flex flex-col p-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#3b4754] px-6 py-14">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Drag and drop or browse</p>
                  <p className="text-white text-sm font-normal leading-normal max-w-[480px] text-center">
                    Upload a fingerprint image to analyze its quality. Supported formats: JPG, PNG.
                  </p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[#283039] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
            <input type="file" required accept='.png,.jpg' onChange={handleChange} className='px-3 py-3 '/>
            </button>
              </div>
            </div>

        
        

        {image&& (<div className=' w-72 bg-gray-300 custom-card'>
          <img
            src={image}
            alt="Uploaded preview"
            className="w-64 h-64 rounded-lg border border-gray-500"
          />
        </div>)
        }

        
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Detection Results</h2>
          <ResultTable currentModel = {'CNN'} altModel = {'SVM'} result ={result.svm? <p>{parseFloat(result.svm.split(":")[1]).toFixed(2)}</p>: <p>Loading...</p>}/>

          <ResultTable currentModel = {'SVM'} altModel = {'CNN'} result ={result.cnn ? result.cnn.split(":")[1]: <p>Loading...</p> } />

    </div>
    
  )
}

export default page