import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Layout, Home, Error, Account } from "./pages";

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
