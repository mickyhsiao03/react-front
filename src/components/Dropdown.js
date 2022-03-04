import React, { useState } from "react";
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown(){
    const [click, setClick] = useState([])
    const handleClick = () => setClick(!click)
    const addNumber = () => {
        setClick([
          ...click,
          {
            id: click.length,
            value: Math.random() * 10
          }

        ]);
      };

    return(
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}> {item.title}
         
                    <Link className={item.cName} onClick = {addNumber}>
                      
                    </Link>
                    </li>
                )
            })}
        </ul>

        </>
    )
}
export default Dropdown;