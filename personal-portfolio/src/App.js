import React from "react";
import {
    BrowserRouter,
    Route,
    Routes 
} from 'react-router-dom';
import HomePage from './Pages/Home Page/HomePage'

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={ <HomePage /> }/>    
                    <Route path='/blog' element={<h1>This is my blog</h1>} />         
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;