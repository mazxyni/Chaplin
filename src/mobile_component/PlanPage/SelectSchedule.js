import {React, useState} from "react";
import { useSelector } from 'react-redux';
import '../../CSS/PlanPage.css'
import { Link } from 'react-router-dom';

function SelectSchedule() {
    const chosenStartDate = useSelector((state) => state.chosenStartDate)
    const chosenEndDate = useSelector((state) => state.chosenEndDate)
    

    return (
        <div className="ChosenSchedule">
            <div className="ChosenRegion"> 지역 명</div>
            <Link to={'/SelectDate'}>
                <div className="ChosenDate"> {chosenStartDate} ~ {chosenEndDate}</div>
            </Link>
        </div>

        
    );
}
export default SelectSchedule;