import React from 'react';
import { PC, Mobile } from '../Responsive';
import SelectRegion from '../Mobile/Mobile_Page/PlanPage_selectRegion';
import Plan from '../PC/page/PlanPage_PC';

function PlanPage() {

    return (
        <>
        <PC>
            <Plan />
        </PC>

        <Mobile>
            <SelectRegion />
        </Mobile>
        </>
    )
}
export default PlanPage;