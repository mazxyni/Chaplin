import React from "react";
import { useSelector } from "react-redux";
import './Place_PC.css'
import {IoMdClose} from 'react-icons/io'


function PlacePC(props) {
    const chosenMetro = useSelector((state) => state.region.Metro);
    const chosenPlace = useSelector((state) => state.chosenPlace);
    const usrPlan = useSelector((state) => state.schedule);

    console.log(chosenPlace[2].plnSq);
    console.log(usrPlan)
    //console.log(chosenPlace.groupBy(({num}) => num));

    // const place = chosenPlace.reduce((acc, curr) => {  
    //     const { plnSq } = curr;                       
    //     if (acc[plnSq]) acc[plnSq].push(curr);  
    //     else acc[plnSq] = [curr];              
    //     return acc;                           
    //   }, {});
    
    // const selectPlace = () => {
    //     if (place.key == 3) {
    //         console.log(place)
    //     }
    // }
      
    //console.log(place);

    return(
        <div className="placeModal">
            
            <div className="close"><IoMdClose size={25} onClick={() => {props.setModal(false)}}/></div>
            <br/>
            <div style={{margin:'auto'}}>
                <p>김여행님의 {chosenMetro} 여행 계획표</p>
            </div>

            <div>
                
            </div>


        </div>
    )

}
export default PlacePC;





