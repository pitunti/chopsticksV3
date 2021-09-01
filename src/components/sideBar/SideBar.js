import React from 'react'

import "./SideBar.scss"

export const SideBar = ({ className }) => {
    const openMenu = () => {
        const menu = document.querySelector(".Nav")
        const main = document.querySelector("main")
        menu.classList.toggle("expanded");
        main.classList.toggle("collapse");
        console.log(menu)
    }
    return (
        <nav className="Nav">
            {/* <div className="logo">
                 <a href="#" className="">
                 <img src="https://cdn.iconscout.com/icon/free/png-512/plex-226049.png" alt="" className="logo-img"/>
                 </a>
             </div> */}

             <img className="btn-menu2" onClick={openMenu} src="https://mystickermania.com/cdn/stickers/67-512x512.png" width="30" alt="" />

            <i className="fas fa-bars btn-menu" onClick={openMenu}></i>
           <div className="header">
                
           <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/239387960_225203896278087_4109352718933834206_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_6mD7l8rGqMAX8xUQIB&_nc_ht=scontent-dfw5-1.xx&oh=6729bd9e30deef9e777133b62e46b3e8&oe=613350C6" alt="" className="" />
                    <span className="userName">
                       Chopsticks
                    </span>
           </div>

            <ul className={className}>
              
                <li>
                    <i class="fas fa-home"></i> <span>Home</span>
                </li>



            </ul>

            <div className="perfil-img">

            </div>
        </nav>


    )
}
