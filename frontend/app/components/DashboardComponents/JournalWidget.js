import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const JournalWidget = () => {
    const [prompt, setPrompt] = useState('');
    const router = useRouter();

    const generatePrompt = () => {
        // Replace with your own list of prompts
        const prompts = [
            'What was the highlight of your day?',
            'What did you learn today?',
            'What are you grateful for today?',
            'What is something you want to improve on?',
            'What made you happy today?',
            'What made you feel proud today?',
            'What is something you want to accomplish tomorrow?',
        ];
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        setPrompt(randomPrompt);
    };

    const handleClick = () => {
        router.push('/createJournal');
    };

    return (
        <div className='bg-gray-800 rounded-lg p-6 text-white'>
            <h2 className='text-2xl font-bold mb-4'>Journal Widget</h2>
            <p className='text-lg mb-4 text-white'>Prompt: {prompt}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-5' onClick={generatePrompt}>Generate Prompt</button>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Create Journal</button>
        </div>
    );
};

export default JournalWidget;
