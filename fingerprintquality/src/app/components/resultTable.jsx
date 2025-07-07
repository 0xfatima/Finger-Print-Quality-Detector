import React from 'react'

const ResultTable = (props) => {
  return (
    <div>
        
            <div className="pb-3">
              <div className="flex border-b border-[#3b4754] px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-white text-white pb-[13px] pt-4" href="#">
                  <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">{props.currentModel}</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9cabba] pb-[13px] pt-4" href="#">
                  <p className="text-[#9cabba] text-sm font-bold leading-normal tracking-[0.015em]">{props.altModel}</p>
                </a>
              </div>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#3b4754] bg-[#111418]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#1b2127]">
                      <th className="table-aa9dcc97-7ebb-4621-a65f-b59a752b4b7e-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Model</th>
                      <th className="table-aa9dcc97-7ebb-4621-a65f-b59a752b4b7e-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Quality Score
                      </th>
                      <th className="table-aa9dcc97-7ebb-4621-a65f-b59a752b4b7e-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#3b4754]">
                      <td className="table-aa9dcc97-7ebb-4621-a65f-b59a752b4b7e-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">{props.currentModel} Model</td>
                      {/* result.cnn contains svm result and vice versa */}
                      <td className="table-aa9dcc97-7ebb-4621-a65f-b59a752b4b7e-column-240 h-[72px] px-4 py-2 w-[400px] text-[#9cabba] text-sm font-normal leading-normal">{props.result}
</td>
                      <td className="table-aa9dcc97-7ebb-4621-a65f-b59a752b4b7e-column-360 h-[72px] px-4 py-2 w-[400px] text-[#9cabba] text-sm font-normal leading-normal">Null</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        
    </div>
    </div>
  )
}

export default ResultTable