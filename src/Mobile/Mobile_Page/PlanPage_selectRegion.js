import React, { useState } from 'react';
import { Pc, Mobile } from "../../Responsive";
import { Link } from 'react-router-dom';
import './PlanPage_Mobile.css';
import Header from '../mobile_component/Header_Mobile';
import {IoIosArrowDown} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import {setChosenRegion} from '../../store'

function SelectRegion () {
    let [region, setRegion] = useState([
        {num:'전체', value:['전체']}, 
        {num:'강원도', value:['전체', '춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시', '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군']},
        {num:'경기도', value:['전체', '수원시', '용인시', '성남시', '부천시', '화성시', '안산시', '안양시', '평택시', '시흥시', '김포시', '광주시', '광명시', '군포시', '하남시', '오산시', '이천시', '안성시', '양평군', '여주시', '과천시', '고양시', '남양주시', '파주시', '의정부시', '양주시', '구리시', '포천시', '동두천시', '가평군', '연천군']},
        {num:'경상남도', value:['전체', '창원시', '진주시', '통영시', '사천시', '김해시', '밀양시', '거제시', '양산시', '의령군', '함안군', '창녕군', '고성군', '남해군', '하동군', '산청군', '함양군', '거창군', '합천군']},
        {num:'경상북도', value:['전체', '포항군', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '경산시', '군위군', '의성군', '청송군', '영양군', '영덕군', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '울릉군']},
        {num:'광주광역시', value:['전체', '동구', '서구', '남구', '북구', '광산구']},
        {num:'대구광역시', value:['전체', '중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군']},
        {num:'대전광역시', value:['전체', '동구', '중구', '서구', '유성구', '대덕구']},
        {num:'부산광역시', value:['전체', '중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구', '해운대구', '강서구', '사하구', '금정구', '연제구', '수영구', '사상구', '기장군']},
        {num:'서울특별시', value:['전체', '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구']},
        {num:'세종특별자치시', value:['전체', '세종특별자치시']},
        {num:'울산광역시', value:['전체', '중구', '남구', '동구', '북구', '울주군']},
        {num:'인천광역시', value:['전체', '중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '응진군']},
        {num:'전라남도', value:['전체', '목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군', '고흥군', '보성군', '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군']},
        {num:'전라북도', value:['전체', '전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군']},
        {num:'충청남도', value:['전체', '천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군']},
        {num:'충청북도', value:['전체', '청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군', '괴산군', '용성군', '단양군']},
        {num:'제주특별자치도', value:['전체', '제주시', '서귀포시']},
    ]);

    const chosenMetro = useSelector((state) => state.region.Metro);

    let [metroButton, setMetroButton] = useState(false);
    let [cityButton, setCityButton] = useState(false);
    let [selected, setSelected] = useState({Metro:'전체', City:'전체'});

    const dispatch = useDispatch();



    
    return(
        <div>
            <Mobile>
            {/* 헤더 */}
            <Header />
            {/* 여행 지역 선택 */}
            <div>
            {/* {console.log(regionMetro)} */}
            {/* {console.log(region)} */}
                <p className='Region_mb'>여행 지역을 선택해주세요</p>
                <div className='SelectDiv_mb'>
                    <div className='RegionDropDown_mb'>
                        <div className='Metropolitan_mb'>
                            <p style={{fontWeight:'700',fontSize:'14px',textAlign:'center'}}>시·도</p>
                            <div className='metropolitan_mb'>
                                <div className='selected_mb'  onClick = {() => {setMetroButton(!metroButton); setCityButton(false);}}>
                                    <div className='selected-value_mb'>{selected.Metro}</div>
                                    <div style={{margin:'1px'}}><IoIosArrowDown size={18}/></div>
                                </div>

                                {metroButton &&(<ul className='value_mb'>
                                    {region.map((item, i) => (
                                        <li key={i} onClick = {() => {setSelected({Metro:item.num, City:'전체'}); setMetroButton(false);}}>{item.num}</li> 
                                    ))}
                                </ul>)}
                               
                            </div>
                            {/* <select name='metropolitan'>
                            {region.map((item, i) => (
                                <option value={i}>{item}</option> 
                            ))}   
                            </select> */}
                        </div>
                        <div className='City_mb'>
                            <p style={{fontWeight:'700',fontSize:'14px',textAlign:'center'}}>시군구</p>
                            <div className='city_mb'>
                                <div className='selected_mb'  onClick = {() => {setCityButton(!cityButton); setMetroButton(false);}}>
                                    <div className='selected-value_mb'>{selected.City}</div>
                                    <div style={{margin:'1px'}}><IoIosArrowDown size={18}/></div>
                                </div>

                                {cityButton && (<ul className='value_mb'>

                                    {/* {
                                    regionCity.filter(regionCity => selected.Metro==regionCity.num).map((item, i) => (
                                        <li key={i} onClick = {() => {}}>{console.log(item.value[i])}</li>
                                    ))} */}
                                    {
                                    region.map((item, i) => {
                                        if(item.num == selected.Metro) {
                                            return(
                                            item.value.map((item2, k) => (
                                                <li key={k} onClick = {() => {setSelected({Metro:item.num, City:item2}); setCityButton(false);}}>{item2}</li>
                                            ))
                                    )}
                                    }
                                        
                                        
                                    )}
                                    
                                </ul>)}
                               
                                </div>
                        </div>
                    </div>
                    {chosenMetro ? (
                        <Link to='/Plan_Mobile'>
                            <div className='SelectButton-Region_mb' onClick={() => {dispatch(setChosenRegion(selected))}}>적용하기</div>
                        </Link>
                    ):(
                        <Link to='/SelectDate'>
                            <div className='SelectButton-Region_mb' onClick={() => {dispatch(setChosenRegion(selected))}}>적용하기</div>
                        </Link>
                    )}
                    
                </div>
            </div>
            </Mobile>
        </div>
    );
}
export default SelectRegion;
