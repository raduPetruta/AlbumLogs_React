import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./navbar.css";
import { Button } from "./Button";

class Navbar extends Component{
    
    state = {clicked : false};

    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked});
    }

    render(){
        return(
            <nav className="navbarItems">
                <h1 className="navbarLogo">LOGO</h1>
                
                <div className="menuIcon" onClick={this.handleClick} >
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'navMenuActive' : 'navMenu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className="listStyle">
                                <a className={item.cName} href={item.url}>
                                    {item.title}<i class={item.iName}></i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            
            </nav>
        )
    }
}

export default Navbar

 