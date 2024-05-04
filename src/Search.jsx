import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import logo3 from "./assets/img/logos/logo3.jpg"
import logo4 from "./assets/img/logos/logo4.jpg"
import logo5 from "./assets/img/logos/logo5.jpg"
import { RiVerifiedBadgeFill } from 'react-icons/ri'

function Search() {
    return (
        <div style={{ width: '30%' }} className='px-6 flex-grow mt-3'>
            <input type="text" className='py-2 pl-6 bg-[#202327] w-full rounded-full text-black placeholder:text-gray-600' placeholder='Search' />
            <div className="border border-gray-600 rounded-xl p-3 my-14">
                <h3 className='font-bold text-[20px]'>Subscribe to Premium</h3>
                <p className='text-[15px] py-3'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <button className='px-2 py-1  bg-[#1d9bf0] font-bold rounded-full'>Subscribe</button>
            </div>
            <div>
                <div className="border border-gray-600 rounded-xl p-3 my-14">
                    <h2 className='font-bold text-[20px]'>Trending for you</h2>
                    <div className="mt-10 flex justify-between items-center">
                        <div>
                            <p className='text-gray-600 text-[14px]'>Trending in Azerbaijan</p>
                            <p className='font-bold'>6th world forum</p>
                        </div>
                        <div >
                            <BsThreeDots />
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            <p className='text-gray-600 text-[14px]'>Politics · Trending</p>
                            <p className='font-bold'>#Israel</p>
                            <p className='text-gray-600 text-[14px]'>44.2K posts</p>
                        </div>
                        <div >
                            <BsThreeDots />
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            <p className='text-gray-600 text-[14px]'>Trending in Azerbaijan</p>
                            <p className='font-bold'>#Uzbekistan</p>
                            <p className='text-gray-600 text-[14px]'>44.2K posts</p>
                        </div>
                        <div >
                            <BsThreeDots />
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            <p className='text-gray-600 text-[14px]'>Trending in Azerbaijan</p>
                            <p className='font-bold'>#BakuProcess2024</p>
                            <p className='text-gray-600 text-[14px]'>44.2K posts</p>
                        </div>
                        <div >
                            <BsThreeDots />
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="border border-gray-600 rounded-xl p-3 my-14 ">
                    <h3 className='font-bold text-[20px] mb-5'>Who to Follow</h3>
                    <div className="flex items-center mb-4">
                        <img className='w-10 h-10' src={logo3} alt="" />
                        <div className="flex items-center flex-grow ml-3">
                            <div className="flex items-center">
                                <span className='text-[15px]'>Paris Saint-Germain <p className='text-gray-600'>@PSG_English</p></span>
                                <span className='mb-5 text-yellow-400'><RiVerifiedBadgeFill size={18} /></span>
                            </div>
                            <div className="ml-auto">
                                <button className='bg-white text-black font-bold p-2 px-4 rounded-full text-[14px]'>Follow</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <img className='w-10 h-10' src={logo4} alt="" />
                        <div className="flex items-center flex-grow ml-3">
                            <div className="flex items-center">
                                <span className='text-[15px]'>PlayStation <p className='text-gray-600'>@PlayStation</p></span>
                                <span className='mb-5 text-yellow-400'><RiVerifiedBadgeFill size={18} /></span>
                            </div>
                            <div className="ml-auto">
                                <button className='bg-white text-black font-bold p-2 px-4 rounded-full text-[14px]'>Follow</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <img className='w-10 h-10' src={logo5} alt="" />
                        <div className="flex items-center flex-grow ml-3">
                            <div className="flex items-center">
                                <span className='text-[15px]'>Yazılım Dünyası<p className='text-gray-600'>@echomahmut</p></span>
                            </div>
                            <div className="ml-auto">
                                <button className='bg-white text-black font-bold p-2 px-4 rounded-full text-[14px] '>Follow</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Search