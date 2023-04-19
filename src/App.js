import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Layout, Home, Error, Account, EditAccount, TestPage, History,
   ShareGoal, Login, Signup, Reset, Dashboard } from "./pages";

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Error />} />
              <Route path="/account" element={<Account />} />
              <Route path="/account/edit" element={<EditAccount />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/history" element={<History />} />
              <Route path="/sharegoal" element={<ShareGoal />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

// const App = () => {
//     return (
//         <div className='App'>
//             <div className='gradient__bg'>
//                 <Navbar />
//                 <Header />
//             </div>
//            <Features />
//            <Usergroups />
//            <Tracker />
//             <Footer />
//
//         </div>
//     )
// }


export default App
