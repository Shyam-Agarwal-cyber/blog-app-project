import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <button className="button-5 head-but">Home</button>
            </Link>
            <Link to='/new'>
                <button className="button-5 head-but">New Blog</button>
            </Link>
        </div>
    )
}

export default Header