import React from "react";
import logo from '../Icons/RServiceLogo_transparent.png'

class Header extends React.Component{

    render(){
        return(
            <div className='Top-Banner'>
                <div id = 'ie7'>
                <div id='topBannerLogo-placeholder'>
                    <img src={logo} alt='logo transparent' id='BannerLogo'></img>
                </div>
                </div>
            </div>
        );


    }
};

export {Header};
