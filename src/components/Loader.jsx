import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { CiSettings } from "react-icons/ci";
const Loader = ({ type, color, size }) => {
    if (type === "dots") {
        return (
            <ThreeDots
                height={size ? size : "20"}
                width={size ? size : "20"}
                radius="10"
                color={color ? color : "#fff"}
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        );
    }
    return (
        <div
            className="flex items-center top-0 left-0 z-[333330000000] justify-center"
            style={{
                width: "100vw",
                position: "fixed",
                height: "100vh",
                background: "#ffffff7a",
            }}
        >
            <ThreeDots
                height={size ? size : "40"}
                width={size ? size : "40"}
                radius="10"
                color={color ? color : "#fff"}
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loader;