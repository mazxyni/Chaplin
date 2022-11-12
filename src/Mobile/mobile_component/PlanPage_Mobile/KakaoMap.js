// 카카오 지도 
/*global kakao */ 
import React, { useEffect, useState } from 'react';
import '../../CSS/Mobile/PlanPage_Mobile.css'
import {BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { setChosenPlace } from '../../store';
import { Mobile } from '../../Responsive';
import { Link, useNavigate } from 'react-router-dom';


const { kakao } = window;


function KakaoMap({ searchPlace }) {
    const [Places, setPlaces] = useState([]) // 검색 결과 
    let [add, setAdd] = useState(false) // true일 때 일정표에 추가, false일 때 냅두기
    let [button, setButton] = useState(true); // true일 때 내 일정 열림 , false일 때 내 일정 닫힘
    let [addPlace, setAddPlace] = useState([]); // 일정표 목적지 배열, {num : DayButton(일차), place: 목적지}  
    let [DayButton, setDayButton] = useState(0); // 일차 배열 값 위치, 기본값 0번째
    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const chosenDateArray = useSelector((state) => state.chosenDateArray) // 일차 배열
    const chosenMetro = useSelector((state) => state.region.Metro)
    const chosenCity = useSelector((state) => state.region.City)
    
    //console.log('맵' + chosenStartDate, chosenEndDate)
    //console.log(chosenDateArray)


    useEffect(() => {
        kakao.maps.load(() => {
            var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
            var marker = [];
            const container = document.getElementById('myMap');
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                // chosenMetro == '전체' ?  (new kakao.maps.LatLng(33.450701, 126.570667)) : (
                //     chosenCity == '전체' ? (new kakao.maps.LatLng(37.469221, 126.573234)) : (new kakao.maps.LatLng(35.798838, 128.583052))
                // ),
                level: 3,
            };
        
            // 지도 생성 
            const map = new kakao.maps.Map(container, options);

            // 장소 검색 객체 생성
            const ps = new kakao.maps.services.Places();

            // 키워드로 장소 검색
            ps.keywordSearch(chosenMetro == '전체' ?  (searchPlace) : (
                chosenCity == '전체' ? (chosenMetro + searchPlace) : (chosenMetro + chosenCity + searchPlace)), placesSearchCB);

            // 장소검색이 완료됐을 때 호출되는 콜백함수
            function placesSearchCB(data, status) {
                if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds();
               
        
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                };
        
                map.setBounds(bounds);

                
                setPlaces(data);
                //console.log(Places);
                //console.log(data)
                };
            }

            
        
            // 마커를 표출하는 함수
            function displayMarker(place) {
                let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
                });
        
                // 마커에 클릭이벤트를 등록
                kakao.maps.event.addListener(marker, 'click', function () {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출
                infowindow.setContent('<div style="padding:5px; margin:5px; font-size:12px;">' + place.place_name +'</div>');
                infowindow.open(map, marker);
                });
            }

        });
        
    }, [searchPlace]);

    return (
        <div>
            
            {/* 지도 */}
            <div id='myMap' style={{
                width: '100%',
                height: '100vh',
                opacity: '99%',
                overflowY: 'hidden'
            }}></div>

            

            {/* 검색 결과 */}
            <div className='result'>
                {/* 검색 결과 리스트 */}
                {Places.map((item, i) => (
                    <div key={i} className='result-list'>
                        <div style={{display:'flex', margin:'5px'}}>
                            {/* 장소 이름 */}
                            <h4 style={{marginRight:'15px', fontFamily:'Roboto Bold', fontWeight:'700'}}>{item.place_name}</h4>
                            {/* 장소 추가 버튼 */}
                            <span style={{marginLeft : 'auto'}} onClick={() => {
                                setAdd(true); // 일정표에 추가
                                setButton(true); // 일정표 열기
                                // let copy = [...addPlace]; addPlace배열 카피본 만들기
                                // copy.push(item); 선택한 item 배열에 넣기
                                // setAddPlace(copy); addPlace 변경
                                setAddPlace(() => {return[...addPlace, {num: DayButton, place: item}]})// 추가한 결과 배열에 넣기
                                // console.log(addPlace);
                                }}><BsPlus /></span>
                        </div>
                        {/* 장소 주소 */}
                        <div style={{fontFamily:'Roboto Regular', fontWeight:'400', fontSize:'12px', margin:'10px 5px', textAlign:'left'}}>
                            {item.road_address_name ? (
                            <p>{item.road_address_name}</p>
                            ) : (
                                <p>{item.address_name}</p>
                            )} 
                        </div> 
                    </div>    
                ))}
                
            </div>
            
            
            {/* 일정표 */}
            <div className='MyPlan'>

                {/*일차*/}
                {button == true ? (<div className='MyPlanDay'> 
                
                    {chosenDateArray.map((item, i) => (
                    <div key={i} className={'MyPlanDay-list' + (i == DayButton ? 'active': '')}>
                        <div onClick={() => {setDayButton(i); console.log(i)}}>Day {i + 1}</div>
                    </div>))} 
                </div>) : (null)}

                {/* 일정 */}
                {(add == true) && (button == true)  ? (<div className='MyPlanPlace'>

                    {addPlace.filter(addPlace => addPlace.num == DayButton).map((item, i) => (
                    <div key={DayButton + i} className='MyPlanPlace-list'>
                        <div style={{display:'flex', margin:'5px'}}>
                            <h4 style={{marginRight:'15px', fontFamily:'Roboto Bold', fontWeight:'700'}}>{item.place.place_name}</h4>
                            <span style={{marginLeft : 'auto'}} onClick={() => {
                                let copy = [...addPlace] // addPlace배열 카피본 만들기
                                let copy2 = copy.filter(addPlace => addPlace.num == DayButton); // 필터링한 카피본 만들기(일차에 해당하는 여행지만)
                                copy2.splice(i,1); // 선택한 i번째 목적지 삭제하기
                                //console.log(...copy2)
                                copy = [...copy.filter(copy => copy.num !== DayButton), ...copy2] // 일차에 해당하지 않는 여행지만 필터링해서 copy2추가 
                                //console.log(copy)
                                setAddPlace(copy); // addPlace 변경
                                //console.log(addPlace)
                            }}><BiMinus /></span>
                        </div>
                        <div style={{fontFamily:'Roboto Regular', fontWeight:'400', fontSize:'13px', margin:'10px 5px', textAlign:'left'}}>
                            {item.place.road_address_name ? (
                            <p >{item.place.road_address_name}</p>
                            ) : (
                            <p >{item.place.address_name}</p>
                            )}
                        </div>
                    </div>))}
                </div>) : (null)}  
            </div>

            {console.log(addPlace)}
            {/* 내 일정 열기 버튼 */}
            {!button && (<div className='MyPlanButtonOpen_mb' onClick={() => {
                setButton(true)
            }}>내 일정</div>)}

            {button &&( <div className='PlanOpenButton'>
                {/*일정 저장 버튼*/}
                
                <div className='MyPlanSave' onClick={() =>{dispatch(setChosenPlace(addPlace)); navigate('/MyPage')}}>일정 저장</div> 
                

                {/*내 일정 닫기 버튼*/}
                <div className='MyPlanButtonClose' onClick={() => {setButton(false)}} >내 일정</div>
            </div>)}
        </div>
        
    );
  
}
export default KakaoMap;