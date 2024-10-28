//  
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginFormInputData } from "@/constants/data/formdata";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "@/features/auth/authReducer";
import Loader from "./Loader";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loginisSuccess, loginisLoading, currentUser } = useSelector((store) => store.auth);
  const [formvalue, setFormValue] = useState({
    email: "",
    hashedPassword: "",
  });

  const handleFormChange = (e) => {
    setFormValue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmision = (e) => {
    e.preventDefault();
    dispatch(LoginUser(formvalue));
  };
  useEffect(() => {
    if (loginisSuccess && currentUser) {
      const timer = setTimeout(() => {
        navigate('/success')
      }, 3000)
      return () => clearTimeout(timer)
    }

  }, [loginisSuccess, currentUser])
  return (
    <LoginComponentStyles
    >
      <div className="z-40 w-full fixed top-0 left-0 h-40 flex items-center">
        <div className="w-full px-4 flex gap-8 items-center justify-between lg:gap-12 max-w-[1300px] mx-auto lg:w-[95%]">
          <Link to={'/'} className="text-5xl max-w-[900px] mx-auto text-center family2 text-white">
            CHS
          </Link>
          <div className="w-full flex items-center justify-end gap-4 md:gap-8">
            <Link to={'/register'} className="px-4 md:px-8 py-3 md:py-4 text-base bg-white hover:opacity-50 cursor-pointer rounded-full text-dark">Get Started</Link>
            <Link to={'/login'} className="px-4 md:px-8 py-3 md:py-4 text-base border-white hover:opacity-50 cursor-pointer border text-white rounded-full text-dark">Sign In</Link>

          </div>
        </div>
      </div>
      <img src="/future.jpg" alt="" className="w-full h-full absolute object-cover" />
      <div className="w-full h-full absolute z-10 bg-[rgba(0,0,0,.5)]"></div>

      <div
        className="guestComponentCard z-40 mt-12"
      >
        <div className="w-full mx-auto relative flex gap-8 flex-col">
          <div className="w-full top-0 left-0 relative px-8 flex items-center justify-between">
            <h3 className="text-3xl font-booking_font4 family2">
              Sign In
              <span className="block text-sm font-normal max-w-[250px] pt-1 regular">
                Login to your account and check out your bookings
              </span>
            </h3>
          </div>
          <div className="w-full overflow-auto h-[350px]  flex">
            <form
              onSubmit={handleFormSubmision}
              className="w-[90%] mx-auto p-4 pb-8 flex flex-col gap-6"
            >
              <div className="w-full flex flex-col gap-2">
                {LoginFormInputData?.map((input, index) => {
                  return (
                    <label
                      key={index}
                      htmlFor={input.label}
                      className="text-sm font-booking_font flex flex-col gap-2 text-dark"
                    >
                      <span className="text-dark">{input.label}</span>
                      <input
                        className="w-full rounded-md inputs text-dark
                           font-normal text-sm"
                        required={true}
                        name={input?.name}
                        id={input.label}
                        value={formvalue[input.name]}
                        type={input.type}
                        placeholder={input.label}
                        onChange={handleFormChange}
                      ></input>
                    </label>
                  );
                })}
              </div>
              <div className="w-full flex items-center justify-center flex-col gap-3">
                <button
                  data-test="loginComponent_button"
                  type="submit"
                  disabled={loginisLoading}
                  className="p-3 px-8 hover:opacity-[.5] text-[#fff] flex btn items-center justify-center w-full cursor-pointer 
                   bg-[#000] rounded-md regular"
                >
                  {loginisLoading ? (
                    <div className="w-full flex justify-center items-center gap-4">
                      <Loader type="dots" /> Login in progress
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
                <div className="w-full flex items-center justify-start gap-2">
                  <span className="text-sm font-normal text-dark">
                    <span className="text-grey">Not yet a Member?</span>{" "}
                    <Link

                      style={{ textDecoration: "underline" }}
                      className="font-booking_font_bold family2 cursor-pointer"
                      to={"/register"}
                    >
                      Sign Up
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginComponentStyles>
  );
};
const LoginComponentStyles = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 4900;
  align-items: center;
  justify-content: center;
  top: 0;
  .option {
    width: 100%;
    position: relative;
    text-align: center;
    padding: 0 1.4rem;
    font-size: 15px;
    &::after {
      width: 45%;
      height: 0.2px;
      content: "";
      background-color: rgba(0, 0, 0, 0.1);
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      width: 45%;
      height: 0.4px;
      content: "";
      background-color: rgba(0, 0, 0, 0.1);
      right: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .guestComponentCard {
    max-width: 420px;
    min-width: 400px;
    display: flex;
    height: 580px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    gap: 2rem;
    border-radius: 20px;
    position: relative;
    @media (max-width: 580px) {
      max-width: 90%;
      min-width: 90%;
    }
    .cross {
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: #d9d8d8;
      }
      svg {
        font-size: 20px;
      }
    }
    .deleteCardBottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2rem;
      gap: 1rem;
      button {
        padding: 1rem 2rem;
        border: none;
        /* font-size: 1.4rem; */
        font-weight: 400;
        background: var(--grey-2);
        color: #fff;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
        text-transform: none;
        &:hover {
          background: var(--grey-1);
          color: var(--text-color);
          box-shadow: 0 0 0 6px #e7e7e9;
          transition: all 0.3s;
        }
        &.deleteBtn {
          background: var(--blue-1);
          &:hover {
            opacity: 0.8;
            color: #fff;
          }
        }
      }
    }
  }
`;

export default LoginComponent;
