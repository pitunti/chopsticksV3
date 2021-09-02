import React from 'react'
import "./Delivers.scss"; 
import favors  from "../../assets/img/delivery/favor.jpg";
import doordash from "../../assets/img/delivery/doordash.jpg";
import food4you from "../../assets/img/delivery/food4you.jpg";
import grubHub from "../../assets/img/delivery/grubHub.png";
import uberEat from "../../assets/img/delivery/uberEat.png";

export const Delivers = () => {
    return (
        <div className="Delivers">
            <div className="contenido">
                <ul>
                
                    <li><img src={doordash} alt="" /></li>
                    <li><img src={uberEat} alt="" /></li>
                    <li><img src={food4you} alt="" /></li>
                    <li><img src={favors} alt="" /></li>
                    <li><img src={grubHub} alt="" /></li>
                </ul>
            </div>
            
        </div>
    )
}
