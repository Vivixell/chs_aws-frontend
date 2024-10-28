import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./screens/Layout";
import { ProtectRoute } from "./lib/ProtectRoute";

const HomeWrapper = lazy(() => import("./screens/Home"));
const LoginWrapper = lazy(() => import("./screens/Login"));
const RegisterWrapper = lazy(() => import("./screens/Register"));
const SuccessWrapper = lazy(() => import("./screens/Success"));
// Success
export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      {/* <Preloader/> */}
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <HomeWrapper />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<></>}>

                <LoginWrapper />
              </Suspense>
            }
          />
          <Route
            path="success"
            element={
              <Suspense fallback={<></>}>
                <ProtectRoute>
                  <SuccessWrapper />
                </ProtectRoute>

              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<></>}>
                <RegisterWrapper />
              </Suspense>
            }
          />
        </Route>

      </Routes>
    </div>
  );
}
