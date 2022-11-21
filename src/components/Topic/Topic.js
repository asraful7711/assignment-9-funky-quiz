import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className='border-2 border-slate-400 rounded-md lg:p-7 p-5'>
            <img className='bg-slate-200 mx-auto rounded-md' src={logo} alt="" />
            <div className="mt-3 lg:flex justify-between items-center">

                <p className='font-semibold '>Topic: <small>{name}</small></p>
                <p className='font-medium'><small>Total Quiz:{total}</small></p>

                <button className="btn bg-cyan-900 btn-outline btn-accent mt-2">
                    <Link to='quizs'>Start Practice</Link>
                </button>
            </div>
        </div>
    );
};

export default Topic;