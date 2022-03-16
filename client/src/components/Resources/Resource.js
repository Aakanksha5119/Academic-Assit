import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import '../../CSS/substyles.css';
import '../CSS/resource_sy.css'

const user = {
    test: sessionStorage.getItem("subject")
}
var response = {};
function getRes(res) {

    response = res.data.user;
    console.log("response", response);
    console.log("the link man ", response.Unit1);
}

function getLinks() {

    axios.post("http://localhost:5000/Resource", user)
        .then((res) => getRes(res)).catch((e) => alert(e));
}
// const sub_name = user.test;
// // sub_name = sub_name.toString;
// alert(sub_name.toUpperCase);

const Resource = () => {
    getLinks();
    const navg = useNavigate();
    return (
        <html>
            <head>
                <title>hello</title>
                {/* <link rel="stylesheet" href="sem5style.css" /> */}
            </head>
            <body class="res_bgimg">
                <h1 align="center">Subjected subject : {(user.test).toUpperCase()}</h1>
                <br/><br/>
                <div class="singlediv">
                    <table class="res_table">
                        <tr>
                            <td>
                                <label class="res_lb"> UNIT 1</label> </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit1[0].slice(8)}>View</button>
                            </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit1[1].slice(8)}>Download </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="res_lb"> UNIT 2</label> </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit2[0].slice(5)}>View</button>
                            </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit2[1]}>Download </button>
                            </td>
                        </tr>   <tr>
                            <td>
                                <label class="res_lb"> UNIT 3</label> </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit3[0]}>View</button>
                            </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit3[1]}>Download </button>
                            </td>
                        </tr>   <tr>
                            <td>
                                <label class="res_lb"> UNIT 4</label> </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit4[0]}>View</button>
                            </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit4[1]}>Download </button>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <label class="res_lb" > UNIT 5 </label> </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit5[0]}>View</button>
                            </td>
                            <td>  <button class="res_button" onClick={() => window.location = "//" + response.Unit5[1]}>Download </button>
                            </td>
                        </tr >
                        <tr>
                            <td colSpan={"3"} align='center'>
                            <button  class="hm1_button" onClick={() => window.location = "/Home"}>Back</button>
                            </td>
                        </tr>
                        
                    </table>
                </div>
            </body>

        </html>
    )
}
export default Resource;