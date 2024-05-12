import React from 'react'
import  ServiceCard  from './ServiceCard'

 const ServiceSection = () => {
  return (
    <div id='Service' className=' mt-20'>
        <h2 className='text-center  font-bold text-3xl'>Service</h2>
        <p className='text-center px-20 mt-5'>Revolutionize your brand with our expert services. Elevate your digital presence today!</p>
        <div className=' '>
          <ServiceCard/>
       
          
        </div>

    </div>
  )
}

export default ServiceSection