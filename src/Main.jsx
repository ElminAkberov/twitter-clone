import React, { useState } from 'react';
import logo1 from "./assets/img/logos/logo1.jpg"
import logo2 from "./assets/img/logos/logo2.jpg"
import info1 from "./assets/img/infos/info1.jpeg"
import info2 from "./assets/img/infos/info2.jpeg"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa6';
import { DiGitCompare } from 'react-icons/di';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoShareOutline, IoStatsChart } from 'react-icons/io5';
import { FiBookmark } from 'react-icons/fi';

function Main() {
    let [selectedTab, setSelectedTab] = useState("For you")
    const change = (select) => {
        setSelectedTab(select)
    }

    return (
        <div style={{ width: "50%" }} className='border-r border-r-gray-600 '>
            <div className="flex justify-evenly border-b border-b-gray-600">
                <span className={`p-3 border-b-4 ${selectedTab == "For you" ? 'border-b-[#1d9bf0]' : 'border-b-transparent text-gray-600'}`} onClick={() => change('For you')}>For you</span>
                <span className={`p-3 border-b-4 ${selectedTab == "Following" ? 'border-b-[#1d9bf0]' : 'border-b-transparent text-gray-600'}`} onClick={() => change('Following')}>Following</span>
            </div>
            <div className=" items-center p-6 border-b border-b-gray-600">
                <span className='w-8 h-8 p-5 inline-flex justify-center items-center bg-[#01579b] rounded-full max-w-max mr-4 '>E</span>
                <input type='text' className='bg-transparent outline-none w-[80%]' placeholder='What is happening?!' />
                <div className="flex justify-end">
                    <button className='p-1 px-4 bg-[#1d9bf0] font-bold rounded-full'>Post</button>
                </div>
            </div>
            <div className="p-6 flex flex-grow">
                <div><img className='w-12 h-12 rounded-full' src={logo1} /></div>
                <div className='mx-3'>
                    <span>
                        <div className='flex items-center'><span className='font-bold'>Boşuna Tıklama</span><span className='mx-2 text-blue-500'><RiVerifiedBadgeFill size={18} /></span> <span className='text-gray-600'> @bosunatiklama · 2h</span></div>
                        <p>Van'da çığ altında kalan minibüs,5 ay sonra ortaya çıktı.</p>
                    </span>
                </div>
                <div className="ml-auto mt-1"><BsThreeDots /></div>
            </div>
            <div className="p-6 pt-0 border-b border-b-gray-600">
                <img className='rounded-2xl' src={info1} />
                <div className="flex items-center justify-between text-[18px] mt-3 text-gray-600">
                    <div className="flex items-center hover:text-blue-400 transition duration-500">
                        <FaRegComment /><span className='text-[13px] ml-1 '>66</span>
                    </div>
                    <div className="flex items-center hover:text-emerald-500 transition duration-500">
                        <DiGitCompare /><span className='text-[13px] ml-1'>95</span>
                    </div>
                    <div className="flex items-center hover:text-red-500 transition duration-500">
                        <IoMdHeartEmpty /><span className='text-[13px] ml-1'>7,3K</span>
                    </div>
                    <div className="flex items-center hover:text-blue-400 transition duration-500">
                        <IoStatsChart /><span className='text-[13px] ml-1'>634K</span>
                    </div>
                    <div className="flex">
                        <span className='hover:text-blue-400 transition duration-500'><FiBookmark /></span>
                        <span className='ml-2 hover:text-blue-400 transition duration-500'><IoShareOutline /></span>
                    </div>
                </div>
            </div>
            <div className="p-6 flex flex-grow">
                <div><img className='w-12 h-12 rounded-full' src={logo2} /></div>
                <div className='mx-3'>
                    <span>
                        <div className='flex items-center'><span className='font-bold'>Madrid Xtra</span><span className='mx-2 text-blue-500'><RiVerifiedBadgeFill size={18} /></span> <span className='text-gray-600'> @MadridXtra · 14h</span></div>
                        <p>📲 Viní Jr. x Jadon Sancho.</p>
                    </span>
                </div>
                <div className="ml-auto mt-1"><BsThreeDots /></div>
            </div>
            <div className="p-6 pt-0">
                <img className='rounded-2xl' src={info2} />
                <div className="flex items-center justify-between text-[18px] mt-3 text-gray-600">
                    <div className="flex items-center hover:text-blue-400 transition duration-500">
                        <FaRegComment /><span className='text-[13px] ml-1'>4K</span>
                    </div>
                    <div className="flex items-center hover:text-emerald-500 transition duration-500">
                        <DiGitCompare /><span className='text-[13px] ml-1'>54</span>
                    </div>
                    <div className="flex items-center hover:text-red-500 transition duration-500">
                        <IoMdHeartEmpty /><span className='text-[13px] ml-1'>17,3K</span>
                    </div>
                    <div className="flex items-center hover:text-blue-400 transition duration-500">
                        <IoStatsChart /><span className='text-[13px] ml-1'>64K</span>
                    </div>
                    <div className="flex">
                        <span className='hover:text-blue-400 transition duration-500'><FiBookmark /></span>
                        <span className='ml-2 hover:text-blue-400 transition duration-500'><IoShareOutline /></span>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Main;
