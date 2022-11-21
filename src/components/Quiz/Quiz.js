import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions
    // console.log(questions)
    return (
        <div className='bg-teal-900 pb-12'>
            <Header></Header>
            <h1 className='font-bold text-2xl text-cyan-200 py-7'>Quiz of <span className='text-lime-300'>{quiz.data.name}</span></h1>
            {
                questions.map(problems => <Question key={problems.id} problems={problems}></Question>)
            }
        </div>
    );
};

export default Quiz;