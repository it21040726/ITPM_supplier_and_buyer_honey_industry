import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Signin } from "./containers/Signin/signin";
import { Signup } from "./containers/Signup/signup";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "./actions";
import { Category } from "./containers/Category";
import SellerPosts from "./containers/SellerPosts";
import BuyerPosts from "./containers/BuyerPosts";
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/categories" element={<Category />} />
        <Route path="/sellerposts" element={<SellerPosts />} />
        <Route path="/buyerposts" element={<BuyerPosts />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
