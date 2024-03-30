import React, { Fragment, ReactElement } from "react";

type barItemType = { label: string, value: string, active: boolean };

type barChartPropType = {
    data: barItemType[],
    accessor: string,
    labelAccessor: string
}

export default function ({ accessor, data, labelAccessor }: barChartPropType): ReactElement {

    const calculateBarHeight = (data: barItemType[], item: barItemType): string => {
        const current = parseInt(item.value);
        const totalArr: number[] = data.map((item: barItemType) => parseInt(item.value));
        return `${Math.floor((current/Math.max(...totalArr)) * 100)}%`;
    }

    return (
        <Fragment>
            <div className="width-100 d-flex height-100" style={{overflow: 'auto hidden'}}>
                {data?.map?.((item, idx: number) => (
                    <div className="d-flex flex-direction-column justify-content-between align-items-center" style={{width: `calc(100% / ${data.length})` || '10%', margin: '0px 10px'}}>
                        <div style={{height: '100%', minHeight: 200, width: '100%', margin: '0px 15px'}} className="d-flex flex-direction-column-reverse">
                        <div style={{height: calculateBarHeight(data, item), width: "100%", background: item.active ? '#5A32EA' : '#F2EFFF', borderRadius: '4px'}}></div>
                        </div>
                        <small className="weight-600 mt-10">{item.label}</small>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}