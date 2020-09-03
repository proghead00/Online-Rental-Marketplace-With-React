import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core"; //since avatar is a component
import {Link} from 'react-router-dom'


function Header() {
	return (
		<div className="header">
            <Link to='/'>
			<img
				className="header__icon"
				src="https://serving.photos.photobox.com/51051740209b9bbde1aba1ec3c37e505d6c05c261dc5d560f722243a00831b6965a12977.jpg"
				alt="logo"
			/>
            </Link>
            <div className="header__center">

                <input type="text" />
                <SearchIcon />
             </div>
             <div className='header__right'>
                 <p>Become a host</p>
                 <LanguageIcon />
                 <ExpandMoreIcon />
                 <Avatar />

             </div>
             
		</div>
	)
}

export default Header;
