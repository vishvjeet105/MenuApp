import React from 'react';
import './index.scss';
import {ArrowBackOutlined,SearchOutlined} from '@material-ui/icons';
const Header = (props) => {
    const {setSearchText}=props;
    const [text,setText]=React.useState("");
    const handleChange=(event)=>{
      if(event.target){
        setText(event.target.value);
        setSearchText(event.target.value)
      }
    }
	return (<div className="header-box">
        <div className="back-arrow"><ArrowBackOutlined/></div>
            <div className="search-box-container">
               <div className="search-box"><SearchOutlined/><input className="input" value={text} onChange={handleChange}type="text"/></div>
            </div>
        </div>
    )   
};

export default Header;
