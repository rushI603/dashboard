import React from 'react'
import Image from 'next/image'
import bigImg1 from '../assets/Image5.png'
import bigImg2 from '../assets/Image6.png'
import base from '../assets/Base.png'
import base1 from '../assets/Base1.png'
import base2 from '../assets/Base2.png'
import base3 from '../assets/Base3.png'
import base4 from '../assets/Base4.png'
import base5 from '../assets/Base5.png'
import base6 from '../assets/Base6.png'
import base7 from '../assets/Base7.png'
import base8 from '../assets/Base8.png'
import inwork1 from '../assets/Inwork1.png'
import inwork2 from '../assets/Inwork2.png'
import inwork3 from '../assets/Inwork3.png'
import review1 from '../assets/Review1.png'

const Base = () => {
  return (
    <div className='w-full'>
        <div className="flex px-8  justify-between w-full border-2">
            <div className='item flex  items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.5H6C5.45 12.5 5 12.95 5 13.5C5 14.05 5.45 14.5 6 14.5H16C16.55 14.5 17 14.05 17 13.5C17 12.95 16.55 12.5 16 12.5ZM16 8.5H6C5.45 8.5 5 8.95 5 9.5C5 10.05 5.45 10.5 6 10.5H16C16.55 10.5 17 10.05 17 9.5C17 8.95 16.55 8.5 16 8.5ZM6 18.5H12C12.55 18.5 13 18.05 13 17.5C13 16.95 12.55 16.5 12 16.5H6C5.45 16.5 5 16.95 5 17.5C5 18.05 5.45 18.5 6 18.5ZM25.21 14.71L25.3 14.8C25.69 15.19 25.69 15.82 25.3 16.21L19.72 21.8C19.33 22.19 18.7 22.19 18.31 21.8L15.22 18.71C15.0327 18.5232 14.9275 18.2695 14.9275 18.005C14.9275 17.7405 15.0327 17.4868 15.22 17.3L15.31 17.21C15.7 16.82 16.33 16.82 16.72 17.21L19.02 19.51L23.8 14.72C24.18 14.32 24.82 14.32 25.21 14.71Z" fill="#ADB8CC"/>
                </svg>
                <p className='text-xs text-[#7D8FB3]'>List Tasks</p>
            </div>
            <div className='item border-b-2 border-[#3361FF] flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 16.5H13C13.55 16.5 14 16.05 14 15.5V7.5C14 6.95 13.55 6.5 13 6.5H7C6.45 6.5 6 6.95 6 7.5V15.5C6 16.05 6.45 16.5 7 16.5ZM7 24.5H13C13.55 24.5 14 24.05 14 23.5V19.5C14 18.95 13.55 18.5 13 18.5H7C6.45 18.5 6 18.95 6 19.5V23.5C6 24.05 6.45 24.5 7 24.5ZM17 24.5H23C23.55 24.5 24 24.05 24 23.5V15.5C24 14.95 23.55 14.5 23 14.5H17C16.45 14.5 16 14.95 16 15.5V23.5C16 24.05 16.45 24.5 17 24.5ZM16 7.5V11.5C16 12.05 16.45 12.5 17 12.5H23C23.55 12.5 24 12.05 24 11.5V7.5C24 6.95 23.55 6.5 23 6.5H17C16.45 6.5 16 6.95 16 7.5Z" fill="#3361FF"/>
                </svg>
                <p className='text-xs text-[#3361FF]'>Boards</p>
            </div>
            <div className='item flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 7.5H21V6.5C21 5.95 20.55 5.5 20 5.5C19.45 5.5 19 5.95 19 6.5V7.5H11V6.5C11 5.95 10.55 5.5 10 5.5C9.45 5.5 9 5.95 9 6.5V7.5H8C6.89 7.5 6.01 8.4 6.01 9.5L6 23.5C6 24.6 6.89 25.5 8 25.5H22C23.1 25.5 24 24.6 24 23.5V9.5C24 8.4 23.1 7.5 22 7.5ZM22 22.5C22 23.05 21.55 23.5 21 23.5H9C8.45 23.5 8 23.05 8 22.5V12.5H22V22.5ZM10 14.5H12V16.5H10V14.5ZM14 14.5H16V16.5H14V14.5ZM18 14.5H20V16.5H18V14.5Z" fill="#ADB8CC"/>
                </svg>
                <p className='text-xs text-[#7D8FB3]'>Calender</p>
            </div>
            <div className='item flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.5H11C11.55 21.5 12 21.05 12 20.5C12 19.95 11.55 19.5 11 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5ZM7 16.5H17C17.55 16.5 18 16.05 18 15.5C18 14.95 17.55 14.5 17 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5Z" fill="#ADB8CC"/>
                </svg>
                <p className='text-xs text-[#7D8FB3]'>Gantt</p>
            </div>
            <div className='item flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.5H23C23.55 21.5 24 21.05 24 20.5C24 19.95 23.55 19.5 23 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM7 16.5H23C23.55 16.5 24 16.05 24 15.5C24 14.95 23.55 14.5 23 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5Z" fill="#ADB8CC"/>
                </svg>
                <p className='text-xs text-[#7D8FB3]'>Timeline</p>
            </div>
            <div className='item flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4325 10.35L20.8725 11.79L15.9925 16.67L12.7025 13.38C12.5157 13.1927 12.262 13.0875 11.9975 13.0875C11.733 13.0875 11.4793 13.1927 11.2925 13.38L5.2925 19.39C4.9025 19.78 4.9025 20.41 5.2925 20.8C5.6825 21.19 6.3125 21.19 6.7025 20.8L11.9925 15.5L15.2825 18.79C15.6725 19.18 16.3025 19.18 16.6925 18.79L22.2825 13.21L23.7225 14.65C24.0325 14.96 24.5725 14.74 24.5725 14.3V10C24.5825 9.72 24.3625 9.5 24.0825 9.5H19.7925C19.3425 9.5 19.1225 10.04 19.4325 10.35Z" fill="#ADB8CC"/>
                </svg>
                <p className='text-xs text-[#7D8FB3]'>Acitvity</p>
            </div>
            <div className='bg-white flex p-1 m-2 text-xs w-fit rounded-3xl'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8005 14.1005H14.1685L13.9445 13.8845C14.9045 12.7645 15.4005 11.2365 15.1285 9.61249C14.7525 7.38849 12.8965 5.61249 10.6565 5.34049C7.27249 4.92449 4.42449 7.77249 4.84049 11.1565C5.11249 13.3965 6.88849 15.2525 9.11249 15.6285C10.7365 15.9005 12.2645 15.4045 13.3845 14.4445L13.6005 14.6685V15.3005L17.0005 18.7005C17.3285 19.0285 17.8645 19.0285 18.1925 18.7005C18.5205 18.3725 18.5205 17.8365 18.1925 17.5085L14.8005 14.1005ZM10.0005 14.1005C8.00849 14.1005 6.40049 12.4925 6.40049 10.5005C6.40049 8.50849 8.00849 6.90049 10.0005 6.90049C11.9925 6.90049 13.6005 8.50849 13.6005 10.5005C13.6005 12.4925 11.9925 14.1005 10.0005 14.1005Z" fill="#C3CAD9"/>
                </svg>
                <input className='w-fit text-xs focus:outline-none font-bold' type="text" placeholder='Search Tasks' />
            </div>
        </div>



        <div className='flex m-8 gap-x-4 justify-around '>
            <div className='rounded-lg flex gap-y-4 flex-col'>
                <div className='bg-white py-2 gap-x-8 rounded-lg mb-2 flex justify-between items-center'>
                    <div className='text-xs pl-2 flex border-l-[3px] grow justify-around rounded-[3px] border-[#8833FF] items-center text-[#4D5E80] font-black'>TO DO
                        <div className='border-2 m-0.5 bg-white w-5 h-5 p-3 flex justify-center items-center font-black text-[#6B7A99] rounded-full text-xs'>5</div>
                    </div>
                    <div className="flex pr-2 grow justify-around ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z" fill="#C3CAD9"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 16.5H16V21.5C16 22.05 15.55 22.5 15 22.5C14.45 22.5 14 22.05 14 21.5V16.5H9C8.45 16.5 8 16.05 8 15.5C8 14.95 8.45 14.5 9 14.5H14V9.5C14 8.95 14.45 8.5 15 8.5C15.55 8.5 16 8.95 16 9.5V14.5H21C21.55 14.5 22 14.95 22 15.5C22 16.05 21.55 16.5 21 16.5Z" fill="#C3CAD9"/>
                        </svg>
                    </div>
                </div>
                <div className='bg-white rounded-lg'>
                    <Image
                        src={bigImg1}
                        width={230}
                        height={170}
                    />
                    <div className='p-2'>
                        <div className='m-2 flex justify-between items-center'>
                            <span className=' text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                            <Image
                                className='rounded-full'
                                src={base}
                                width={20}
                                height={20}
                            />
                        </div>
                        <span className=' m-2 text-[#6B7A99] font-bold text-xs'>Make Money Online Through</span>
                        <div className="mx-2 mr-6 mt-2 time-left flex justify-between items-center">
                            <svg className='inline ' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.5C7.55 12.5 8 12.05 8 11.5C8 10.95 7.55 10.5 7 10.5C6.45 10.5 6 10.95 6 11.5C6 12.05 6.45 12.5 7 12.5ZM8 15.5C8 16.05 7.55 16.5 7 16.5C6.45 16.5 6 16.05 6 15.5C6 14.95 6.45 14.5 7 14.5C7.55 14.5 8 14.95 8 15.5ZM8 19.5C8 20.05 7.55 20.5 7 20.5C6.45 20.5 6 20.05 6 19.5C6 18.95 6.45 18.5 7 18.5C7.55 18.5 8 18.95 8 19.5ZM24 15.5C24 16.05 23.55 16.5 23 16.5H11C10.45 16.5 10 16.05 10 15.5C10 14.95 10.45 14.5 11 14.5H23C23.55 14.5 24 14.95 24 15.5ZM23 20.5C23.55 20.5 24 20.05 24 19.5C24 18.95 23.55 18.5 23 18.5H11C10.45 18.5 10 18.95 10 19.5C10 20.05 10.45 20.5 11 20.5H23ZM11 12.5C10.45 12.5 10 12.05 10 11.5C10 10.95 10.45 10.5 11 10.5H23C23.55 10.5 24 10.95 24 11.5C24 12.05 23.55 12.5 23 12.5H11Z" fill="#C3CAD9"/>
                            </svg> 
                            <span className='text-[10px] text-[#6B7A99] font-bold'>4</span>
                            <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z" fill="#C3CAD9"/>
                            </svg>
                            <span className='text-[10px] text-[#6B7A99] font-bold'>2</span>
                            <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4064 18.5314L15.0364 16.5314V12.0014C15.0364 11.6014 14.7164 11.2814 14.3164 11.2814H14.2564C13.8564 11.2814 13.5364 11.6014 13.5364 12.0014V16.7214C13.5364 17.0714 13.7164 17.4014 14.0264 17.5814L17.6764 19.7714C18.0164 19.9714 18.4564 19.8714 18.6564 19.5314C18.8664 19.1814 18.7564 18.7314 18.4064 18.5314ZM23.7164 8.29139L20.6364 5.73139C20.2164 5.38139 19.5864 5.43139 19.2264 5.86139C18.8764 6.28139 18.9364 6.91139 19.3564 7.27139L22.4264 9.83139C22.8464 10.1814 23.4764 10.1314 23.8364 9.70139C24.1964 9.28139 24.1364 8.65139 23.7164 8.29139ZM6.63638 9.83139L9.70638 7.27139C10.1364 6.91139 10.1964 6.28139 9.83638 5.86139C9.48638 5.43139 8.85638 5.38139 8.43638 5.73139L5.35638 8.29139C4.93638 8.65139 4.87638 9.28139 5.23638 9.70139C5.58638 10.1314 6.21638 10.1814 6.63638 9.83139ZM14.5364 7.28139C9.56638 7.28139 5.53638 11.3114 5.53638 16.2814C5.53638 21.2514 9.56638 25.2814 14.5364 25.2814C19.5064 25.2814 23.5364 21.2514 23.5364 16.2814C23.5364 11.3114 19.5064 7.28139 14.5364 7.28139ZM14.5364 23.2814C10.6764 23.2814 7.53638 20.1414 7.53638 16.2814C7.53638 12.4214 10.6764 9.28139 14.5364 9.28139C18.3964 9.28139 21.5364 12.4214 21.5364 16.2814C21.5364 20.1414 18.3964 23.2814 14.5364 23.2814Z" fill="#C3CAD9"/>
                            </svg>
                            <span className='text-[10px] text-[#6B7A99] font-bold'>6 Days Left</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex p-4 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full relative left-1'
                                src={base2}
                                width={20}
                                height={20}
                                />
                            <Image
                                className='rounded-full z-10'
                                src={base1}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className=' m-4 text-[#6B7A99] font-bold text-xs'>Make Money Online Through</span>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex p-4 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full relative left-2'
                                src={base5}
                                width={20}
                                height={20}
                                />
                            <Image
                                className='rounded-full relative left-1 z-10'
                                src={base4}
                                width={20}
                                height={20}
                                />
                            <Image
                                className='rounded-full z-20'
                                src={base3}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className=' m-4 text-[#6B7A99] font-bold text-xs'>Search Engine Optimization ...</span>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex p-4 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full'
                                src={base6}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className='py-4 m-4 text-[#6B7A99] font-bold text-xs'>Characteristics Of A Successful</span>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex p-4 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full'
                                src={base7}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className=' m-4 text-[#6B7A99] font-bold text-xs'>Getting Free Publicity</span>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex p-4 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full'
                                src={base8}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className=' m-4 text-[#6B7A99] font-bold text-xs'>Importance Of The Custom ...</span>
                </div>
                <span className='text-[#6B7A99] p-2 mx-2 font-bold text-xs'>+ NEW TASK</span>
            </div>
            <div className='rounded-lg flex  gap-y-4 flex-col'>
                <div className='bg-white py-2 gap-x-8 rounded-lg mb-2 flex justify-between items-center'>
                    <div className='text-xs pl-2 flex border-l-[3px] grow justify-around rounded-[3px] border-[#33BFFF] items-center text-[#4D5E80] font-black'>IN WORK
                        <div className='border-2 m-0.5 bg-white w-5 h-5 p-3 flex justify-center items-center font-black text-[#6B7A99] rounded-full text-xs'>5</div>
                    </div>
                    <div className="flex pr-2 grow justify-around ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z" fill="#C3CAD9"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 16.5H16V21.5C16 22.05 15.55 22.5 15 22.5C14.45 22.5 14 22.05 14 21.5V16.5H9C8.45 16.5 8 16.05 8 15.5C8 14.95 8.45 14.5 9 14.5H14V9.5C14 8.95 14.45 8.5 15 8.5C15.55 8.5 16 8.95 16 9.5V14.5H21C21.55 14.5 22 14.95 22 15.5C22 16.05 21.55 16.5 21 16.5Z" fill="#C3CAD9"/>
                        </svg>
                    </div>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex p-4 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 3</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full'
                                src={inwork1}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className='py-4 m-4 text-[#6B7A99] font-bold text-xs'>Types Of Paper In Catalog</span>
                </div>
                <div className='bg-white rounded-lg'>
                    <Image
                        src={bigImg2}
                        width={230}
                        height={170}
                    />
                    <div className='p-2'>
                        <div className='m-2 flex justify-between items-center'>
                            <span className=' text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                            <Image
                                className='rounded-full'
                                src={base}
                                width={20}
                                height={20}
                            />
                        </div>
                        <span className=' m-2 text-[#6B7A99] font-bold text-xs'>Global Resorts Network</span>
                        <div className="mx-2 mr-6 mt-2 time-left flex justify-between items-center">
                            <svg className='inline ' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.5C7.55 12.5 8 12.05 8 11.5C8 10.95 7.55 10.5 7 10.5C6.45 10.5 6 10.95 6 11.5C6 12.05 6.45 12.5 7 12.5ZM8 15.5C8 16.05 7.55 16.5 7 16.5C6.45 16.5 6 16.05 6 15.5C6 14.95 6.45 14.5 7 14.5C7.55 14.5 8 14.95 8 15.5ZM8 19.5C8 20.05 7.55 20.5 7 20.5C6.45 20.5 6 20.05 6 19.5C6 18.95 6.45 18.5 7 18.5C7.55 18.5 8 18.95 8 19.5ZM24 15.5C24 16.05 23.55 16.5 23 16.5H11C10.45 16.5 10 16.05 10 15.5C10 14.95 10.45 14.5 11 14.5H23C23.55 14.5 24 14.95 24 15.5ZM23 20.5C23.55 20.5 24 20.05 24 19.5C24 18.95 23.55 18.5 23 18.5H11C10.45 18.5 10 18.95 10 19.5C10 20.05 10.45 20.5 11 20.5H23ZM11 12.5C10.45 12.5 10 12.05 10 11.5C10 10.95 10.45 10.5 11 10.5H23C23.55 10.5 24 10.95 24 11.5C24 12.05 23.55 12.5 23 12.5H11Z" fill="#C3CAD9"/>
                            </svg> 
                            <span className='text-[10px] text-[#6B7A99] font-bold'>4</span>
                            <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z" fill="#C3CAD9"/>
                            </svg>
                            <span className='text-[10px] text-[#6B7A99] font-bold'>2</span>
                            <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4064 18.5314L15.0364 16.5314V12.0014C15.0364 11.6014 14.7164 11.2814 14.3164 11.2814H14.2564C13.8564 11.2814 13.5364 11.6014 13.5364 12.0014V16.7214C13.5364 17.0714 13.7164 17.4014 14.0264 17.5814L17.6764 19.7714C18.0164 19.9714 18.4564 19.8714 18.6564 19.5314C18.8664 19.1814 18.7564 18.7314 18.4064 18.5314ZM23.7164 8.29139L20.6364 5.73139C20.2164 5.38139 19.5864 5.43139 19.2264 5.86139C18.8764 6.28139 18.9364 6.91139 19.3564 7.27139L22.4264 9.83139C22.8464 10.1814 23.4764 10.1314 23.8364 9.70139C24.1964 9.28139 24.1364 8.65139 23.7164 8.29139ZM6.63638 9.83139L9.70638 7.27139C10.1364 6.91139 10.1964 6.28139 9.83638 5.86139C9.48638 5.43139 8.85638 5.38139 8.43638 5.73139L5.35638 8.29139C4.93638 8.65139 4.87638 9.28139 5.23638 9.70139C5.58638 10.1314 6.21638 10.1814 6.63638 9.83139ZM14.5364 7.28139C9.56638 7.28139 5.53638 11.3114 5.53638 16.2814C5.53638 21.2514 9.56638 25.2814 14.5364 25.2814C19.5064 25.2814 23.5364 21.2514 23.5364 16.2814C23.5364 11.3114 19.5064 7.28139 14.5364 7.28139ZM14.5364 23.2814C10.6764 23.2814 7.53638 20.1414 7.53638 16.2814C7.53638 12.4214 10.6764 9.28139 14.5364 9.28139C18.3964 9.28139 21.5364 12.4214 21.5364 16.2814C21.5364 20.1414 18.3964 23.2814 14.5364 23.2814Z" fill="#C3CAD9"/>
                            </svg>
                            <span className='text-[10px] text-[#6B7A99] font-bold'>6 Days Left</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex p-4 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full'
                                src={inwork2}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className='py-4 m-4 text-[#6B7A99] font-bold text-xs'>Development Apps</span>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='m-2 flex justify-between items-center'>
                        <span className=' text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                        <Image
                            className='rounded-full'
                            src={inwork3}
                            width={20}
                            height={20}
                        />
                    </div>
                    <span className=' m-2 text-[#6B7A99] font-bold text-xs'>Global Resorts Network</span>
                    <div className="mx-2 mr-6 mt-2 time-left flex justify-between items-center">
                        <svg className='inline ' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.5C7.55 12.5 8 12.05 8 11.5C8 10.95 7.55 10.5 7 10.5C6.45 10.5 6 10.95 6 11.5C6 12.05 6.45 12.5 7 12.5ZM8 15.5C8 16.05 7.55 16.5 7 16.5C6.45 16.5 6 16.05 6 15.5C6 14.95 6.45 14.5 7 14.5C7.55 14.5 8 14.95 8 15.5ZM8 19.5C8 20.05 7.55 20.5 7 20.5C6.45 20.5 6 20.05 6 19.5C6 18.95 6.45 18.5 7 18.5C7.55 18.5 8 18.95 8 19.5ZM24 15.5C24 16.05 23.55 16.5 23 16.5H11C10.45 16.5 10 16.05 10 15.5C10 14.95 10.45 14.5 11 14.5H23C23.55 14.5 24 14.95 24 15.5ZM23 20.5C23.55 20.5 24 20.05 24 19.5C24 18.95 23.55 18.5 23 18.5H11C10.45 18.5 10 18.95 10 19.5C10 20.05 10.45 20.5 11 20.5H23ZM11 12.5C10.45 12.5 10 12.05 10 11.5C10 10.95 10.45 10.5 11 10.5H23C23.55 10.5 24 10.95 24 11.5C24 12.05 23.55 12.5 23 12.5H11Z" fill="#C3CAD9"/>
                        </svg> 
                        <span className='text-[10px] text-[#6B7A99] font-bold'>4</span>
                        <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z" fill="#C3CAD9"/>
                        </svg>
                        <span className='text-[10px] text-[#6B7A99] font-bold'>2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4064 18.5314L15.0364 16.5314V12.0014C15.0364 11.6014 14.7164 11.2814 14.3164 11.2814H14.2564C13.8564 11.2814 13.5364 11.6014 13.5364 12.0014V16.7214C13.5364 17.0714 13.7164 17.4014 14.0264 17.5814L17.6764 19.7714C18.0164 19.9714 18.4564 19.8714 18.6564 19.5314C18.8664 19.1814 18.7564 18.7314 18.4064 18.5314ZM23.7164 8.29139L20.6364 5.73139C20.2164 5.38139 19.5864 5.43139 19.2264 5.86139C18.8764 6.28139 18.9364 6.91139 19.3564 7.27139L22.4264 9.83139C22.8464 10.1814 23.4764 10.1314 23.8364 9.70139C24.1964 9.28139 24.1364 8.65139 23.7164 8.29139ZM6.63638 9.83139L9.70638 7.27139C10.1364 6.91139 10.1964 6.28139 9.83638 5.86139C9.48638 5.43139 8.85638 5.38139 8.43638 5.73139L5.35638 8.29139C4.93638 8.65139 4.87638 9.28139 5.23638 9.70139C5.58638 10.1314 6.21638 10.1814 6.63638 9.83139ZM14.5364 7.28139C9.56638 7.28139 5.53638 11.3114 5.53638 16.2814C5.53638 21.2514 9.56638 25.2814 14.5364 25.2814C19.5064 25.2814 23.5364 21.2514 23.5364 16.2814C23.5364 11.3114 19.5064 7.28139 14.5364 7.28139ZM14.5364 23.2814C10.6764 23.2814 7.53638 20.1414 7.53638 16.2814C7.53638 12.4214 10.6764 9.28139 14.5364 9.28139C18.3964 9.28139 21.5364 12.4214 21.5364 16.2814C21.5364 20.1414 18.3964 23.2814 14.5364 23.2814Z" fill="#E62E2E"/>
                        </svg>
                        <span className='text-[10px] text-[#6B7A99] font-bold'>6 Days Left</span>
                    </div>
                </div>
                <span className='text-[#6B7A99] p-2 mx-2 font-bold text-xs'>+ NEW TASK</span>
            </div>
            <div className=' rounded-lg flex gap-y-4 flex-col'>
                <div className='bg-white py-2 gap-x-12 rounded-lg mb-2 flex justify-between items-center'>
                    <div className='text-xs pl-2 flex border-l-[3px] grow gap-x-2 justify-around rounded-[3px] border-[#FFCB33] items-center text-[#4D5E80] font-black'>REVIEW
                        <div className='border-2 m-0.5 bg-white w-5 h-5 p-3 flex justify-center items-center font-black text-[#6B7A99] rounded-full text-xs'>5</div>
                    </div>
                    <div className="flex pr-2 grow justify-around ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z" fill="#C3CAD9"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 16.5H16V21.5C16 22.05 15.55 22.5 15 22.5C14.45 22.5 14 22.05 14 21.5V16.5H9C8.45 16.5 8 16.05 8 15.5C8 14.95 8.45 14.5 9 14.5H14V9.5C14 8.95 14.45 8.5 15 8.5C15.55 8.5 16 8.95 16 9.5V14.5H21C21.55 14.5 22 14.95 22 15.5C22 16.05 21.55 16.5 21 16.5Z" fill="#C3CAD9"/>
                        </svg>
                    </div>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex px-4 pt-4 pb-2 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 3</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full'
                                src={review1}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className=' mx-4 text-[#6B7A99] font-bold text-xs'>Astronomy Or Astrology</span>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex p-4 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 1</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full'
                                src={inwork2}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className=' m-4 text-[#6B7A99] font-bold text-xs'>Astronomy Binoculars A Great</span>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex gap-x-0 p-4 justify-between items-center'>
                        <div className='flex'>
                            <svg className='p-0' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8925 8.80249C20.7057 8.61523 20.452 8.51 20.1875 8.51C19.923 8.51 19.6693 8.61523 19.4825 8.80249L14.5925 13.6825L9.7025 8.79249C9.51567 8.60523 9.26202 8.5 8.9975 8.5C8.73298 8.5 8.47933 8.60523 8.2925 8.79249C7.9025 9.18249 7.9025 9.81249 8.2925 10.2025L13.1825 15.0925L8.2925 19.9825C7.9025 20.3725 7.9025 21.0025 8.2925 21.3925C8.6825 21.7825 9.3125 21.7825 9.7025 21.3925L14.5925 16.5025L19.4825 21.3925C19.8725 21.7825 20.5025 21.7825 20.8925 21.3925C21.2825 21.0025 21.2825 20.3725 20.8925 19.9825L16.0025 15.0925L20.8925 10.2025C21.2725 9.82249 21.2725 9.18249 20.8925 8.80249Z" fill="#C3CAD9"/>
                            </svg>
                            <input type="text" name="text" placeholder='Task name or type' id="text" className='w-28 focus:outline-none p-0 m-0 text-xs font-bold text-[#ADB8CC]' />
                        </div>
                        {/* <div className='border-2 text-xs font-bold text-[#ADB8CC]'>Task name or type</div>  */}
                        <div className="images flex">
                            <Image
                                className='rounded-full'
                                src={base4}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4 9.5L17.16 8.3C17.07 7.84 16.66 7.5 16.18 7.5H9C8.45 7.5 8 7.95 8 8.5V23.5C8 24.05 8.45 24.5 9 24.5C9.55 24.5 10 24.05 10 23.5V17.5H15.6L15.84 18.7C15.93 19.17 16.34 19.5 16.82 19.5H22C22.55 19.5 23 19.05 23 18.5V10.5C23 9.95 22.55 9.5 22 9.5H17.4Z" fill="#C3CAD9"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2539 20H9.67393C7.58393 20 5.72393 18.47 5.52393 16.39C5.29393 14.01 7.16393 12 9.50393 12H21.8639C23.1739 12 24.3639 12.94 24.4939 14.24C24.6439 15.74 23.4739 17 22.0039 17H11.5039C10.9539 17 10.5039 16.55 10.5039 16C10.5039 15.45 10.9539 15 11.5039 15H20.2539C20.6639 15 21.0039 14.66 21.0039 14.25C21.0039 13.84 20.6639 13.5 20.2539 13.5H11.6439C10.3339 13.5 9.14393 14.44 9.01393 15.74C8.86393 17.24 10.0339 18.5 11.5039 18.5H21.8339C23.9239 18.5 25.7839 16.97 25.9839 14.89C26.2139 12.5 24.3439 10.5 22.0039 10.5H9.73393C6.86393 10.5 4.29393 12.6 4.02393 15.46C3.72393 18.75 6.28393 21.5 9.50393 21.5H20.2539C20.6639 21.5 21.0039 21.16 21.0039 20.75C21.0039 20.34 20.6639 20 20.2539 20Z" fill="#C3CAD9"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 5.5C9.47 5.5 5 9.98 5 15.5C5 21.02 9.47 25.5 14.99 25.5C20.52 25.5 25 21.02 25 15.5C25 9.98 20.52 5.5 14.99 5.5ZM15 23.5C10.58 23.5 7 19.92 7 15.5C7 11.08 10.58 7.5 15 7.5C19.42 7.5 23 11.08 23 15.5C23 19.92 19.42 23.5 15 23.5ZM14.78 10.5H14.72C14.32 10.5 14 10.82 14 11.22V15.94C14 16.29 14.18 16.62 14.49 16.8L18.64 19.29C18.98 19.49 19.42 19.39 19.62 19.05C19.83 18.71 19.72 18.26 19.37 18.06L15.5 15.76V11.22C15.5 10.82 15.18 10.5 14.78 10.5Z" fill="#C3CAD9"/>
                            </svg>
                        </div>
                        <button className='bg-[#3361FF] text-[#FFFFFF] text-xs p-2 rounded-lg'>Save</button>
                    </div>
                </div>
            </div>
            <div className='rounded-lg gap-y-4 flex flex-col'>
                <div className='bg-white py-2 gap-x-10 rounded-lg mb-2 flex justify-between items-center'>
                        <div className='gap-x-2 text-xs pl-2 flex border-l-[3px] grow justify-around rounded-[3px] border-[#29CC39] items-center text-[#4D5E80] font-black'>DONE
                            <div className='border-2 m-0.5 bg-white w-5 h-5 p-3 flex justify-center items-center font-black text-[#6B7A99] rounded-full text-xs'>5</div>
                        </div>
                        <div className="flex pr-2 grow justify-around ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13.5C7.9 13.5 7 14.4 7 15.5C7 16.6 7.9 17.5 9 17.5C10.1 17.5 11 16.6 11 15.5C11 14.4 10.1 13.5 9 13.5ZM21 13.5C19.9 13.5 19 14.4 19 15.5C19 16.6 19.9 17.5 21 17.5C22.1 17.5 23 16.6 23 15.5C23 14.4 22.1 13.5 21 13.5ZM15 13.5C13.9 13.5 13 14.4 13 15.5C13 16.6 13.9 17.5 15 17.5C16.1 17.5 17 16.6 17 15.5C17 14.4 16.1 13.5 15 13.5Z" fill="#C3CAD9"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 16.5H16V21.5C16 22.05 15.55 22.5 15 22.5C14.45 22.5 14 22.05 14 21.5V16.5H9C8.45 16.5 8 16.05 8 15.5C8 14.95 8.45 14.5 9 14.5H14V9.5C14 8.95 14.45 8.5 15 8.5C15.55 8.5 16 8.95 16 9.5V14.5H21C21.55 14.5 22 14.95 22 15.5C22 16.05 21.55 16.5 21 16.5Z" fill="#C3CAD9"/>
                            </svg>
                        </div>
                </div>
                <div className='bg-white pt-1 pb-4 rounded-lg'>
                    <div className='flex px-4 pt-4 pb-2 justify-between items-center'>
                        <span className='text-xs font-bold text-[#ADB8CC]'>Space Tasks 2</span>
                        <div className="images flex ">
                            <Image
                                className='rounded-full'
                                src={inwork2}
                                width={20}
                                height={20}
                                />
                        </div>
                    </div>
                    <span className=' mx-4 text-[#6B7A99] font-bold text-xs'>Copper Canyon</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Base
