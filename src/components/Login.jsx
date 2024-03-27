import React, {useState} from 'react';
import './login.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

export const Login = () => {

    const [heading, setHeading] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

    //to handle signup
    const handleSignup = () => {
        const payload = {
            email,
            password,
            confirm_password
        }

        if(password !== confirm_password){
            alert('Password and confirm password does not match!')
        }

        fetch("https://weary-jewelry-duck.cyclic.app/users/register", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(err => console.log(err))
    }

    // to handle login
    const handleLogin = () => {
        const payload = {
            email,
            password
        }

        fetch("https://weary-jewelry-duck.cyclic.app/users/login", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.token)
        },
        <Navigate to='' />
        )
        .then(err => console.log(err))
    }

    return (
        <Tabs className='tabs'>
            <div className='container'>
                {
                    (heading)? <h1>Login Form</h1> : <h1>Signup Form</h1>
                }
                <TabList className='tablist' >
                    <Tab>
                        <button id='btn' onClick={() => setHeading(true)}>Login</button>
                    </Tab>
                    <Tab>
                        <button id='btn' onClick={() => setHeading(false)}>Signup</button>
                    </Tab>
                </TabList>
                <br />
                <TabPanels>
                    <TabPanel className='tabpanel'>
                        <div className='login'>
                            <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            <p style={{color: "blue"}}>Forgot Password</p>

                            <button onClick={handleLogin}>Login</button>

                            <p style={{textAlign: "center"}}>Not a member? <span style={{color: "blue"}}>signup now</span></p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <input type='confirm_password' placeholder='Confirm password' value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <br />
                        <button onClick={handleSignup}>Signup</button>
                    </TabPanel>
                </TabPanels>
            </div>
        </Tabs>
    )
};