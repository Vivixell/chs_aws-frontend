
import { ClearUserInfo } from "@/features/auth/authSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeComponent = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(
        (store) => store.auth
    );

    const handleLogOut = () => {
        dispatch(ClearUserInfo())
        window.location.reload()
    }
    return (
        <div className="w-full min-h-screen relative h-[100vh] flex items-center justify-center">
            <div className="z-40 w-full fixed top-0 left-0 h-40 flex items-center">
                <div className="w-full px-4 flex gap-8 items-center justify-between lg:gap-12 max-w-[1300px] mx-auto lg:w-[95%]">
                    <Link to={'/'} className="text-5xl max-w-[900px] mx-auto text-center family2 text-white">
                        CHS
                    </Link>
                    {
                        currentUser ? <div className="w-full flex items-center justify-end gap-8">
                            <button className="px-4 md:px-8 py-3 md:py-4 text-base bg-white hover:opacity-50 cursor-pointer rounded-full text-dark">Log Out</button>
                            <Link to={'/success'} className="px-4 md:px-8 py-3 md:py-4 text-base border-white hover:opacity-50 cursor-pointer rounded-full text-white border">Visit your Profile</Link>


                        </div> : <div className="w-full flex items-center justify-end gap-8">
                            <Link to={'/register'} className="px-4 md:px-8 py-3 md:py-4 text-base bg-white hover:opacity-50 cursor-pointer rounded-full text-dark">Get Started</Link>
                            <Link to={'/login'} className="px-4 md:px-8 py-3 md:py-4 text-base border-white hover:opacity-50 cursor-pointer border text-white rounded-full text-dark">Sign In</Link>
                        </div>
                    }

                </div>
            </div>
            <img src="/future.jpg" alt="" className="w-full h-full absolute object-cover" />
            <div className="w-full h-full absolute z-10 bg-[rgba(0,0,0,.5)]"></div>
            <div className="w-full px-4 pt-12 flex gap-8 z-20 items-center justify-center flex-col lg:gap-12 max-w-[1200px] mx-auto lg:w-[90%]">
                <h2 className="text-4xl lg:text-7xl max-w-[900px] mx-auto text-center family2 text-white">
                    Cloud Health Concepts being Reconceptualized
                    <span className="text-lg  lg:text-2xl text-center text-gray-300 pt-4 block max-w-[600px] lg:mx-auto regular">
                        Centralise Database, AI assistance and Health reconmendation at your fingertips
                    </span>
                </h2>
                {
                    currentUser ? <div className="w-full flex items-center justify-center gap-8">
                        <button onClick={handleLogOut} className="px-4 md:px-8 py-3 md:py-4 text-base bg-white hover:opacity-50 cursor-pointer rounded-full text-dark">Log Out</button>
                        <Link to={'/success'} className="px-4 md:px-8 py-3 md:py-4 text-base border-white hover:opacity-50 cursor-pointer rounded-full text-white border">Visit your Profile</Link>


                    </div> : <div className="w-full flex items-center justify-center gap-8">
                        <Link to={'/register'} className="px-4 md:px-8 py-3 md:py-4 text-base bg-white hover:opacity-50 cursor-pointer rounded-full text-dark">Get Started</Link>
                        <Link to={'/login'} className="px-4 md:px-8 py-3 md:py-4 text-base border-white hover:opacity-50 cursor-pointer border text-white rounded-full text-dark">Sign In</Link>
                    </div>
                }

            </div>
        </div>
    );
};


export default HomeComponent;
