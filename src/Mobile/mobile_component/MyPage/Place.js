import React from "react";
import { useSelector } from "react-redux";
import HeaderMobile from "../Header_Mobile";
import './Place.css'
import {IoMdClose} from 'react-icons/io'


function Place(props) {
    const chosenMetro = useSelector((state) => state.region.Metro);
    const chosenPlace = useSelector((state) => state.chosenPlace);

    console.log(chosenPlace);
    console.log(chosenPlace.groupBy(({desDd}) => desDd));

   
    

    return(
        <div className="placeModal">
            
            <IoMdClose className='close' size={25} onClick={() => {props.setModal(false)}}/>

            <div>
                <p>김여행님의 {chosenMetro} 여행 계획표</p>
            </div>

            <div>
                {chosenPlace.map((iteam, i)=> (
                    <div key={i}>
                        <div>{iteam.desDd}</div>
                        <div>
                            
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )

}
export default Place;