// 카카오 지도 
/*global kakao */ 
import React, { useEffect } from 'react'

const { kakao } = window;

function KakaoMap() {
    useEffect(() => {
        kakao.maps.load(() => {
            const container = document.getElementById('myMap');
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
        const map = new kakao.maps.Map(container, options);
        });
    }, []);

    return (
        <div id='myMap' style={{
            width: '375px',
            height: '815px',
            opacity: '99%'
        }}></div>
    );
  
}
export default KakaoMap;