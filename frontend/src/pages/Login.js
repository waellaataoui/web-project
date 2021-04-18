import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setUser } from "../store/authSlice"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
                // todo: logout user before loggin in again

        try {
            const res = await axios.post("/login/jobseeker", {
                username: email,
                password
            })
            dispatch(setUser(res.data.user))
            history.push("/")

        } catch (error) {
            console.log(error.response.data);
            setError(error.response.data.message)
        }

    }
    return (
        <div>
            login
            <form onSubmit={submit}>
                {error && <p> {error} </p>}
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
                <input onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" ></input>
                <button type="submit"> login</button>
            </form>
        </div>
    )
}
export default Login;