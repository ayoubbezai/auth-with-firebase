import { useState } from "react"
import { auth } from "../components/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
            <h1>Signup page </h1>
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
                <button type="submit" className="">Signup</button>

            </form>
            <p>need to sign up <Link to="/login"> have an account</Link></p>


        </div>
    )
}

export default Signup