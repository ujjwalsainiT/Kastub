import React, { useEffect, useState } from "react";
import HOC from "../../Common/HOC.jsx";
//css file
import "./Register.css";

//login,register,resetpassword uses material ui text-feild
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";
import { withRouter } from "react-router";
import { Visibility, VisibilityOff } from "@material-ui/icons";



const ForgotPassword = (props) => {
    console.log("email::::", props)

    let email = props.location.state.email

    const [showPassword, setshowPassword] = useState(false);
    const [otp, setotp] = useState("")
    const [password, setpassword] = useState("")
    
    const ResetPassword = () => {

    }
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
                                value={email}
                            />

                        </div>
                        <div className="mt-2">
                            <TextField
                                placeholder="Email OTP"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={otp}
                                onChange={(e) => {
                                    setotp(e.target.value)
                                }}
                            />

                        </div>

                        <div className="mt-2">
                            <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setpassword(e.target.value)
                                    }}
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setshowPassword(!showPassword)}
                                                onMouseDown={(event) => event.preventDefault()}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                            </FormControl>
                        </div>

                        <div className="inputfiledformatting mt-3">
                            <Button
                                variant="contained"
                                className="Home_page_button login_register_width"
                                onClick={ResetPassword}
                            >
                                Reset
                            </Button>

                        </div>


                    </div>
                </Card>

            </div>
        </>
    );
};

export default withRouter(HOC(ForgotPassword));
