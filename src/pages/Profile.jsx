import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../components/firebase';
import { Link } from 'react-router-dom';

const Profile = () => {
    const nav = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        nav("/login");
    };

    return (
        <div className="flex  items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Welcome, {user?.displayName || "User"}!
                </h1>
                <h2 className="text-xl text-gray-600 mb-4">
                    Email: <span className="text-blue-600">{user?.email}</span>
                </h2>
                <div className="flex flex-wrap justify-center items-center mt-6">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
                    >
                        Logout
                    </button>
                    <Link
                        to="/"
                        className="text-blue-600 hover:underline font-medium self-center"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
