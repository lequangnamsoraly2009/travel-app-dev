import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  Button  from '../Button';
import "./NavBar.scss";

NavBar.propTypes = {
    
};

function NavBar(props) {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    
    const handleClickList = () =>{
        setClick(!click);
    }

    const handleCloseMobileList = () => setClick(false);

    // Mobile
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/home" className="navbar__logo" onClick={handleCloseMobileList}>
                        SORALY <i className="fab fa-d-and-d"/>
                    </Link>
                    <div className="navbar__icons"  onClick={handleClickList}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'navbar__list active' : 'navbar__list'}>
                        <li className="navbar__item">
                            <Link to="/home" className="navbar__links" onClick={handleCloseMobileList}>
                                Home
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/services" className="navbar__links" onClick={handleCloseMobileList}>
                                Services
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/products" className="navbar__links" onClick={handleCloseMobileList}>
                                Products
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/sign-up" className="navbar__links-mobile" onClick={handleCloseMobileList}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>

                    {button  && <Link to="/sign-up" className="btn-mobile"><Button buttonStyle='btn-outline' >SIGN UP</Button></Link>}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;