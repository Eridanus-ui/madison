import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import LoginPage from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Toaster toastOptions={{ className: "font-yantramanav" }} />
        <Routes>
          <Route path="/sign-in" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Profile />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
