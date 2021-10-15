import React, { useEffect, useState } from 'react'

//HOC contains header & footer
import HOC1 from "../../../Common/HOC1.jsx";
import { Button, Card } from '@material-ui/core';
import { TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

//Css file
import "./EditProfile.css";

//for backend
import axios from "axios";
import { getBaseUrl } from "../../../utils";

function EditProfile(props) {

    console.log("user data:::::::", props)

    let full_name = props.location.state.UserName;
    let emailaddress = props.location.state.email;
    let phonenumber = props.location.state.phone;
    let id = props.location.state.userid;

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);
    const [imageurl, setimageurl] = useState("https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png");
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
        setfullname(full_name)
        setemail(emailaddress)
        setphone(phonenumber)

    }, [])

    const UploadImage = (e) => {
        try {
            console.log("file:::", e.target.files[0])
            const file = e.target.files[0];
            let url = getBaseUrl() + "upload";
            let fileData = new FormData();
            fileData.append("file", file);
            console.log("fdfh", fileData.append("file", file))
            console.log("File Data:::", fileData)
            axios
                .post(url, file, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log("image res:::", response)
                })
                .catch((error) => {
                    console.log("catch and try error", error);
                });
        } catch (error) {
            console.log("catch and try error", error);
        }
    }
    return (
        <>
            <div className="Register_Main_div content_padding">
                <div className="mx-auto">
                    <div>
                        <img
                            src={imageurl}
                            alt=""
                            id="img"
                            className="profile_Edit"
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            name="image-upload"
                            id="input"
                            onChange={(e) => {
                                UploadImage(e)
                            }}
                        />
                        <div className="">
                            <label className="resumeview_image_upload" htmlFor="input">
                                <i class="fa fa-camera mr-1"></i>
                                Upload Your Photo
                            </label>
                        </div>

                    </div>

                </div>
                <div><strong>Jhon Smith</strong></div>
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <p className="page_heading text-center mt-3">Edit Account</p>

                    <div className="mt-4 p-3">

                        <TextField
                            placeholder="Full Name"
                            id="outlined-basic"
                            variant="outlined"
                            autoComplete="off"
                            value={fullname}
                            onChange={(e) => {
                                setfullname(e.target.value)
                            }}
                        />
                        <div className="mt-2">
                            <TextField
                                placeholder="Email"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value)
                                }}
                            />
                        </div>
                        <div className="mt-2">
                            <TextField
                                placeholder="Phone Number"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                                value={phone}
                                onChange={(e) => {
                                    setphone(e.target.value)
                                }}
                            />
                        </div>
                        <div className="mt-2">
                            <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Password"
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

                        <div className="mt-4 mb-3"><Button className="Home_page_button login_register_width">Save</Button></div>

                    </div>
                </Card>


            </div>
        </>
    )
}

export default HOC1(EditProfile);
