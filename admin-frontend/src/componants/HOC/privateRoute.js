import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Category } from "../../containers/Category";

function PrivateRoute(props) {
  const token = window.localStorage.getItem("token");
  if (token) {
    return <Route path={props.to} element={props.componant} />;
  } else {
    return <Navigate to="/signin" />;
  }
}

function RootRoute() {
  const token = window.localStorage.getItem("token");
  if (token) {
    return (
      <Routes>
        <Route path="" element={<Category />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="" element={<PrivateHome />} />
      </Routes>
    );
  }
}

function PrivateHome() {
  const token = window.localStorage.getItem("token");

  if (token) {
    return (
      <Routes>
        <Route path="/home" element={<Category />} />
      </Routes>
    );
  } else {
    return <Navigate to="/signin" />;
  }
}



function PrivateCategories() {
  const token = window.localStorage.getItem("token");

  if (token) {
    return (
      <Routes>
        <Route path="/categories" element={<Category />} />
      </Routes>
    );
  } else {
    return <Navigate to="/signin" />;
  }
}




export {
  PrivateHome,
  PrivateCategories,
  PrivateRoute,
  RootRoute,
};