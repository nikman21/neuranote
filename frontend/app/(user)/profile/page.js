'use client';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ProfilePage = () => {

    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        console.log('Stored token: ', storedToken);
        setToken(storedToken);
    }, []);

    if (!token) {
        console.error('Token not available.');
        return;
    }

    const decodedToken = jwt_decode(token);
    const username = decodedToken.username;
    const email = decodedToken.email;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>My Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                        <div className="flex justify-center">
                            <div className="rounded-full h-40 w-40 flex items-center justify-center overflow-hidden">
                                <h1 className='text-2xl font-bold'>{username}</h1>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-center text-2xl font-bold">John Doe</h2>
                            <p className="text-center text-gray-600">Software Developer</p>
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between">
                                <div className="text-gray-600">Email:</div>
                                <div className="text-gray-900">{email}</div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="text-gray-600">Phone:</div>
                                <div className="text-gray-900">(123) 456-7890</div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="text-gray-600">Location:</div>
                                <div className="text-gray-900">San Francisco, CA</div>
                            </div>

                            <div className="flex justify-between mt-2">
                                <div className="text-gray-600">Website:</div>
                                <div className="text-blue-600 hover:underline cursor-pointer">johndoe.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
