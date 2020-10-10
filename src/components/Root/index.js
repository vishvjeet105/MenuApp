import React from 'react';
import './index.scss';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import LeftSide from '../LeftSide';

const Root = (props) => {
    const restaurentList=props.menuDataDetails&&Object.keys(props.menuDataDetails)||[];
    const [activeRestaurent,setActiveRestaurent]=React.useState(restaurentList.length && restaurentList[0]||"");
    const [available,setAvailable]=React.useState("BOTH");
    const [searchText,setSearchText]=React.useState("");
    const cuurentItemList=restaurentList.length&&props.menuDataDetails[activeRestaurent]||[]
    const activeRestaurentItemList=cuurentItemList.filter((item)=>{
        const text1=item.foodname.toUpperCase();
        const text2=searchText.toUpperCase();
        return text1.includes(text2);
    })
	return (
		<div className='root'>
			<Header setSearchText={setSearchText}/>
			<div className='left-main-container'>
				<LeftSide menuDataDetails={props.menuDataDetails} activeRestaurent={activeRestaurent} setActiveRestaurent={setActiveRestaurent} setAvailable={setAvailable}/>
				<Main cuurentItemList={activeRestaurentItemList} available={available}/>
			</div>
			<Footer setAvailable={setAvailable}/>
		</div>
	);
};

export default Root;
