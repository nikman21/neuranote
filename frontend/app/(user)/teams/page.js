'use client';
import { useState } from 'react';
import Head from 'next/head';
import { Add as AddIcon } from '@mui/icons-material';

const TeamsPage = () => {
    const [email, setEmail] = useState('');
    const [teamMembers, setTeamMembers] = useState([
        { name: 'John Doe', email: 'johndoe@example.com' },
        { name: 'Jane Doe', email: 'janedoe@example.com' },
    ]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAddMember = () => {
        if (email.trim() !== '') {
            setTeamMembers([...teamMembers, { name: '', email }]);
            setEmail('');
        }
    };

    return (
        <div className="min-h-screen ">
            <Head>
                <title>My Teams - My Productivity App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold text-white">My Teams</h1>
                    <p className="mt-1 text-white">
                        Invite your friends to collaborate with you in a team space.
                    </p>
                </div>

                <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                        <h2 className="text-lg font-medium text-gray-900">Add Team Members</h2>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                                    placeholder="Enter email address"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleAddMember}
                                >
                                    <AddIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul className="divide-y divide-gray-200">
                        {teamMembers.map((member, index) => (
                            <li key={index} className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                    <div className="text-sm text-gray-500">{member.email}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default TeamsPage;
