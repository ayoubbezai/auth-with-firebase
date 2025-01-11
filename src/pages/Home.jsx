import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login");
  };

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome to Home, {user?.displayName || "User"}!
        </h1>
        <div className="space-y-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
          <Link
            to="/profile"
            className="w-full inline-block text-center text-blue-600 font-medium hover:underline"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
