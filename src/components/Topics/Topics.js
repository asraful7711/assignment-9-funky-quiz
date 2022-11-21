import React, { useEffect, useState } from 'react';
import Topic from '../Topic/Topic';

const Topics = () => {
    const [topics, setTopic] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setTopic(data.data))

    }, [])
    return (
        <div className=' bg-slate-900' >
            <div className='w-3/4 mx-auto grid lg:grid-cols-2 gap-10 lg:p-24 py-5 text-white'>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;