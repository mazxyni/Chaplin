import React from 'react';
import { PC, Mobile } from '../../Responsive';
import SelectRegion from '../../Page/PlanPage_selectRegion';
import Plan from '../component/Plan/PlanPage_PC.js';

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