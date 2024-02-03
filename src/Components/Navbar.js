import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useLanguage } from "../Context/LangContext";

const Navbar = () => {
    const favorites = useSelector((state) => state.favorites )
    const { language, changeLanguage } = useLanguage();
    const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

    return(
        <> 
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#25445B', fontSize: '20px' }}>
            <div className="container-fluid">
                <Link
                className="navbar-brand d-flex align-items-center ms-5"
                to="#"
                style={{
                    backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: '30px',
                    fontWeight: 'bold',}}>
                        MOVIES
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link pt" to="/Home" 
                        style={{ color: 'transparent', backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', WebkitBackgroundClip: 'text' }}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link pt" to="/FavPage" 
                        style={{ color: 'transparent', backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', WebkitBackgroundClip: 'text' }}>
                            Favorites ({favorites.length})
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SignUp" 
                        style={{ color: 'transparent', backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', WebkitBackgroundClip: 'text' }}>
                            Signup
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Login" 
                        style={{ color: 'transparent', backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', WebkitBackgroundClip: 'text' }}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                    <button
                    className="btn btn-link nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ color: 'transparent', backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', WebkitBackgroundClip: 'text' }}>
                        {language === 'en' ? 'English' : 'Arabic'}
                    </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <button
                            className="dropdown-item"
                            onClick={() => handleLanguageChange('en')}
                            style={{ color: 'transparent', backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', WebkitBackgroundClip: 'text' }}>
                                English
                        </button>
                        <button
                            className="dropdown-item"
                            onClick={() => handleLanguageChange('ar')}
                            style={{ color: 'transparent', backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', WebkitBackgroundClip: 'text' }}>
                                Arabic
                        </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar;