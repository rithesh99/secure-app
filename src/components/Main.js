import React from 'react'
import { Link } from "react-router-dom";

function Main({ children }) {
    return (
        <div>
            {children}
            <div className="mainSection">
                <Link to="/recordVideo" className="mainSection-btn" >Record Video</Link>
                <Link to="/" className="mainSection-btn" >Take Pic</Link>
            </div>
        </div>
    )
}

export default Main