import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import Region from "./Region";
import DatePicker from"./DatePicker";
import { BsEaselFill, BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import {BiMinus} from 'react-icons/bi';
import "./Plan.css";
import "./Schedule_PC.css";

const { kakao } = window;

const SIZE = 5;

const SearchPlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RightIcon10 = ({ fill = "#FFFFFF" }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.25 8.5L6.75 5L3.25 1.5"
      stroke={fill}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const PagenationFooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RightIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  cursor: pointer;
  ${(props) =>
    props.isDisable &&
    `
	  pointer-events: none; 
	`}
`;
const LeftIconWrapper = styled(RightIconWrapper)`
  transform: rotate(180deg);
`;

const NumberBox = styled(RightIconWrapper)`
  border-radius: 6px;
  font-size: 12px;
  color: "#C9C9C9";

  &.active {
    color: black;
    background-color: #fafafa;
    font-weight: 700;
  }
`;


// 일정계획 컴포넌트
function Plan()  {
  
  const [InputText, setInputText] = useState("");  
  const [searchPlace, setSearchPlace] = useState(' '); // 검색지
  const [searchResult, setSearchResult] = useState([]); // 검색 결과
  const [page, setPage] = useState(1); // 페이지
  const [pagination, setPagination] = useState(); // 페이징
  const dispatch = useDispatch();

  const [dateButton, setDateButton] = useState(false); // 날짜 선택 버튼
  const [regionButton, setRegionButton] = useState(false); // 지역 선택 버튼

  const [addPlace, setAddPlace] = useState([]);
  const [DayButton, setDayButton] = useState(0); // 일차 배열 값 위치, 기본값 0번째
  
  const selectStartDate = useSelector((state) => state.chosenStartDate); // 시작 날짜
  const selectEndDate = useSelector((state) => state.chosenEndDate); // 끝 날짜
  const chosenDateArray = useSelector((state) => state.chosenDateArray); // 날짜 배열
  const chosenMetro = useSelector((state) => state.region.Metro)
  const chosenCity = useSelector((state) => state.region.City)

  console.log(addPlace)

  const onChange = (e) => {
    setInputText(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchPlace(InputText);
    //searchPlace(InputText);
    //setInputText("");
  };

  // 페이지 이전으로
  function prevPage() {
    //console.log();
    setPage(page - 1);
    pagination.prevPage();
    
  }

  // 페이지 다음으로
  function nextPage() {
    setPage(page + 1);
    pagination.nextPage();
    
  }


  // 지도
  useEffect(() => {
    kakao.maps.load(() => {
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      const container = document.getElementById("myMap");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      // 지도 생성
      const map = new kakao.maps.Map(container, options);

      // 장소 검색 객체 생성
      const ps = new kakao.maps.services.Places();
      let pageOption = {
        size: SIZE,
        page: 1,
      };

      // 키워드로 장소 검색
      if(searchPlace && chosenMetro){ 
        ps.keywordSearch((chosenMetro == '전체'? (searchPlace) : (
          chosenCity == '전체'? (chosenMetro + searchPlace) : (chosenMetro + chosenCity + searchPlace))), placesSearchCB, pageOption);
      }else {
        ps.keywordSearch(searchPlace, placesSearchCB, pageOption);
      }

      // 장소 검색이 완료됐을 때 호출되는 콜백함수
      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          map.setBounds(bounds);
          setPagination(pagination); // pagination state에 넣기
          setSearchResult(data); // 검색 결과 state에 넣기
          
        }
      }
    

      // 마커를 표출하는 함수
      function displayMarker(place) {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 클릭 이벤트 등록
        kakao.maps.event.addListener(marker, "click", function () {
          //// 마커를 클릭하면 장소명이 인포윈도우에 표출
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });
      }
    });

  }, [searchPlace, chosenMetro, chosenCity]); // searchPlace 바뀔 때 마다 랜더링 


  return (
    
    <div className="container">
  
      {/* 일정계획 컴포넌트 */}
      <div className="Plans">

        {/* 여행 일정 컴포넌트 */}
        <div className="map_schedule">
          {/* <Schedule /> */}
          <div className="schedule">
            {/* 지역, 날짜 선택 및 확인 */}
            <div className="plan_info">
              <div className="eng_area"  onClick = {() =>  {setRegionButton(!regionButton)}}>
                {chosenMetro == null ? ("지역을 선택하세요") : (
                  chosenMetro=='전체' ? (chosenMetro) : (chosenMetro +' ' + chosenCity))}
              </div>
              <div className="area"></div>
              <div className="date">
                <button className="date" onClick = {() =>  {setDateButton(true)}}>
                  {selectStartDate == null ? ("날짜를 선택하세요."):(
                    selectEndDate == null ? (selectStartDate):(selectStartDate +' ~ '+ selectEndDate))}
                </button>
              </div>
            
            {/* 날짜 모달창 */}
            {dateButton==true? (<DatePicker setDateButton={setDateButton}/>):(null)}  
              
            </div>
            {/* 내 일정 */}
            <div className="place">
              <div className="planner">
                일정표
              </div>

              {chosenDateArray != null ? (<div className="dateArray">
                {chosenDateArray.map((item,i) => (
                  <div key={i} >
                    <div className={"dateArray-list"  + (i == DayButton ? 'active': '')} onClick={()=> {setDayButton(i)}}> Day{i + 1} </div>
                    
                    {addPlace.map((item2, j) => (
                      <div key={j}>
                        {addPlace[j].num == i ? (
                        <div className='MyPlace-list' style={{color:'black',fontSize:'16px'}}>
                          <div style={{display:'flex', margin:'5px'}}>
                            <h4 style={{marginRight:'16px', fontWeight:'700'}}>{item2.place.place_name}</h4>
                            <span style={{marginLeft : 'auto'}} onClick={() => {
                                let copy = [...addPlace] // addPlace배열 카피본 만들기
                                copy.splice(j,1); // 선택한 i번째 목적지 삭제하기
                                setAddPlace(copy); // addPlace 변경
                                console.log(addPlace)
                            }}><BiMinus /></span>
                        </div>
                        {console.log(item2)}
                        <div style={{fontWeight:'400', fontSize:'14px', margin:'10px 5px', textAlign:'left'}}>
                            {item2.place.road_address_name ? (
                            <div className="list_address">{item2.place.road_address_name}</div>
                            ) : (
                              <div className="list_address">{item2.place.address_name}</div>
                            )}
                        </div>

                    </div>):(null)}

                  </div>))}
                </div>))}
              </div>):(<div></div>)}

            </div>

            {/* 일정 생성 버튼 */}
            <div className="btnsaveplan">일정 생성하기</div>
          
          </div>
        </div>


        {/* 지도 컴포넌트 */}
        <div className="map_main">
          {/* <MapContainer /> */}
          <div id="myMap" />
        </div>


        {/* 장소 검색 컴포넌트 */}
        <div className="map_search">
          {/* <SearchPlace /> */}
          <SearchPlaceContainer >
          <div>
            {/* 검색 입력 */}
            <form className="mapsearch" onSubmit={handleSubmit}>
              <input
                className="search"
                placeholder="검색어를 입력하세요"
                onChange={onChange} 
              />
              <button type="submit" className="searchbtn" >
                <FaSearch />
              </button>
            </form>
            {/* 검색 결과 */}
            <div className="result_list">
              {searchResult.map((item, i) => {
                return (
                  <div className="list" key={i} style={{ marginTop: "10px" }}>
                    <div className="listinfo">
                      <span>{i + 1}</span>
                      <div className="place_name">{item.place_name}</div>

                      {item.road_address_name ? (
                        <div className="place_address">
                          <span>{item.road_address_name}</span>
                        </div>
                      ) : (
                        <span>{item.address_name}</span>
                      )}
                      <button className="addplanbtn" onClick={() => {
                        if (selectStartDate != null ) { // 날짜를 선택 했을 때
                          setAddPlace(() => {return[...addPlace, {num: DayButton, place: item}]})// 추가한 결과 배열에 넣기
                        }else{// 날짜를 선택 안했을 때
                        }
                      }}>
                        
                        <BsPlus />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
         
            {/* 페이지 이동 */}
            <PagenationFooterContainer>
              {/* 이전버튼 */}
              <LeftIconWrapper
                // page가 1일때 비활성화
                isDisable={page === 1}
                onClick={() => prevPage()}
              >
                <RightIcon10 fill={page === 1 ? "#C9C9C9" : "black"} />
              </LeftIconWrapper>
              {/* 페이지 */}
              <NumberBox className={`active`}>{page}</NumberBox>

              {/* 다음버튼 */}
              <RightIconWrapper 
              isDisable={page === 9}
              onClick={() => nextPage()}>
                <RightIcon10 fill={"black"} />
              </RightIconWrapper>
            </PagenationFooterContainer>
          </div>
         
          </SearchPlaceContainer>
        </div>
      </div>
      {/* 지역 모달창 */}
      {regionButton==true? (<Region setRegionButton={setRegionButton}/>):(null)}
    
      
    </div>
  );
};

export default Plan;
