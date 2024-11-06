import React, { useState } from 'react';
import Hoc from '../../components/HOC';
import { useNavigate } from "react-router-dom";

// import unisoftlogo from '../../../Assets/unisoftlogo.jpeg';
// import profile from "../Assets/profileImage.jpeg"

const EmployeeProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        preference: 'Dark Mode',
        phone: '+1234567890',
        address: '123 Main St, Springfield, USA',
        // avatar: 'https://via.placeholder.com/150',  
        // bgIm//age: 'https://via.placeholder.com/800x200',  
    });
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 mt-4 bg-white shadow-md rounded-lg h-[80vh] no-scrollbar overflow-y-scroll">
            <div className="relative">
                <img src={require("../../Assets/profileImage.jpeg")} alt="Background" className="w-full h-72" />
                <div className="absolute -bottom-16 right-4">
                    <img src={require("../../Assets/avatar.jpeg")} alt="Avatar" className="w-32 h-32  rounded-full border-4 border-white shadow-lg " />
                </div>
            </div>
            <div className="mt-16">
                {isEditing ? (
                    <div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={profile.fullName}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Preference</label>
                            <input
                                type="text"
                                name="preference"
                                value={profile.preference}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={profile.phone}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={profile.address}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Change Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="New Password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{profile.fullName}</h2>
                        <p className="mb-2"><strong>Email:</strong> {profile.email}</p>
                        <p className="mb-2"><strong>Preference:</strong> {profile.preference}</p>
                        <p className="mb-2"><strong>Phone:</strong> {profile.phone}</p>
                        <p className="mb-2"><strong>Address:</strong> {profile.address}</p>
                        <button
                            onClick={handleEditToggle}
                            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                        >
                            Edit Profile
                        </button><br/><br/>
{/* 
                        <button
                            onClick={() => navigate("/updatePassword")}
                            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                        >
                            Update Password
                        </button> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hoc(EmployeeProfile);
