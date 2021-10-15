import React, { useEffect } from "react";
import HOC from "../../Common/HOC.jsx";
//css file
import "./Register.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField } from "@material-ui/core";
import { withRouter } from "react-router";


const ForgotPassword = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>

            <div className="Register_Main_div content_padding">
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <p className="page_heading mt-3">Reset your Password</p>
                    <div className="main_padding_top_bottom">

                        <div>
                            <TextField
                                placeholder="Email"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                            />
                        </div>


                        <div className="inputfiledformatting mt-3">
                            <Button
                                variant="contained"
                                className="Home_page_button login_register_width"
                            >
                                Reset
                            </Button>

                        </div>
                        <div className="mt-3 mb-3"><span className="Login_in" onClick={() => props.history.goBack()}>Cancel</span></div>

                    </div>
                </Card>

            </div>
        </>
    );
};

export default withRouter(HOC(ForgotPassword));
