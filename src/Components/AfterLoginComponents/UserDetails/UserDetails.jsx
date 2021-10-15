import React, { useEffect } from 'react'
import HOC1 from "../../../Common/HOC1";
import { Grid } from '@material-ui/core';
import "./UserDetails.css";

function UserDetails(props) {
    const recentsMail = [{ name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    { name: "Jhon Smith", content: "often used in print and web design" },
    ]

    const properties = [{ address: "115 Northampton Rd. 1", amount: "$270" },
    { address: "115 Northampton Rd. 1", amount: "$370" },
    { address: "115 Northampton Rd. 1", amount: "$450" },
    { address: "115 Northampton Rd. 1", amount: "$320" },
    { address: "115 Northampton Rd. 1", amount: "$420" },
    ]

    const pendingdue = [{ data: "LOREM IPSUM", amount: "$270", status: "paid" },
    { data: "LOREM IPSUM", amount: "$270", status: "due" },
    { data: "LOREM IPSUM", amount: "$270", status: "paid" },
    { data: "LOREM IPSUM", amount: "$270", status: "due" },
    { data: "LOREM IPSUM", amount: "$270", status: "paid" },
    { data: "LOREM IPSUM", amount: "$270", status: "due" },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_padding">
                <div><strong>Hii, Jhons Smith</strong></div>
                <div className="d-flex mt-2">
                    <span className="hover_cursor" onClick={() => props.history.push("/user-data")}><strong>Your Properties</strong></span>

                </div>

                <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                    <Grid item md={8}>
                        <div className="page_heading">Properties Overview</div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="table_header">Address</th>
                                    <th className="table_header">Outstanding Balances</th>
                                </tr>
                            </thead>
                            <tbody>
                                {properties.map((item, index) => (
                                    <tr>
                                        <td><strong>{item.address}</strong></td>
                                        <td className="amount_color"><strong>{item.amount}</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="page_heading mt-5">Pending Dues</div>
                        <table className="table mt-2">
                            <thead>
                                <tr>
                                    <th className="table_header1"></th>
                                    <th className="table_header2"></th>
                                    <th className="table_header2"></th>
                                </tr>
                            </thead>
                            <tbody className="mt-2">
                                {pendingdue.map((item, index) => (
                                    <tr className={item.status === "paid" ? "Green_color" : "red_color"}>
                                        <td><strong>{item.data}</strong></td>
                                        <td><strong>{item.amount}</strong></td>
                                        <td><strong>{item.amount}</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={3}>
                        <div className="page_heading">Recents Mails</div>
                        {recentsMail.map((item, index) => (
                            <div>
                                <div className="mt-3 d-flex justify-content-between">
                                    <span>{item.name}</span>
                                    <span><strong>Oct, 07</strong></span>
                                </div>
                                <div><strong>Lorem Ipsum is a fish text</strong></div>
                                <div>{item.content.length > 25 ? item.content.substring(0, 25) + "..." : item.content.substring(0, 25)}</div>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HOC1(UserDetails);
