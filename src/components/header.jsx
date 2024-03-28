import React from 'react';
import Metamask from '../assets/metamask.png';

const Header = () => {
    return (
        <div className="flex items-center justify-between p-4 ">
            {/* Image on the left side */}
            <img src={Metamask} alt="MetaMask Icon" className="" />
            {/* Dropdown on the right side */}
            <div className="relative">
                <select
                    className="p-2 border border-white border-opacity-25 rounded bg-gray-900 text-white"
                >
                    <option value="english">English  </option>
                    <option value="hindi">Hindi   </option>
                </select>
                {/* Dropdown arrow icon (you can replace this with a suitable icon) */}
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >

                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;
