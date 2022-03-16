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

                <h1 className="logo">LOGO</h1>
                
                <ul className={this.state.clicked ? 'navMenuActive' : 'navMenu'}>
                   
                    {MenuItems.map((item) => {
                        return (
                            <li className="listStyle">
                                <a className={item.cName} href={item.url}>{item.title} <i class={item.iName}></i> </a>
                            </li>
                        )
                    })}
                </ul>
                <Button/> 
            </nav>
        )
    }
}

export default Navbar

 
 