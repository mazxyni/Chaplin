import {React, useState} from "react";
import { useSelector } from 'react-redux';
import '../../CSS/Mobile/PlanPage_Mobile.css'
import { Link } from 'react-router-dom';

function SelectSchedule() {
    const chosenStartDate = useSelector((state) => state.chosenStartDate)
    const chosenEndDate = useSelector((state) => state.chosenEndDate)
    const chosenMetro = useSelector((state) => state.region.Metro)
    const chosenCity = useSelector((state) => state.region.City)
    

    return (
        <div className="ChosenSchedule">
            <div className="ChosenRegion"> 
            {chosenMetro=='전체' ? (<>{chosenMetro}</>) : (<>{chosenMetro} {chosenCity}</>) }
            </div>
            <Link to={'/SelectDate'}>
                <div className="ChosenDate"> {chosenStartDate} ~ {chosenEndDate}</div>
            </Link>
        </div>

        
    );
}
export default SelectSchedule;