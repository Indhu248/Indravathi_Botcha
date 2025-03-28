import React from 'react'

const Blocks = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-8 p-4 w-[25vw] h-90">
  <div className="col-span-1 w-25 h-25 row-span-1 bg-[#794DFF60] p-4 text-center rounded-xl"></div>
  <div className="col-span-1 w-20 h-20 row-span-1 bg-[#794DFF90] p-4 text-center rounded-xl"></div>
  <div className="col-start-1 w-20 h-20 row-span-1 bg-[#794DFF] p-4 text-center rounded-xl"></div>

  <div className="col-start-2 w-25 h-25 row-span-1 bg-[#794DFF60] p-4 text-center rounded-xl"></div>
  <div className="col-start-3 w-25 h-25 row-span-1 bg-[#794DFF] p-4 text-center rounded-xl"></div>

  <div className="col-start-2 w-20 h-20 row-span-1 bg-[#794DFF60] p-4 text-center rounded-xl"></div>
  <div className="col-start-3 w-20 h-20 row-span-1 bg-[#794DFF80] p-4 text-center rounded-xl"></div>
  {/* <div className="col-span-3 row-span-1 bg-rose-600 p-4 text-center">8</div> */}
</div>

  )
}

export default Blocks
