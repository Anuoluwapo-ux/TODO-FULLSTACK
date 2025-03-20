import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Car = () => {

    const [users, setUsers] = useState([]);

    const getCar = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data);
        setUsers(data)
    }

    useEffect(()=>{

        getCar()
    },[])


    return (
        <div style={{ color: "white" }}>
          <div>
            {users.map((user,i)=>(
                <div>
                    <h2>{user.name}</h2>
                    <h4>{user.email}</h4>
                    <div>
                        <h4>Address</h4>
                        <p>{user.address.city}  {user.address.street}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
    )
}

export default Car
