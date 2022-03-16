import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/other_res_sy.css';


const user = {
    test: sessionStorage.getItem("subject")
}
var response = {};
function getRes(res) {

    response = res.data.user;
    console.log("response", response);
    console.log("the link man ", response.Unit1);
}
function postLinks(val) {
    if (val == 1) {
        window.location.replace = response.Unit1;
    }

}

function getLinks() {

    axios.post("http://localhost:5000/Resource", user)
        .then((res) => getRes(res)).catch((e) => alert(e));
}

const OtherResource = () => {
    getLinks();
    getLinks();
    const navg = useNavigate();
    return (
        <html>
            <head>
                <title>hello</title>
                <link rel="stylesheet" href="sem5style.css" />
            </head>
            
            <body class="ot_res_bgimg">
                
                <h1 align="center">Subjected subject : {(user.test).toUpperCase()}</h1>
                <br/><br/>
                <div>
                    <table class="ot_res_table">
                        <tr>
                            <td>
                                <label class="ot_res_lb"> Youtube</label> </td>
                            <td>  <button class="ot_res_button" onClick={() => window.location = "//" + response.YouTube.slice(8)}><a href={response.Unit1}>View</a></button>
                            </td>
                        </tr>
                        <tr>
                            <td> <label class="ot_res_lb"> Question Papers</label> </td>
                            <td>  <button class="ot_res_button" onClick={() => window.location = "//" + response.QuestionPapers[0].slice(8)}>View</button>
                            </td>
                            <td>  <button class="ot_res_button" onClick={() => window.location = response.QuestionPapers[1].slice(8)}>Download
                            </button></td>
                        </tr>
                        <tr>
                            <td colSpan={3} align='center'>
                            <button class="hm1_button" onClick={() => window.location = "/Home"}>Back</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class= "side_bg_img"></div>
            </body>

        </html>
    )
}
export default OtherResource;