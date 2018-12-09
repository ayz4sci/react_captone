import React from 'react';
import BurgerMenu from 'react-burger-menu';
import LoginForm from '../authentication/Login';
import './Sidemenu.css';

class Sidemenu extends React.Component{
    Menu = BurgerMenu['slide'];

    render(){
        return (
            <this.Menu 
                pageWrapId={ "page-wrap" } 
                outerContainerId={ "outer-container" } 
                slide="true">
                <LoginForm />
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">Manage Cheats</a>
            </this.Menu>
        )
    }
}

export default Sidemenu;