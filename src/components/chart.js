import _ from 'lodash';
import React from 'react';
import { 
    Sparklines, 
    SparklinesLine,
    SparklinesReferenceLine
} from 'react-sparklines';

function average(data){
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    const {temps, color, units} = props;
    return (
        <div>
            <Sparklines height={120} width={120} data={temps}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(temps)} {units}</div>
        </div>
    );
}