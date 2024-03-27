import React from 'react'
function ForgotPassword() {
  return (
    <div className='  flex flex-row  justify-center '>
        <div className='  flex flex-col m-20 outline  rounded-xl font-bold  gap-4 px-10 py-7'>
            <h1 className='font-bold text-lg   text-green-500'>Forgot password </h1>
            <h2  > Enter your phone number</h2>
            <input  id='tel'type='number' placeholder='Enter your number' />
            <button className='flex flex-row justify-center outline rounded-md '>Get otp</button>
            <h1 >Enter otp* </h1>
            <input id='number' type='number' placeholder='Enter otp'/>
            <h1 > Enter New password</h1>
            <input type='password' placeholder='New password'/>
            <h1 > Conform password</h1>
            <input type='password' placeholder='New password'/>
            <button className='flex flex-row justify-center outline rounded-md hover:bg-sky-300'> Submit</button>
        </div>
</div>
  )
}
export default ForgotPassword