import React from 'react'

const  ProgressPar = ({skill,statu,showStatu}:any) => {
  return (
    <div className='mt-5 relative b-red-500 lg:pr-16'>
    <h3 className='inline font-semibold text-base'>{skill}</h3>
    <h3 className='absolute inline lg:right-16 right-0 font-semibold text-base'>{showStatu}</h3>
    <div className='mt-2 h-3 bg-white rounded-lg hover:shadow-xl'><div className={`rounded-lg bg-yellow-400  h-full ${statu}`}></div></div>
    </div>
  )
}


export default ProgressPar