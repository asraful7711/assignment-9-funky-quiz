import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ problems }) => {
    const { question, options, correctAnswer, } = problems;
    // console.log(problems)
    const checkAnswer = (selected) => {
        const correctAns = correctAnswer;
        if (selected === correctAns) {
            toast.success('Your answer is correct')
        } else {
            toast.error('Your answer is wrong')
        }
    }
    const handleCorrect = (ans) => toast(ans);
    return (
        <div className='lg:w-3/6 w-11/12 mx-auto lg:p-8 p-2 bg-slate-200 mb-2 border-2 border-gray-900 rounded-md'>
            <div className="flex items-center justify-center">
                <p className='font-bold text-xl mb-4 mr-3'>{question}</p>
                <button onClick={() => handleCorrect(correctAnswer)}>
                    <EyeIcon className="h-6 w-6 hover:text-blue-500" />
                </button>
                <ToastContainer autoClose={400} />
            </div>
            <div className="grid lg:grid-cols-2 gap-5 text-left">
                {
                    options.map((option, idx) =>
                        <button onClick={() => checkAnswer(option)} key={idx} className='text-base font-semibold text-slate-800 border-2 hover:text-cyan-400'>
                            <input type="radio" id={option} name="fav_language" className='mr-2 ' />
                            <label htmlFor={option}>{option}</label>
                        </button>)
                }

            </div>
        </div>
    );
};

export default Question;