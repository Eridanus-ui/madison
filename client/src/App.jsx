import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import React, { Suspense, lazy } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Spinner from "./components/Spinner";

function App() {
  const Home = lazy(() => import("./pages/Profile"));
  const SignIn = lazy(() => import("./pages/Login"));

  return (
    <>
      <Router>
        <Toaster toastOptions={{ className: "font-yantramanav" }} />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
