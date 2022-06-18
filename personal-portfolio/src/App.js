import React from "react";
import {
    BrowserRouter,
    Route,
    Routes 
} from 'react-router-dom';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<h1>Main Page</h1>}/>    
                    <Route path='/blog' element={<h1>This is my blog</h1>} />         
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;