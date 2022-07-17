// 카카오 지도 
/*global kakao */ 
import React, { useEffect, useState } from 'react'


const { kakao } = window;


function KakaoMap({ searchPlace }) {
    const [Places, setPlaces] = useState([])

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
            function placesSearchCB(data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds();
        
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                };
        
                map.setBounds(bounds);

                setPlaces(data);
                console.log(Places);
                };
            }

        
            // 마커를 표출하는 함수
            function displayMarker(place) {
                let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
                });
        
                // 마커에 클릭이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'click', function () {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px; margin:5px; font-size:12px;">' + place.place_name +'</div>');
                infowindow.open(map, marker);
                });
            }

        });
        
    }, [searchPlace]);

    return (
        <div>
            <div id='myMap' style={{
                width: '100%',
                height:'100vh',
                opacity: '99%'
            }}>
            </div>

            <div id='result' style={{
                width: '100%',
                height: '60px',
                position: 'absolute',
                top: '140px',
                left: '30px', 
                zIndex: '1', 
                display: 'flex'
            }}>
                {Places.map((item, i) => (
                    <div key={i} className='result-list'>
                        <h3 style={{margin:'5px'}}>{item.place_name}</h3>
                        {item.road_address_name ? (
                        <p style={{margin:'5px'}}>{item.road_address_name}</p>
                        ) : (
                            <p style={{margin:'5px'}}>{item.address_name}</p>
                        )}
                    </div>
                    
                ))}
            </div>
        </div>
        
    );
  
}
export default KakaoMap;