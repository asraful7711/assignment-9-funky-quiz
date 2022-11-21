import React from 'react';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='px-10 lg:flex justify-between items-center py-3 bg-slate-900 text-white'>
            <Link to='/' className="flex border-2 border-cyan-400 rounded-lg p-2 hover:bg-teal-900">
                <CursorArrowRaysIcon className="h-7 w-7 text-blue-500"></CursorArrowRaysIcon>
                <h3><span className='font-bold text-3xl text-cyan-500'>Funky</span><small className='font-bold text-sm'>Quiz</small></h3>
            </Link>
            <div className="">
                <Link to='/' className='mx-4 hover:text-cyan-300'>Home</Link>
                <Link to='/topics' className='mx-4 hover:text-cyan-300'>Topics</Link>
                <Link to='/statistic' className='mx-4 hover:text-cyan-300'>Statistic</Link>
                <Link to='/blog' className='mx-4 hover:text-cyan-300'>Blog</Link>

            </div>
        </nav>
    );
};

export default Header;