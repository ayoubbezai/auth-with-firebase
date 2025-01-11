import { useState } from "react"
import { auth } from "../components/firebase"
import {  signInWithEmailAndPassword } from "firebase/auth"

import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential)
            const user = userCredential.user
            localStorage.setItem("token", user.accessToken)
            localStorage.setItem("user", JSON.stringify(user))
            nav("/")
        } catch (error) {
            console.log(error)

        }

    }
    return (
        <div>
            <h1>Login page </h1>
            <form onSubmit={handleSubmit} >
                <input
                    type="email"
                    placeholder="enter ur email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="enter ur password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="">Login</button>

            </form>
            <p>need to sign up <Link to="/signup"> create an account</Link></p>

        </div>
    )
}

export default Login