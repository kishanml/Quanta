import React from 'react'

import pic from '../assets/laptop.jpg'
const Services = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='services'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[500px] mx-auto h-full' src={pic} alt='/' />
      <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '></p>
        <h1 className='text-2xl md:text-3xl lg:text-4xl  font-bold mt-10 lg:mt-0'>SERVICES WE PROVIDE</h1>
        <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                      <li class="flex space-x-3">

                          <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-medium leading-tight text-gray-900">Experts Based Trading Tips</span>
                      </li>
                      <li class="flex space-x-3">
                      
                          <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-medium leading-tight text-gray-900 ">Algorithm Generated Insights</span>
                      </li>
                      <li class="flex space-x-3">
                      
                          <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-medium leading-tight text-gray-900 ">Techniqal Analysis</span>
                      </li>
                      <li class="flex space-x-3">
                      
                          <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-medium leading-tight text-gray-900 ">10 stocks recommendation</span>
                      </li>
                      <li class="flex space-x-3">
                      
                          <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span class="text-base font-medium leading-tight text-gray-900 ">Winning Strategies</span>
                      </li>
                  </ul>

      </div>
    </div>
  </div>
      
  )
}

export default Services
