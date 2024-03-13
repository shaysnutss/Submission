import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import authService from './services/authService';


export default function Example() {
  const [users, setUsers] = useState([]); 

  useEffect(() => { 
    const fetchAccounts = async () => {
      try {
        const { data } = await authService.getAllAccounts(); 
        setUsers(data); 
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div >
        <Navigation />
        <div className="w-full max-w-5xl px-4 sm:px-6 mt-10">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">Applicant Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
        </div>
        <div className="w-full max-w-5xl px-4 sm:px-6 pl-20">
            
            <div className="mt-6 border-t border-gray-100">
                {users.map((user) => ( 
                <dl className="divide-y divide-gray-100" key={user.id}> 
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Role</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.role}</dd>
                    </div>
                </dl>
                ))}
            </div>
        </div>
    </div>
  );
}