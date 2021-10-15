import React, { useState, useEffect } from "react";
import HOC from "../../Common/HOC.jsx";
import { Button, Card, TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";
import { withRouter } from "react-router";
import { Visibility, VisibilityOff } from "@material-ui/icons";

//css file 
import "./Register.css";

//for backend call
import axios from "axios";
import { getBaseUrl } from "../../utils";
import { blankValidator, emailValidator, showNotificationMsz } from "../../utils/Validation";
import Loder from "../Loder/Loder.jsx"

const Register = (props) => {

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");
    const [isloading, setisloading] = useState(false)


    //error
    const [fullnameError, setfullnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [emailMatchError, setemailMatchError] = useState(false);
    const [phoneError, setphoneError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);

    const RegisterUser = () => {
        try {
            if (!blankValidator(fullname)) {
                setfullnameError(true);
                return;
            }
            if (!blankValidator(email)) {
                setemailError(true);
                return;
            }
            if (!emailValidator(email)) {
                setemailMatchError(true);
                return;
            }
            if (!blankValidator(phone)) {
                setphoneError(true);
                return;
            }
            if (!blankValidator(password)) {
                setpasswordError(true);
                return;
            }

            setisloading(true)
            let url = getBaseUrl() + "register";
            let temp = {
                fullname,
                email,
                phone,
                password
            };
            axios
                .post(url, temp)
                .then(
                    (res) => {
                        console.log("data response:::", res)
                        setisloading(false)
                        showNotificationMsz(res.data.message, "success")
                        props.history.push("/user-details")
                    },

                    (error) => {
                        setisloading(false)
                        showNotificationMsz(error, "danger")
                    }
                )
        } catch (error) {
            setisloading(false)
            showNotificationMsz(error, "danger")
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



    return (
        <>
            <div className="Register_Main_div content_padding">
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <p className="page_heading mt-3">Register</p>
                    <div className="main_padding_top_bottom">
                        <TextField
                            placeholder="Full Name"
                            id="outlined-basic"
                            variant="outlined"
                            autoComplete="off"
                            value={fullname}
                            onChange={(e) => {
                                setfullnameError(false)
                                setfullname(e.target.value)
                            }}
                        />
                        {fullnameError && (
                            <span className="text-danger float-left">Enter Full Name</span>
                        )}
                        <div className="mt-2">
                            <TextField
                                placeholder="Email"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => {
                                    setemailError(false)
                                    setemailMatchError(false)
                                    setemail(e.target.value)
                                }}
                            />
                            {emailError && (
                                <span className="text-danger float-left">Enter the Email Address</span>
                            )}
                            {emailMatchError && (
                                <span className="text-danger float-left">Enter the Correct Email Address</span>
                            )}
                        </div>
                        <div className="mt-2">
                            <TextField
                                placeholder="Phone Number"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={phone}
                                onChange={(e) => {
                                    setphoneError(false)
                                    if (!NaN(e.target.value)) {
                                        setphone("")
                                    }
                                    setphone(e.target.value)
                                }}
                            />
                            {phoneError && (
                                <span className="text-danger float-left">Enter the Phone Number</span>
                            )}
                        </div>
                        <div className="mt-2">
                            <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setpasswordError(false)
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
                            {passwordError && (
                                <span className="text-danger float-left">Enter the Password</span>
                            )}
                        </div>

                        <div className="inputfiledformatting mt-3">
                            <Button
                                variant="contained"
                                className="Home_page_button login_register_width"
                                onClick={RegisterUser}
                            >
                                Register
                            </Button>
                        </div>

                    </div>
                </Card>

                <Card className="pt-2 pb-2 Card_shadow mt-2">
                    <p>I already have an account, <span className="Login_in" onClick={() => props.history.push("/login")}>Log In</span></p>
                </Card>
            </div>
            <Loder loading={isloading} />
        </>
    );
};

export default withRouter(HOC(Register));
