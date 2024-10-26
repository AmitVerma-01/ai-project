import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function AIprojectCard(props) {
    const navigate = useNavigate()
  return (
    <div className='border rounded-2xl shadow-xl min-w-60 xs:max-w-60 flex justify-center items-center xs:flex-col p-5'>
        <div onClick={() => navigate('/ai-projects-details')} className='w-[50%] xs:w-[100%] h-[50%] rounded-xl overflow-hidden mr-2 xs:mr-0 cursor-pointer'>
            <img src={props.image || "/ai.jpeg"} alt="AI-Projectimage" className=' w-full h-full' />
        </div>
        <div>
            <h1 className='text-md font-bold cursor-pointer' onClick={()=> navigate('/ai-projects-details')}>{props.title}</h1>
            
            <div className='flex justify-between items-center mt-2'>
                <p className='font-semibold '>Price: <span>Rs 200</span></p>
                <button className='text-white bg-[#4285F4] rounded-md py-1 px-2' >Buy Now</button>
            </div>
        </div>
    </div>
  )
}
