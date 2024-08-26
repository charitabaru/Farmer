import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import AuthForm from "./pages/authform";


const App = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="signin" element={<AuthForm type="sign-in" />} />
        <Route path="signup" element={<AuthForm type="sign-up" />} />
      </Route>
    </Routes>

  );
};

export default App;
