import React from 'react';
import './index.scss';
import {isItemAvailable} from '../../utils/helper'
const Main = (props) => {

    const {cuurentItemList=[],available}=props;

    let availableItems=cuurentItemList.length&&cuurentItemList.filter(el=>{
        const isAvailable=isItemAvailable(el.servingtime);
        return !el.ofs&&isAvailable==="Yes"
    })||[];

    let unAvailableItems=cuurentItemList.length&&cuurentItemList.filter(el=>{
        const isAvailable=isItemAvailable(el.servingtime);
        return (el.ofs||isAvailable==="No")
    })||[];

    console.log("availableItems,unAvailableItems",availableItems,unAvailableItems)
    const showAvailableAndUnAvailableItem=(availableItems,unAvailableItems)=>{
        console.log("availableItems,unAvailableItems-->18",availableItems,unAvailableItems)
        const availableItemRender=availableItems.length && availableItems.map((itemObj)=>(
            <div className="restaurent-item available-items" key={itemObj.foodid}>
                {/* <div className="restaurent-item-text"> */}
                    {itemObj.foodname||""}
                    {/* </div> */}
            </div>
        ))||[];
        const unAvailableItemRender=unAvailableItems.length && unAvailableItems.map((itemObj)=>(
            <div className="restaurent-item unavailable-items" key={itemObj.foodid}>
                {/* <div className="restaurent-item-text"> */}
                    {itemObj.foodname||""}
                    {/* </div> */}
            </div>
        ))||[];
        console.log("availableItemRender,unAvailableItemRender-->33",availableItemRender,unAvailableItemRender)
       if(available==="AVAILABLE"){
           return availableItemRender
       }
       else if(available==="UNAVAILABLE"){
           return unAvailableItemRender
       }
       else if(available==="BOTH"){
           console.log("enterd 43");
           console.log("availableItemRender,unAvailableItemRender-->45",availableItemRender,unAvailableItemRender)
           return [...availableItemRender,...unAvailableItemRender];
       }
    }
	return (
    <div className="main-container">
        <div className="item-list-box">
            {showAvailableAndUnAvailableItem(availableItems,unAvailableItems)}
        </div>
    </div>
    )
};
export default Main;
