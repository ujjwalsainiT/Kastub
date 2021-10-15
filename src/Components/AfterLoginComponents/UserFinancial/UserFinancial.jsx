import React, { useState, useEffect } from 'react';

//css file
import "./UserFinancial.css";

//material ui data table
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";


import {
    Button,
    Grid
} from '@material-ui/core';

//react csv downloader
import { CSVLink } from "react-csv";

function UserFinancial() {
    const classes = useStyles();
    const Financialdata = [{ property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "24-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    { property: "23-A Delhi", leaseto: "Jhon Doe", laseduration: "23/04/2021 - 23/7/2021", pastcollection: 50, amountdue: 230, label: "23/05/2021" },
    ]

    // for pagination hadler 
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [propertyname, setpropertyname] = useState("");
    const filterData = Financialdata.filter((event) => {
        return (
            event.property.toLowerCase().indexOf(propertyname.toLowerCase()) !== -1
        );
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>

            <Grid className="Component_main_grid p-2 ">
                <Grid item md={4}>
                    <div className="d-flex">
                        <span className="p-2"><i class="fa fa-search"></i></span>
                        <span><input type="text"
                            class="form-control"
                            placeholder="Search by Property Name"
                            value={propertyname}
                            onChange={(e) => {
                                setpropertyname(e.target.value)
                            }}
                        /></span>
                    </div></Grid>
                <Grid item md={6}></Grid>
                <Grid item md={2}>
                    <div className="mt-2 mb-2 text-right">
                        <CSVLink
                            data={Financialdata}
                        >
                            <Button className="Home_page_button">Export to CSV</Button>
                        </CSVLink>
                    </div>
                </Grid>

            </Grid>
            <div className="table_foramtitng mt-1 mb-2">

                <TableContainer component={Paper}>
                    <Table
                        className={classes.table}
                        aria-label="customized table"
                        id="table_outside_border"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Property Name
                                </StyledTableCell>
                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Lease To
                                </StyledTableCell>

                                <StyledTableCell
                                    align="center"
                                    className="table_header"
                                >
                                    Lease Duration
                                </StyledTableCell>

                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Past collections
                                </StyledTableCell>

                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Amount Due
                                </StyledTableCell>

                                <StyledTableCell
                                    align="left"
                                    className="table_header"
                                >
                                    Labels
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? filterData.slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage +
                                    rowsPerPage
                                )
                                : filterData
                            ).map((row) => (
                                <StyledTableRow>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.property}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.leaseto}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="center"
                                    >
                                        {row.laseduration}
                                        <div className="text-center">
                                            <span className="p-1 mt-1 lease_duration_color">88 days</span>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.pastcollection}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.amountdue}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="left"
                                    >
                                        {row.label}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        true
                        rowsPerPageOptions={false}
                        component="div"
                        count={filterData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={
                            handleChangeRowsPerPage
                        }
                    />
                </TableContainer>
            </div>

        </>
    )
}
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
export default UserFinancial
