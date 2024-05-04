import React from 'react'
import { BsPeople, BsThreeDots } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineEnvelope } from 'react-icons/hi2';
import {  IoNotificationsOutline, IoPersonSharp, IoSearchOutline } from 'react-icons/io5';
import { MdHomeFilled, MdOutlinePersonOutline } from "react-icons/md";
import { RiFileListLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div style={{width:"25.5%"}} className='border-r  border-r-gray-600'>
    <div style={{width:"20%",overflow:"hidden"}} className=' fixed '>
      <div className='mt-3 pl-1'><FaXTwitter size={32} /></div>
      <div>
          <NavLink className='hover flex items-center p-3 pl-1 mt-4'><MdHomeFilled size={30} /><span className='text-[20px] font-extralight pl-3'>Home</span></NavLink>
          <NavLink className='hover flex items-center p-3 pl-1'><IoSearchOutline size={30} /><span className='text-[20px] font-extralight pl-3'>Explore</span></NavLink>
          <NavLink className='hover flex items-center p-3 pl-1'><IoNotificationsOutline size={30} /><span className='text-[20px] font-extralight pl-3'>Notification</span></NavLink>
          <NavLink className='hover flex items-center p-3 pl-1'><HiOutlineEnvelope size={30} /><span className='text-[20px] font-extralight pl-3'>Messages</span></NavLink>
          <NavLink className='hover flex items-center p-3 pl-1'><RiFileListLine size={30} /><span className='text-[20px] font-extralight pl-3'>Lists</span></NavLink>
          <NavLink className='hover flex items-center p-3 pl-1'><BsPeople size={30} /><span className='text-[20px] font-extralight pl-3'>Communities</span></NavLink>
          <NavLink className='hover flex items-center p-3 pl-1'><FaXTwitter size={30} /><span className='text-[20px] font-extralight pl-3'>Premium</span></NavLink>
          <NavLink className='hover flex items-center p-3 pl-1'><MdOutlinePersonOutline size={30} /><span className='text-[20px] font-extralight pl-3'>Profile</span></NavLink>
          <NavLink className='hover flex items-center p-3 pl-1'><BsThreeDots size={30} /><span className='text-[20px] font-extralight pl-3'>More</span></NavLink>
      </div>
      <button className='p-3 bg-[#1d9bf0] font-bold w-56 rounded-full'>Post</button>
      <div className="">
        <div className="email-icon flex items-center mt-10">
          <p className='w-8 h-8 p-5 flex justify-center items-center bg-[#01579b] rounded-full max-w-max mr-4'>E</p>
          <span>
            Elmin Akberov
            <p className='text-[14px] text-gray-500'>@akberovss</p>
          </span>
          <span className='ml-14'><BsThreeDots/></span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header