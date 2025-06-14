import React, { useState } from 'react';
import { Phone, Lock, Eye, EyeOff, Mountain } from 'lucide-react';
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAdmin, setIsAuthenticated } from '../Features/roleSlice.js';
import { toast } from 'react-toastify';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    contactNumber: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  ///
  const location = useLocation();
  const fromObj   = location.state?.from; 
  ///
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log('Sign up data:', formData);

    const response = await axios.post("http://localhost:5001/user/signin", formData,
      {
            withCredentials : true
        },
        {
      headers: {
        "Content-Type": "application/json",  // fixed typo: appliationType -> Content-Type
      }
    });

    console.log(response.data);
    if (response.status === 200) {
      toast.success("Sign in successful!");
      // Optionally redirect or reset form
      dispatch(setIsAuthenticated(true));
      console.log("role outside:", response.data.role);
      if(response.data.role === 'ADMIN')
      {
        console.log("role inside:", response.data.role);
        await Promise.all([
          dispatch(setIsAdmin(true)),
          // Small delay to ensure state updates
          new Promise(resolve => setTimeout(resolve, 100))
        ]);
      }
      console.log(fromObj);
      if(fromObj && fromObj.pathname && fromObj.pathname === "/signup"){
        navigate("/");
      }
      else{
        navigate(-1);
      }
      
      
    } else {
      toast.error("Something went wrong. Please try again.");
    }

  } catch (error) {
    toast.error("Sign In failed!");

    // Show server-side error if available
    if (error.response && error.response.data && error.response.data.message) {
      console.log(`Error: ${error.response.data.message}`);
    } else {
      console.log("Network error or server not responding.");
    }
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center py-12 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Mountain className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">NisargPath</span>
            </div>
            <h2 className="text-xl font-semibold text-orange-100">Welcome Back</h2>
            <p className="text-orange-200 text-sm mt-1">Continue your trekking journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
            {/* Contact Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => navigate("/signup")}
                  type="button"
                  className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Additional Options */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <p className="text-gray-600 text-sm mb-4">Quick Access</p>
          <div className="space-y-3">
            <button 
            onClick={() =>{navigate("/destinations")}}
            className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-2 rounded-lg font-medium transition-all duration-300">
              Browse Treks as Guest
            </button>
            <button 
            onClick={() => {navigate("/contact")}}
            className="w-full border-2 border-gray-300 text-gray-600 hover:bg-gray-50 py-2 rounded-lg font-medium transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;