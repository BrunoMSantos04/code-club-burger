import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Request from './pages/requests'

function MyRoutes(){
    
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/pedidos" element={<Request />} />
                <Route 
                    path="/"
                    />
            </Routes>
        </Router>
    )
}

export default MyRoutes
