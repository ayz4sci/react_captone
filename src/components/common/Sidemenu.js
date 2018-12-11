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
                <hr className="mt-5 mb-5"/>
            </this.Menu>
        )
    }
}

export default Sidemenu;