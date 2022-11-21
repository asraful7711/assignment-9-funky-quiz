import React from 'react';

const Question = ({ problems }) => {
    const { question, options, } = problems;
    // console.log(problems)
    return (
        <div className='lg:w-3/6 w-11/12 mx-auto p-8 bg-slate-200 mb-2 border-2 border-gray-900 rounded-md'>
            <p className='font-bold text-xl mb-4'>{question}</p>
            <div className="grid lg:grid-cols-2 text-left ">
                {
                    options.map((option, idx) =>
                        <p key={idx} className='text-base font-semibold text-slate-800 w-full'>
                            <input type="radio" id={option} name="fav_language" className='mr-2' />
                            <label htmlFor={option}>{option}</label>
                        </p>)
                }

            </div>
        </div>
    );
};

export default Question;