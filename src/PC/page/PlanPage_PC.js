import React from "react";
import Plan from "../component/Plan/Plan";
import HeaderPc from "../component/Header_PC";



// 일정계획 컴포넌트
function PlanPagePc()  {

  return (
    
    <div>
    {/* 헤더 */}
    <HeaderPc />
  
    <Plan />
    </div>
  );
};

export default PlanPagePc;
