import React, { ChangeEvent, Fragment, ReactElement, useState } from "react";
import SearchBar from "./common/SearchBar";
import SummaryCard from "./common/SummaryCard";
import summaryData from '../resources/db/summaryData.json';
import data from '../resources/db/barChartData.json';
import tableData from '../resources/db/tableData.json';
import BarChart from "./common/BarChart";
import PieCharts from "./common/PieCharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faArrowRight, faFrownOpen } from "@fortawesome/free-solid-svg-icons";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type summaryitemtype = {
    category: string,
    label: string,
    deviation: {
        percent: string,
        positive: boolean
    },
    amount: string,
    currency: string
}

export default function (): ReactElement {
    const [search, setSearch] = useState<string>('');
    return (
        <Fragment>
            <div className="height-100 width-100 home">
                <div className="welcome-user">
                    <h4 className="d-flex">Hello Shahrukh 👋🏻</h4>
                    <SearchBar setValue={setSearch} value={search} />
                </div>
                <div className="summary-cards">
                    {summaryData?.map?.((item: summaryitemtype) => <SummaryCard item={item} />)}
                </div>
                <div className="charts row">
                    <div className="col-md-8 col-sm-12 height-100">
                        <div className="card-general height-100 d-flex flex-direction-column">
                            <div className="charts-heading">
                                <div>
                                    <h4 className="weight-600">Overview</h4>
                                    <small className="weight-600" style={{ color: 'lightgray' }}>Monthly Earning</small>
                                </div>
                                <div>
                                    <select value={'qua'} className="form-select">
                                        <option value={'qua'}>Quaterly</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <BarChart data={data} accessor={'value'} labelAccessor={'label'} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 height-100">
                        <div className="card-general height-100">
                            <div className="">
                                <h4 className="weight-600">Customers</h4>
                                <small className="weight-600" style={{ color: "lightgray" }}>Customers that buy products</small>
                            </div>
                            <PieCharts />
                        </div>
                    </div>
                </div>
                <div className="product-list row" style={{ margin: '20px 0px' }}>
                    <div className="col-12" style={{ padding: '0px' }}>
                        <div className="card-general">
                            <div className="product-list-header" style={{ marginBottom: '15px' }}>
                                <h4 className="weight-600">Product Sell</h4>
                                <div className="d-flex align-items-center">
                                    <SearchBar setValue={setSearch} value={search} />
                                    <div className="ml-10">
                                        <select value={'30day'} className="form-select">
                                            <option value={'30day'}>Last 30 Days</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Product Name</TableCell>
                                            <TableCell align="right">Stock</TableCell>
                                            <TableCell align="right">Price</TableCell>
                                            <TableCell align="right">Total Sales</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tableData.map((row) => (
                                            <TableRow
                                                key={row.productName}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="product-image">
                                                            <img src={row?.additionalData?.image} height={50} width={80} />
                                                        </div>
                                                        <div className="d-flex flex-direction-column">
                                                            <small className="weight-600">{row?.productName}</small>
                                                            <small className="weight-600" style={{color: 'gray'}}>{row?.additionalData.description}</small>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="right">{row.stockAmount} in stocks</TableCell>
                                                <TableCell align="right">$ {row.price}</TableCell>
                                                <TableCell align="right">{row.totalSales}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}