import React from "react";
import {
    BrowserRouter,
    Route,
    Routes 
} from 'react-router-dom';
import HomePage from './Pages/Home Page/HomePage';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blog/Blog';
import Experience from './Pages/Experience/Experience';
import Contact from './Pages/Contact/Contact';
const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={ <HomePage /> }/>    
                    <Route path='/about_me' element={ <AboutMe/> } />         
                    <Route path='/blog' element={ <Blog/> } />
                    <Route path='/experience' element={ <Experience/> } />
                    <Route path='/contact' element={ <Contact/> }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;