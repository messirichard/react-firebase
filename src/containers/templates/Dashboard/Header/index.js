import React, {Component} from 'react'; 
import './Header.scss';

class Header extends Component{ render(){ return(
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </div>
        <div className="py-3"></div>
    </nav>
    ) } } 
    
export default Header;