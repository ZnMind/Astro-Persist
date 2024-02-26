import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';

import { $users, addUser, deleteUser } from '../store/users.js';
import { $persistentUsers, addPersistentUser, deletePersistentUser } from '../store/persistentUsers.js';

import UserItem from './UserItem';

const User = () => {
    const [user, setUser] = useState({ 'First': '', 'Last': '', 'Department': '' })

    const users = useStore($users);
    const persistentUsers = useStore($persistentUsers);

    const handleChange = (event, key) => {
        let updatedValue = {}
        updatedValue[key] = event.target.value;

        setUser(user => ({
            ...user,
            ...updatedValue
        }));
    }

    const handleUpdate = () => {
        addUser(user);
    }

    const handleDelete = (object) => {
        deleteUser(object);
    }

    const handlePersist = () => {
        addPersistentUser(user);
    }

    const handlePersistDelete = (object) => {
        deletePersistentUser(object);
    }

    return (
        <>
            <div className='flex flex-col'>
                <div className='mb-4 lg:[&:nth-child()]:ml-4'><input className='text-black' onChange={(event) => handleChange(event, 'First')}></input><label className='ml-4'>First Name</label></div>
                <div className='mb-4'><input className='text-black' onChange={(event) => handleChange(event, 'Last')}></input><label className='ml-4'>Last Name</label></div>
                <div className='mb-4'><input className='text-black' onChange={(event) => handleChange(event, 'Department')}></input><label className='ml-4'>Department</label></div>
            </div>
            <div className='mb-8 mt-4 border-2 border-white p-2 rounded-lg flex flex-col items-start'>
                <div className='w-full'>
                {Object.keys(user).map((element, i) => (
                    <div className='flex' key={i}><div className='w-1/4'>{`${Object.keys(user)[i]} Name: `}</div><div className='text-green-300 ml-8'>{user[element]}</div></div>
                ))}
                </div>
            </div>
            <div className='flex justify-center'>
            <button className='border-2 border-green-300 rounded-lg p-2 mr-4' onClick={handleUpdate}>Add User</button>
            <button className='border-2 border-green-300 rounded-lg p-2 ml-4' onClick={handlePersist}>Persist User</button>
            </div>
            

            <div className='border-t-2 border-b-2 pt-4 border-gray-500 mt-8'>
                {
                    users.map((element, i) => (
                        <UserItem data={element} click={() => handleDelete(element)} />
                    ))
                }
                {
                    persistentUsers.map((element, i) => (
                        <UserItem data={element} click={() => handlePersistDelete(element)} />
                    ))
                }
            </div>
        </>
    )
}

export default User