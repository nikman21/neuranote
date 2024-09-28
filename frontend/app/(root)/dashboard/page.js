'use client';
import React, { useState, useEffect, createRef } from 'react';
import jwt_decode from 'jwt-decode';
import Head from 'next/head';
import Calendar from 'react-calendar';
import { getTodos } from '../../utils/todos/api';
import { useRouter } from 'next/navigation';
import TodoWidget from '../../components/DashboardComponents/TodoWidget';
import JournalWidget from '../../components/DashboardComponents/JournalWidget';
import { Responsive, WidthProvider } from 'react-grid-layout';
import QuickNoteWidget from '@/app/components/DashboardComponents/QuickNoteWidget';


const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [token, setToken] = useState('');
  const [todos, setTodos] = useState([]);
  const router = useRouter();


  useEffect(() => {
    if (token) {
      getTodos(token)
        .then((userTodos) => {
          setTodos(userTodos);
        })
        .catch((error) => {
          console.error('Error fetching user todos:', error);
        });
    }
  }, [token]);

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

  

  


  return (
    <div className="h-screen ">
      <Head>
        <title>Productivity App</title>
      </Head>
      <div className="flex flex-1">
        <div className="w-full md:w-3/4 shadow-lg rounded-lg overflow-hidden">
          <main className="p-4">
            <h1 className="text-gray-800 text-3xl font-bold mb-5">Welcome {username}</h1>
            <h2 className="text-gray-600 text-lg mb-3">Today's date is: {date.toLocaleDateString()}</h2>
            <Calendar
              className="bg-gray-200 p-10 rounded-lg shadow-lg"
              onChange={setDate}
              locale="en-US"
              value={date}
            />
            <div className="mt-8 flex gap-10">
              <TodoWidget token={token} allTodos={todos} router={router} />
              <JournalWidget />
            </div>
            <QuickNoteWidget />
          </main>
        </div>
      </div>
    </div>
  );
}
