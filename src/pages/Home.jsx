import { useNavigate } from "react-router-dom"
import { auth } from "../components/firebase"
import { signOut } from "firebase/auth";



const Home = () => {
    const nav = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    const handleLogout = async () => {
        await signOut(auth)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        nav("/login")

    }

    return (
        <div>
            <h1>welcome to home {user.email} </h1>
            <button onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default Home