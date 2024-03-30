import { faAngleDoubleLeft, faAngleDown, faBox, faComment, faGear, faHome, faMoneyBill, faUser, faUserCheck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, ReactElement } from "react";

export default function (): ReactElement {
    return (
        <Fragment>
            <div className="sidenav">
                <div className="d-flex align-items-center" style={{ fontSize: 26, marginBottom: "20px" }}>
                    <FontAwesomeIcon icon={faGear} className="mr-10" />
                    <span className="weight-600">Dashboard</span>
                </div>
                <div style={{ flex: 1, overflow: 'hidden auto' }}>
                    <div className="sidenav-item bg-blur active"><FontAwesomeIcon icon={faHome} /> <span>Dashboard</span></div>
                    <div className="sidenav-item"><FontAwesomeIcon icon={faBox} /> <span>Product</span></div>
                    <div className="sidenav-item"><FontAwesomeIcon icon={faUser} /> <span>Customers</span></div>
                    <div className="sidenav-item"><FontAwesomeIcon icon={faMoneyBill} /> <span>Income</span></div>
                    <div className="sidenav-item"><FontAwesomeIcon icon={faUserCheck} /> <span>Promote</span></div>
                    <div className="sidenav-item"><FontAwesomeIcon icon={faComment} /> <span>Help</span></div>
                </div>
                <div className="sidenav-admin-panel d-flex align-items-center justify-content-between bg-blur">
                    <div className="info d-flex align-items-center">
                        <div className="logo mr-10">
                            <FontAwesomeIcon icon={faUserCircle} size="2x" />
                        </div>
                        <div className="admin-name d-flex flex-direction-column">
                            <small className="weight-600">Evano</small>
                            <small style={{ color: 'gray' }} className="weight-600">Project Manager</small>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
        </Fragment>
    )
}