import React, {Component} from 'react'; 
import './Header.scss';

class Header extends Component{ render(){ return(
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Sass</a></li>
                <li><a href="#">Components</a></li>
                <li><a href="#">JavaScript</a></li>
            </ul>
        </div>
        <div className="py-3"></div>
    </nav>
    ) } } 
    
export default Header;