import {React, useState} from "react";
import { useSelector } from 'react-redux';
import '../../Mobile_Page/PlanPage_Mobile.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

function SelectSchedule() {
    const chosenStartDate = useSelector((state) => state.chosenStartDate)
    const chosenEndDate = useSelector((state) => state.chosenEndDate)
    const chosenMetro = useSelector((state) => state.region.Metro)
    const chosenCity = useSelector((state) => state.region.City)
    
    const navigate = useNavigate();

    console.log(chosenEndDate)

    return (
        <div className="ChosenSchedule">

            <div className="ChosenRegion" onClick={() => {navigate('/Plan')}}> 
            {chosenMetro == null ? (<>지역을 선택하세요.</>):(
            chosenMetro=='전체' ? (<>{chosenMetro}</>) : (<>{chosenMetro} {chosenCity}</>)) }
            </div>

            <div className="ChosenDate" onClick={() => {navigate('/SelectDate')}}>
                {chosenStartDate == null? (<>날짜를 선택하세요.</>):(
                chosenEndDate == 'Invalid Date' ? (<>{chosenStartDate}</>) : (<>{chosenStartDate} ~ {chosenEndDate}</>))}
            </div>
        </div>

        
    );
}
export default SelectSchedule;