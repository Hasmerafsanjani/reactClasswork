import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className= 'h-20 justify-between flex items-center  overflow-hidden mx-10'>

    <div className='flex gap-4'>
      <h1 className='font-extrabold text-lg mx-5'>Hootsuite</h1>
      <p className='font-bold'>platform</p>
      <p className='font-bold'>plan</p>
      <p className='font-bold'>platform</p>
      <p className='font-bold'>platform</p>
    </div>
    <div className=' ali flex gap-4 text-center items-center '>
      <p className='font-semibold'>Contact Us</p>
      <p className='font-semibold'>Log in</p>
      <button className='bg-green-600 p-3 font-bold text-white '>Sing Up</button>
    </div>
    </div>
    <div className='bg-blue-900 items-center flex flex-col p-5'>

      <h1 className='text-5xl text-white text-center font-extrabold'>See value from social sooner</h1>
      <p className='p-5 font-semibold text-center text-white'>Our trainig strategic services have helped <br /> thousands of organizations succed on social .</p>
      <button className='bg-green-600 p-3 mb-7 font-bold text-white '>Request a Demo</button>
    </div>
    <div className='flex justify-evenly mt-14' >
      <div className='flex flex-col'>
    <img className='h-40 w-40 ' src="https://cdn-icons-png.flaticon.com/512/4334/4334058.png" alt="" />
     <h1 className='text-lg font-extrabold text-center'>1,500</h1>
     <p className='mt-10'>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='flex flex-col'>
    <img className='h-40 w-40 ' src="https://cdn-icons-png.flaticon.com/512/6303/6303922.png" alt="" />
     <h1 className='text-lg font-extrabold text-center'>44,500</h1>
     <p className='mt-10'>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='flex flex-col'>
    <img className='h-40 w-40 ' src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-sms-chat-friends-icon-circle-png-image_5278854.jpg" alt="" />
     <h1 className='text-lg font-extrabold text-center'>200,000+</h1>
     <p className='mt-10'>Lorem ipsum dolor sit amet.</p>
      </div>

    </div>
    </>
  )
}

export default App
