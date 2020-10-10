import React from 'react';
import './index.scss';
import {List,ListItem,ListItemText} from '@material-ui/core';
const LeftSide = (props) => {
    const {menuDataDetails,activeRestaurent,setActiveRestaurent,setAvailable}=props;
    const restaurentList=menuDataDetails&&Object.keys(menuDataDetails)||[];
	return (
    <div className="left-side-container">
<List>
    {restaurentList.length&&restaurentList.map(restaurent=>(
        <ListItem className={activeRestaurent===restaurent?"active":"in-active"} onClick={()=>{
            setActiveRestaurent(restaurent)
            setAvailable("BOTH")
        }}>
            <ListItemText >{restaurent}</ListItemText>
        </ListItem>
    ))||null
    }
</List>
    </div>
    )
};

export default LeftSide;
