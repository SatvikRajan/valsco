import React from 'react'
import ninja from '../images/ninja.png'
export default function () {
    return (
        <>
            <div className="main ml-12 pt-32 items-center flex flex-row px-4 py-2 m-2 justify-center align-center">
                <div className="text-black">
                    <div className='text1 pr-24 text-4xl'>From novice to ninja: Unleash your coding prowess</div>
                    <div className='text2 text-lg'>with our accelerated web development bootcamp.</div>
                    <button class="bg-blue-900 w-1/2 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ">
                        Start learning Today
                    </button>
                </div>
                <div className="ninja">
                    <img src={ninja} alt="Ninja" />
                </div>
            </div>
        </>
    )
}
