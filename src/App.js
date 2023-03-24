import React from 'react';
import {Navbar, Usergroups} from './components';
import {Header, Features, Footer, Tracker} from './containers';
import './App.css';

const App = () => {
    return (
        <div className='App'> 
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
           <Features />
           <Usergroups />
           <Tracker />
            <Footer />
           
        </div>
    )
}

export default App
