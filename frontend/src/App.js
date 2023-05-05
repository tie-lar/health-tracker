import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Layout, Home, Error, Account, EditAccount, TestPage, History,
   ShareGoal, Login, Signup, Reset, Dashboard, RecordExercise, RecordFood,
   DashboardLayout, 
   Wontrack, 
   Tutorial,
   Groups,
   Help,
   Settings,
   Workouts,
   Profile, TestPageGet} from "./pages";

import './App.css';

const App = () => {
    return (
        <BrowserRouter>

          <Routes>
            <Route>
              <Route path="*" element={<Error />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/groups" element={<Groups />} />
               
            </Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Error />} />
              <Route path="/account" element={<Account />} />
              <Route path="/account/edit" element={<EditAccount />} />
              <Route path="/test" element={<TestPage />} />

              <Route path="/test2" element={<TestPageGet />} />

              <Route path="/history" element={<History />} />
              <Route path="/sharegoal" element={<ShareGoal />} />
              <Route path="/record/exercise" element={<RecordExercise />} />
              <Route path="/record/food" element={<RecordFood />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/wontrack" element={<Wontrack />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/" element={<DashboardLayout />}>
              <Route path="/account" element={<Account />} />
             
             
              <Route path="/help" element={<Help />} />
              <Route path="/settings" element={<Settings />} />
           
              
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
