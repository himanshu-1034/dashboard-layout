import { faArrowDown, faArrowUp, faBucket, faDollarSign, faFile, faHardDrive, faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, ReactElement } from "react";

type summaryCardPropType = {
    item: {
        category: string,
        label: string,
        deviation: {
            percent: string,
            positive: boolean
        },
        amount: string,
        currency: string
    }
}

export default function ({ item }: summaryCardPropType) {
    const getSummaryIcon = (category: string): ReactElement => {
        let icon: ReactElement = <></>, bgColor: string;

        switch (category) {
            case 'earning': {
                icon = <FontAwesomeIcon style={{ color: "#08A848", fontSize: "60px" }} icon={faDollarSign} />
                bgColor = "#E0FFEF"
                break;
            }
            case 'orders': {
                icon = <FontAwesomeIcon style={{ color: "#A306FE", fontSize: "60px" }} icon={faFile} />
                bgColor = "#E7DAFF"
                break;
            }
            case 'balance': {
                icon = <FontAwesomeIcon style={{ color: "#0959BF", fontSize: "60px" }} icon={faHardDrive} />
                bgColor = "#CBF2FE"
                break;
            }
            case 'totalsales': {
                icon = <FontAwesomeIcon style={{ color: "#D7050F", fontSize: "60px" }} icon={faBucket} />
                bgColor = "#FEAFD8"
                break;
            }
        }

        return (
            // @ts-ignore
            <div style={{backgroundColor: bgColor, padding: "50px", border: 0, borderRadius: "50%"}}>
                {icon}
            </div>
        )
    }
    return (
        <Fragment>
            <div className="card-general d-flex align-items-center summary-card">
                {getSummaryIcon(item.category)}
                <div className="ml-15">
                    <small style={{color: 'lightgray'}} className="weight-600">{item.label}</small>
                    <h2 className="weight-600">{`${item.currency}${item.amount}`}</h2>
                    <small className="weight-600"><span style={{color: item.deviation.positive ? 'green' : 'red'}} className="weight-600">{item.deviation.positive ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}{' '}{item.deviation.percent}{'% '}</span>this month</small>
                </div>
            </div>
        </Fragment>
    )
}