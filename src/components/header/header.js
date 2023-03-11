import React from "react";
import { Link } from "react-router-dom";
import './header.css';


export function Header()
{
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="headerLeft">
                    <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" width='50px' className="header_icon" /></Link>
                    <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                    <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                    <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
                </div>
            </div>
        </div>
    )
}