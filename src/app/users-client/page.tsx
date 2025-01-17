"use client"
import React, { useEffect, useState } from 'react'

type User = {
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string
}

const UserClient = () => {
    const [users,setUsers] = useState<User[]>([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if(!response.ok) throw new Error("Failed to Fetch");

                const data = await response.json();
                
                setUsers(data);
            } catch(err){
                setError("Failed to fetch Users");

                if(err instanceof Error){
                    setError(`Failed to fetch users: ${err.message}`)
                }
            } finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[])

    if (loading) return (<div>...Loading</div>)
    if (error) return (<div>{error}</div>)
  return (
    <div>
        {users.map((user) => (
            <li key={user.id} className='bg-blue-300 my-2 text-white list-none' >
                {user.name} - {user.email}
            </li>
        ))}
    </div>
)
}

export default UserClient

