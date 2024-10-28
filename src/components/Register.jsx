
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import AnimateText from "@/animations/AnimateText";
import { useDispatch, useSelector } from "react-redux";
import { RegisterFormInputData } from "@/constants/data/formdata";
import { RegisterUser } from "@/features/auth/authReducer";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const RegisterModal = () => {
  const dispatch = useDispatch();
  const { registerisSuccess, registerisLoading } = useSelector(
    (store) => store.auth
  );
  const [formvalue, setFormValue] = useState({
    name: "",
    username: "",
    email: "",
    hashedPassword: "",
  });
  const noEntry =
    formvalue.email === "" ||
    formvalue.hashedPassword === "" ||
    formvalue.username === "" ||
    formvalue.name === "";
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    setFormValue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmision = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(formvalue));
  };

  return (
    <RegisterModalStyles
      className="w-full h-screen"
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
        className="guestModalCard z-40 mt-12"
      >
        <div className="w-full mx-auto flex flex-col">
          <div className="w-full sticky top-0 left-0 p-8 px-8 flex  items-center justify-between">
            <h3 className="text-2xl md:text-3xl family2">
              Sign Up
              <span className="block text-sm regular">
                Register to your account and check out your bookings
              </span>
            </h3>

          </div>
          <div className="w-full pb-6 flex">
            <form
              onSubmit={handleFormSubmision}
              className="w-[90%] mx-auto overflow-y-scroll md:px-4 py-4 pb-4 grid md:grid-cols-1 gap-4"
            >
              <div className="w-full grid sm:grid-cols-2 gap-4">
                {RegisterFormInputData?.map((input, index) => {
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
              <div className="w-full mt-6 flex items-center justify-center flex-col gap-3">
                <button
                  data-test="registermodal_button"
                  type="submit"
                  disabled={registerisLoading || noEntry}
                  className="p-4 px-8 hover:opacity-[.5] text-[#fff] flex items-center justify-center w-full cursor-pointer 
                   bg-[#000] rounded-[40px] regular btn"
                >
                  {registerisLoading ? (
                    <div className="w-full flex justify-center items-center gap-4">
                      <Loader type="dots" /> Registration in progress
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </button>
                <div className="w-full flex items-center justify-start gap-2">
                  <span className="text-sm font-normal text-dark">
                    Already a Member?{" "}
                    <Link
                      style={{ textDecoration: "underline" }}
                      className="family2 font-booking_font_bold cursor-pointer"
                      to={"/login"}
                    >
                      Sign In
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </RegisterModalStyles>
  );
};
const RegisterModalStyles = styled.div`
  /* width: 100vw;
  height: 100vh; */
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
  .guestModalCard {
    max-width: 600px;
    min-width: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    height: 620px;
    gap: 2rem;
    border-radius: 20px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);
    position: relative;
    @media (max-width: 580px) {
      max-width: 90%;
      min-width: 90%;
      height: 520px;
    }
    .cross {
      width: 3rem;
      height: 3rem;
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
        padding: 1.2rem 2rem;
        border: none;
        font-size: 1.3rem;
        font-weight: 400;
        background: var(--grey-2);
        color: #fff;
        outline: none;
        border-radius: 40px;
        cursor: pointer;
        text-transform: none;
        &:hover {
          background: var(--grey-1);
          color: var(--text-color);
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

export default RegisterModal;
