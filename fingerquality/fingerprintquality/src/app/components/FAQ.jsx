import React from 'react'

const FAQ = (props) => {
  return (
    <div>
        
         <details className="flex flex-col rounded-xl border border-[#3b4754] bg-[#111418] px-[15px] py-[7px] group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-white text-sm font-medium leading-normal">{props.question}</p>
                  <div className="text-white group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#9cabba] text-sm font-normal leading-normal pb-2">
                    {props.answer}
                </p>
              </details>
    </div>
  )
}

export default FAQ