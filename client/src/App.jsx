import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Toaster toastOptions={{ className: "font-yantramanav" }} />
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
