import { useState, useEffect } from "react";

import {copy, linkIcon, loader, tick} from '../assets';

export default function Demo() {
  return (
    <section className="w-full mt-16 max-w-xl">
        {/* Search */}
        <div className="w-full flex flex-col gap-2">
            <form className="relative flex justify-center items-center" onSubmit={() => {}}>
                <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />
                
                <input type="url" placeholder="Enter a value" value="" onChange={() => {}} required className="url_input peer" />

                <button
                    type="submit"
                    className="submit_btn
                    peer-focus:border-gray-700
                    peer-focus:text-gray-700">
                    ,'
                </button>
            </form>

            {/* Browse URL History */}
        </div>

        {/* Display Result */}
        
    </section>
  )
}
