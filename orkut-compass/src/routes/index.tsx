import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;