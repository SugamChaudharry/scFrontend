import { BookOpen, LogOut, LogIn, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectCurrentStatus, selectCurrentUser } from "@/app/slices/authSlice";
import SearchBar from "./SearchBar";

const NavBar = ({ searchPlaceHolder }) => {
  const isAuthenticated = useSelector(selectCurrentStatus);
  const user = useSelector(selectCurrentUser)
  const despatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await despatch(logoutUser()).unwarp();
    navigate("/");
  };
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm fixed w-full top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Nav Links */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                SocialCircle
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 font-medium"
              >
                Home
              </Link>
              <Link
                to="/jobs"
                className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 font-medium"
              >
                Jobs
              </Link>
              <Link
                to="/CompanyQuestions"
                className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 font-medium"
              >
                Questions
              </Link>
              {isAuthenticated && (
                <Link
                  to={`/profile/${user?._id}`}
                  className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 font-medium"
                >
                  Profile
                </Link>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar searchPlaceHolder={searchPlaceHolder} />
          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2">
              {isAuthenticated ? (
                <Link
                  onClick={() => handleLogout()}
                  className="flex gap-2 items-center justify-center"
                  to={"/"}
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Link>
              ) : (
                <Link
                  className="flex gap-2 items-center justify-center"
                  to={"/login"}
                >
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
