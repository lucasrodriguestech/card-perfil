import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/index'
function RoutesApp() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;