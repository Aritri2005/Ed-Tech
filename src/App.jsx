import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/main/Main";
import Home from "./Pages/Home";
import Practice from "./Pages/Practice";
import Subject from "./Pages/Subject";

// Layout wrapper to conditionally show Navbar/Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/"; // hide on root

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/subject" element={<Subject />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
