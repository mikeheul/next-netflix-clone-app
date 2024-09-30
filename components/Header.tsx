import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-5 bg-gray-900">
            <img
                src="/images/logo.png" // Ensure to add your own logo image
                alt="Netflix"
                className="h-10"
            />
            <button className="text-white bg-red-600 py-2 px-4 rounded hover:bg-red-500">
                Login
            </button>
        </header>
    );
};

export default Header;