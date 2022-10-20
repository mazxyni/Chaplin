import React from 'react';
import { PC, Mobile } from '../Responsive';
import SelectRegion from './PlanPage_selectRegion';
import Plan from '../PC_component/PlanPage/Plan';
import HeaderPc from '../PC_component/HeaderPc';

function PlanPage() {

    return (
        <>
        <PC>
            {/* 헤더 */}
            <HeaderPc />
            <Plan />
        </PC>

        <Mobile>
            <SelectRegion />
        </Mobile>
        </>
    )
}
export default PlanPage;