import { faBox, faComment, faHome, faMoneyBill, faUser, faUserCheck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

export default function () {
    return (
        <Fragment>
            <div className="topnav">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </div>
                <div style={{ flex: 1, overflow: 'auto hidden', marginLeft: 10 }} className="d-flex align-items-center">
                    <div className="topnav-item active"><FontAwesomeIcon icon={faHome} /> <span>Dashboard</span></div>
                    <div className="topnav-item"><FontAwesomeIcon icon={faBox} /> <span>Product</span></div>
                    <div className="topnav-item"><FontAwesomeIcon icon={faUser} /> <span>Customers</span></div>
                    <div className="topnav-item"><FontAwesomeIcon icon={faMoneyBill} /> <span>Income</span></div>
                    <div className="topnav-item"><FontAwesomeIcon icon={faUserCheck} /> <span>Promote</span></div>
                    <div className="topnav-item"><FontAwesomeIcon icon={faComment} /> <span>Help</span></div>
                </div>
            </div>
        </Fragment>
    )
}