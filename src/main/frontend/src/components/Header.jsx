import React from 'react';

const Header = () => {
    return (
        <header className="p-6 sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">VP</span>
                    </div>
                    <span>PORTFOLIO</span>
                </div>
                <nav>
                    <ul className="flex space-x-6 text-sm font-medium text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Work</li>
                        <li className="hover:text-white cursor-pointer transition-colors">About</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
