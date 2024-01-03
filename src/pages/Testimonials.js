import React from 'react'
import ninja from '../images/ninja.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import image8 from '../images/image8.png'
import image9 from '../images/image9.png'
export default function () {
    return (
        <>
            <div className=" pt-24 items-center flex flex-row px-3 py-2 m-2 justify-center">
                <div className="text-black">
                    <div className='text1 text-4xl'>From novice to ninja: Unleash your coding prowess</div>
                    <div className='text2 text-lg'>with our accelerated <span className='text-black'>web development</span> bootcamp.</div>
                    <a href="/timeline">
                        <button className="button1 bg-blue-900 w-1/2 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ">
                            Start learning Today
                        </button>
                    </a>
                </div>
                <div className="ninja">
                    <img src={ninja} alt="Ninja" />
                </div>
            </div>
            <div className='register ml-12 pt-12 items-center flex flex-row px-3 py-2 m-2'>
                <div className="image1 flex-1">
                    <img src={image1} alt="" />
                </div>
                <ul className="list-none text4 flex-1 text-start">
                    <p className='mb-4'>DESIGNING A WEBSITE</p>
                    <li>&rarr; UI/UX Fundamentals</li>
                    <li>&rarr; Introduction to HTML.</li>
                    <li>&rarr; Styling with CSS Implementation</li>
                </ul>
            </div>
            <div className='register ml-12 pt-12 items-center flex flex-row px-3 py-2 m-2'>
                <ul className="list-none text4 flex-1 text-center">
                    <p className='mb-4'>Diving into CSS</p>
                    <li>&rarr;Responsive design using flexbox</li>
                    <li>&rarr;Understanding Usecases</li>
                    <li>&rarr; Styling with CSS Implementation</li>
                </ul>
                <div className="flex-1">
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className='register ml-12 pt-12 items-center flex flex-row px-3 py-2 m-2'>
                <div className="image1 flex-1">
                    <img src={image3} alt="" />
                </div>
                <ul className="list-none text4 flex-1 text-start">
                    <p className='mb-4'>Master Responsive designs</p>
                    <li>&rarr; Media Queries</li>
                    <li>&rarr; Creating Animations </li>
                    <li>&rarr; Using animations in real world examples.</li>
                </ul>
            </div>
            <div className='register ml-12 pt-12 items-center flex flex-row px-3 py-2 m-2'>
                <ul className="list-none text4 flex-1 text-center">
                    <p className='mb-4'>JavaScript Fundamentals</p>
                    <li>&rarr; Introduction to JavaScript</li>
                    <li>&rarr; Working with Variables and Data Types.</li>
                    <li>&rarr; Conditional Statements and Loops</li>
                    <li>&rarr; Functions and DOM Manipulation Basics</li>
                </ul>
                <div className="flex-1">
                    <img src={image4} alt="" />
                </div>
            </div>
            <div className='register ml-12 pt-12 items-center flex flex-row px-3 py-2 m-2'>
                <div className="image1 flex-1">
                    <img src={image5} alt="" />
                </div>
                <ul className="list-none text4 flex-1 text-start">
                    <p className='mb-4'>LIVE CODING AND PROJECT IMPLEMENTATION</p>
                    <li>&rarr; Code Review and implementation of OTT Platform</li>
                    <li>&rarr; Make and Deploy a project from Scratch</li>
                </ul>
            </div>
            <div className='text-center py-16'>
                <a href="/timeline">
                    <button className='bg-red-500 hover:bg-red-600 button2 text-white font-bold py-4 px-24 rounded'>Learn to Develop Great Websites PAY Rs 99</button>
                </a>
            </div>
            <div className='p-6 text-white text-center flex flex-row flex-wrap justify-center'>
                <div className="max-w-sm flex-column log-images p-12 m-8">
                    <img src={image6} alt="" />
                    <p>Have doubts? Fear not, peer to peer group will help you out any issue, big or small.</p>
                </div>
                <div className=" max-w-sm flex-column log-images p-12 m-8">
                    <img src={image7} alt="" />
                    <p>Have doubts? Fear not, peer to peer group will help you out any issue, big or small.</p>
                </div>
                <div className="max-w-sm flex-column log-images p-12 m-8">
                    <img src={image8} alt="" />
                    <p>Have doubts? Fear not, peer to peer group will help you out any issue, big or small.</p>
                </div>
                <div className="max-w-sm flex-column log-images p-12 m-8">
                    <img src={image9} alt="" />
                    <p>Have doubts? Fear not, peer to peer group will help you out any issue, big or small.</p>
                </div>
            </div>
            <div className="faq flex flex-col w-100 px-12 text-center text-white">
                <h1>Frequently Asked Questions</h1>
                <div className="ques w-100 my-4 p-4">
                    <p>
                        <b>What is this program</b>
                        <p>The program is a live bootcamp where you can attend all sessions in real-time. Support is available for any queries. The bootcamp offers an immersive learning experience to acquire knowledge and skills for web development.</p>
                    </p>
                </div>
                <div className="ques my-4 p-4">
                    <b>Question number 02 goes in here?</b>
                </div>
                <div className="ques my-4 p-4">
                    <b>Question number 03 goes in here?</b>
                </div>
                <div className="ques my-4 p-4">
                    <b>Question number 04 goes in here?</b>
                </div>
                <div className="ques my-4 p-4">
                    <b>Question number 05 goes in here?</b>
                </div>
            </div>
            <div>
                <p className='text-center text-6xl p-8 time'>TIME IS RUNNING OUT , GRAB YOUR SPOT </p>
                <p className='text-center text-8xl p-8 time1'>02 : 59 : 59</p>
            </div>
            <div className='text-center py-16'>
                <a href="/timeline">
                    <button className='bg-red-500 hover:bg-red-600 button2 text-white font-bold py-4 px-24 rounded'>Learn to Develop Great Websites PAY Rs 99</button>
                </a>
                <p className='font-bold price text-lg pt-4 text-red-500'>Once the timer hits zero, pricing will be increased to 899.00/-</p>
            </div>
        </>
    )
}
