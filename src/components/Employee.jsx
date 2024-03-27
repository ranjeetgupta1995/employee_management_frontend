import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { SingleEmployee } from './SingleEmployee';

export const Employee = () => {
    const [data, setData] = useState([]);
    // const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://weary-jewelry-duck.cyclic.app/employees", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.allEmployee)
            setData(res.allEmployee)
            // setCount(res.allPosts.length)
        })
        .catch(err => console.log(err))
    }, []);


    return (
        <div>
            <Link to='/addemployee'>
                <button>Add Employees</button>
            </Link>
            <button>Logout</button>
            <h1>Employee data</h1>
            {
                data.map((el) => (
                    <SingleEmployee 
                    key={el.id}
                    first_name={el.first_name}
                    last_name={el.last_name}
                    email={el.email}
                    salary={el.salary}
                    />
                ))
            }
        </div>
    )
}