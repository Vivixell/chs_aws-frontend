
import { Outlet } from "react-router-dom";
import React from "react";
const Layout = () => {
  return (
    <>
      {/* <AnimatePresence mode="wait">
        {loginmodal && (
          <LoginModal registermodal={registermodal} modal={loginmodal} />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {registermodal && <RegisterModal modal={registermodal} />}
      </AnimatePresence> */}

      <div className="w-full">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
