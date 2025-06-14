import React, { useState, useEffect } from "react";
import { Menu, X, Mountain, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null); // Will store 'USER', 'ADMIN', or null
  const [isLoading, setIsLoading] = useState(true);

  const isAdmin = useSelector(state=>state.role.isAdmin);
  console.log("Admin",isAdmin);
  const isAuthenticated = useSelector(state => state.role.isAuthenticated);

  // API call to get user role
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
    const response = await axios.post(
      "http://localhost:5001/gettokendetails",
      {}, {
        withCredentials: true 
      }
    );

    console.log("User details from token:", response.data);

    if (response.status === 200) {
        setUserRole(response.data.role);
    }
    else
    {
      setUserRole(null);
    }
    
  } catch (err) {
    setUserRole(null);
    console.error("Error fetching token details:", err);
    
  }
  finally{
    setIsLoading(false);
  }
    };

    fetchUserRole();
  }, []);

  const navLinkClass = ({ isActive }) =>
    `${
      isActive ? "text-orange-700" : "text-gray-700"
    } hover:text-orange-600 transition-colors font-medium duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button className="flex items-center space-x-2"
            onClick={() => { navigate("/") }}
          >
            <Mountain className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">NisargPath</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/destinations" className={navLinkClass}>
              Destinations
            </NavLink>

            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>

            <NavLink to="/gallery" className={navLinkClass}>
              Gallery
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            {/* Conditional rendering based on user role */}
            {!isLoading && (
              <>
                {/* Show Book Now button for USER role or null (non-admin users) */}
                {/* {(userRole === 'USER' || userRole === null) && ( */}
                  <button 
                    onClick={() => navigate("/destinations")} 
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
                  >
                    Book Now
                  </button>
                

                {/* Show Manage Treks button for ADMIN role */}
                {( userRole === 'ADMIN' ||isAdmin) && (
                  <>
                    {/* <button 
                      onClick={() => navigate("/destinations")} 
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
                    >
                      Book Now
                    </button> */}
                    <button 
                      onClick={() => navigate("/admin")} 
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Manage Treks</span>
                    </button>
                  </>
                )}
              </>
            )}

            {
                (userRole == null && !isAuthenticated) && (
                   <button 
                      onClick={() => navigate("/signin")}  
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
                    >
                      Sign in 
                    </button>
                )
              }

            {/* Loading state */}
            {isLoading && (
              <div className="w-20 h-10 bg-gray-200 rounded-full animate-pulse"></div>
            )}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/destinations" className={navLinkClass}>
                Destinations
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink to="/gallery" className={navLinkClass}>
                Gallery
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              {/* Mobile conditional rendering */}
              {!isLoading && (
                <>
                  {/* Show Book Now button for USER role or null */}
                  {/* {(userRole === 'USER' || userRole === null) && ( */}
                    <button 
                      onClick={() => navigate("/destinations")}  
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 self-start"
                    >
                      Book Now
                    </button>
                

                  {/* Show both buttons for ADMIN role */}
                  {(userRole === 'ADMIN' || isAdmin) && (
                    <>
                      {/* <button 
                        onClick={() => navigate("/destinations")}  
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 self-start"
                      >
                        Book Now
                      </button> */}
                      <button 
                        onClick={() => navigate("/admin")} 
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl self-start"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Manage Treks</span>
                      </button>
                    </>
                  )}
                </>
              )}

              {
                (userRole == null && !isAuthenticated) && (
                   <button 
                      onClick={() => navigate("/signin")}  
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 self-start"
                    >
                      Sign in 
                    </button>
                )
              }

              {/* Mobile loading state */}
              {isLoading && (
                <div className="w-20 h-10 bg-gray-200 rounded-full animate-pulse self-start"></div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;