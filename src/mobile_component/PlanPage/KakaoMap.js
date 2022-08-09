// 카카오 지도 
/*global kakao */ 
import React, { useEffect, useState } from 'react';
import '../../CSS/PlanPage.css'
import SchedulePlace from './Schedule_place';
import {BsPlus} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';


const { kakao } = window;


function KakaoMap({ searchPlace }) {
    const [Places, setPlaces] = useState([]) // 검색 결과 
    let [add, setAdd] = useState(false) // true일 때 일정표에 추가, false일 때 냅두기
    let [SchedulePlaces, setScheduelPlaces] = useState(0) // 검색 결과 값 위치, 기본값 0번째
    let [button, setButton] = useState(false); // true일 때 내 일정 열림 , false일 때 내 일정 닫힘
    let [addPlace, setAddPlace] = useState([]);

    const startDate = useSelector((state) => state.startDate)
    const endDate = useSelector((state) => state.endDate)
    
    console.log('맵' + startDate, endDate)

    useEffect(() => {
        kakao.maps.load(() => {
            var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
            var marker = [];
            const container = document.getElementById('myMap');
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };
        
            // 지도 생성 
            const map = new kakao.maps.Map(container, options);

            // 장소 검색 객체 생성
            const ps = new kakao.maps.services.Places();

            // 키워드로 장소 검색
            ps.keywordSearch(searchPlace, placesSearchCB);

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
                opacity: '99%'
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
                                setScheduelPlaces(i); // 검색결과 값 위치 넘겨주기
                                setButton(true); // 일정표 열기
                                // let copy = [...addPlace]; addPlace배열 카피본 만들기
                                // copy.push(item); 선택한 item 배열에 넣기
                                // setAddPlace(copy); addPlace 변경
                                setAddPlace(() => {return[...addPlace, item]})// 추가한 결과 배열에 넣기
                                //console.log(addPlace);
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

            <div style={{position:'absolute', zIndex:'1', width:'100px', height:'100px', top:'200px', backgroundColor:'white'}}>{startDate}</div>
            
            {/* 내 일정 열기 버튼 */}
            {!button && (<div className='MyPlanButtonOpen' onClick={() => {
                setButton(true)
            }}>내 일정</div>)}

            {button &&( <div className='PlanOpenButton'>
                {/*일정 저장 버튼*/}
                <div className='MyPlanSave'>일정 저장</div> 

                {/*내 일정 닫기 버튼*/}
                <div className='MyPlanButtonClose' onClick={() => {setButton(false)}} >내 일정</div>
            </div>)}

            {(add == true) && (button == true)  ? (<SchedulePlace places={Places} SchedulePlace={SchedulePlaces} addPlace={addPlace} setAddPlace={setAddPlace}/>) : null}
            
        </div>
        
    );
  
}
export default KakaoMap;