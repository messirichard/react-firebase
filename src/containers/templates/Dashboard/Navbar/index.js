import React, {Component} from 'react'; 
import { Col, Row, Badge, Button } from 'reactstrap';
import './Navbar.scss';

class Navbar extends Component{ 
    

    
    
    render(){ 
    
    return(
    // <Row>
    //     <Col md={3}>
    //     <div id="mySidebar" class="sidebar">
    //         <Badge href="#">Packet</Badge>
    //         <Badge href="#">Report In</Badge>
    //         <Badge href="#">Report Out</Badge>
    //         <Badge href="#">Transaction</Badge>
    //     </div>
    //     </Col>
    //     <Col md={9}>
    //         <button class="openbtn" onclick="openNav()">☰ Open Menu</button>
    //     </Col>
    // </Row>
    <Row>
        <div id="mySidebar" class="sidebar">
            <Badge href="#">Packet</Badge>
            <Badge href="#">Report In</Badge>
            <Badge href="#">Report Out</Badge>
            <Badge href="#">Transaction</Badge>
        </div>
        <div id="main">
            <Button class="openbtn" onclick="openNav()">☰ Open Sidebar</Button>  
            <h2>Open Menu</h2>
        </div>
    </Row>

    ) } } 
export default Navbar;