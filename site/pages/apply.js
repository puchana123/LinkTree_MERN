import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import {toast} from 'react-toastify'

const Apply = () => {

  const [category,setCategory] = useState('')

  const handleCategoryChange = (e) =>{
    setCategory(e.target.value);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if(!category)return toast.error('Please check the account type')
    toast('You are registered successfully')
  }

  return (
    <>
      <section className={`${styles.background} min-h-screen flex justify-center items-center`}>
        <div className="main">
          <div className="content border-2 p-6 rounded-2xl shadow-lg bg-white">
            <h1 className="text-2xl font-bold text-center">Join the top 1% creators</h1>
            <p className='text-center'>Create LinkTree to your brand</p>
            <p className="text-center font-bold py-4 text-gray-500">Start build your Hub</p>

            <form onSubmit={handleRegister} className='flex flex-col gap-4 text-lg mt-5'>
              <span className='flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none'>
                <img src="/svg/instragam.svg" alt="instragam" className='w-8 mr-3' />
                <input className='focus:outline-none' placeholder='Social Handle' type="text" required/>
              </span>

              <input className='shadow-md border-2 px-3 py-4 rounded-md focus:outline-none' placeholder='Enter your email' type="email" required/>

              <input className='shadow-md border-2 px-3 py-4 rounded-md focus:outline-none' placeholder='Set a password' type="password" required/>

              <h5 className='text-sm text-center text-indigo-400 font-medium'>Account Type:</h5>
              <span className='flex' aria-required>
                <label className='flex flex-row mr-3'>
                  <input type="checkbox" value='Creator' checked={category==='Creator'} onChange={handleCategoryChange}/>
                  <p className='px-2'>Creator</p>
                </label>
                <label className='flex flex-row mr-3'>
                  <input type="checkbox" value='Agency' checked={category==='Agency'} onChange={handleCategoryChange}/>
                  <p className='px-2'>Agency</p>
                </label>
                <label className='flex flex-row mr-3'>
                  <input type="checkbox" value='Brand' checked={category==='Brand'} onChange={handleCategoryChange}/>
                  <p className='px-2'>Brand</p>
                </label>
              </span>

              <button className='text-white bg-indigo-500 py-2 rounded-lg' type="submit">Register</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Apply