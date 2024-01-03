import React from 'react';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import image8 from '../images/image8.png'
import image9 from '../images/image9.png'
export default function Timeline() {
  return (
    <>
      <div id='form' className="w-10/12 form mx-auto mt-24 p-6 bg-white rounded-lg">
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700">Field of Study</label>
            <input
              type="text"
              id="fieldOfStudy"
              className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your field of study"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City</label>

            <select
              id="city"
              className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="" disabled>Select your city</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
            <input
              type="date"
              id="birthdate"
              className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
            <select
              id="nationality"
              className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="" disabled>Select your nationality</option>
              <option value="nationality1">Nationality 1</option>
              <option value="nationality2">Nationality 2</option>
            </select>
          </div>
          <div className="mb-4 text-center ">
            <input
              type="checkbox"
              id="confirmationCheckbox"
              className="mr-2"
              required
            />
            <label htmlFor="confirmationCheckbox" className="text-sm text-gray-700">I vouch that all the information I have filled above is completely true</label>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="w-1/2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Enter
            </button>
          </div>
        </form>
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
  );
}
