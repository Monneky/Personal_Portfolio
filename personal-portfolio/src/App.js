import React from "react";
import './general.css';
import {
    BrowserRouter,
    Route,
    Routes 
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blog/Blog';
import Experience from './Pages/Experience/Experience';
import Contact from './Pages/Contact/Contact';
import FourOFour from './Pages/404/404';
import NavBar from './components/NavBar/Navbar'
import ExampleBlog from "./Pages/BlogPages/ExampleBlog/ExampleBlog";


const App = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={ <HomePage /> }/>    
                <Route path='/about_me' element={ <AboutMe/> } />         
                <Route path='/blog' element={ <Blog/> } />
                <Route path='/experience' element={ <Experience/> } />
                <Route path='/contact' element={ <Contact/> }/>
                <Route path='*' element={ <FourOFour/> } />
                { /*Here start the routing of blog section, we start with a simple plage only to put an example */ }
                <Route path='/ExampleBlog'  element={ <ExampleBlog/> } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
