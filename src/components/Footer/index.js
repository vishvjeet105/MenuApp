import React from 'react';
import './index.scss';
import {Button} from '@material-ui/core';
const Footer = (props) => {
    const {setAvailable}=props;
	return (<div className="all-footer-btn">
        <Button className="footer-btn" onClick={()=>setAvailable("UNAVAILABLE")}>ALL UNAVAILABLE</Button>
        <Button className="footer-btn" onClick={()=>setAvailable("AVAILABLE")}>ALL AVAILABLE</Button>
        <Button className="footer-btn">APPLY</Button>
    </div>);
};

export default Footer;
