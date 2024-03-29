import React from 'react';
import logo from '../images/valsco.jpg';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isTimelinePage = location.pathname === '/timeline';
    const isTestimonialsPage = location.pathname === '/testimonials';
    return (
        <>
            <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://jurident.com" className="flex items-center rtl:space-x-reverse">
                        <img src={logo} className='h-11' alt="Valsco" />
                        <span className="self-center text-white font-semibold whitespace-nowrap dark:text-white">Valsco Technology</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="hidden md:block text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 ">
                            Register @ Rs 99
                        </button>

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:h over:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="ul-list flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2  text-white rounded md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <Link to="/" className={`block py-2 text-white-900 rounded text-white md:hover:text-white-700 md:p-0 md:dark:hover:text-white-500 dark:text-white dark:border-gray-700`}>FAQs</Link>
                            </li>
                            <li>
                                <Link to={isTimelinePage ? '/testimonials' : '/timeline'} className={`block py-2 text-white rounded md:p-0 dark:text-white md:hover:text-white-700 md:dark:hover:bg-transparent dark:border-gray-700 ${isTestimonialsPage ? 'text-white' : 'text-white-700'}`}>{isTestimonialsPage ? 'Timeline' : 'Testimonials'}</Link>
                            </li>
                        </ul>
                        <Link to="/timeline">
                            <button
                                type="button"
                                className="md:hidden text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600"
                            >
                                Register @ Rs 99
                            </button>
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    );
}
