import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const stats = useLoaderData();
    const statisticData = stats.data
    // console.log(statisticData)
    return (
        <div className='flex justify-center items-center my-40 mx-10'>

            <div className="">
                <LineChart width={350} height={350} data={statisticData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistic;