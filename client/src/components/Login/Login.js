import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import '../../CSS/login_sy.module.css';
import '../CSS/login_sy.css';

const Login = ({ setLoginUser }) => {
    const history = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value

        })


    }
    const check = () => {
        // alert('check')

        if (user.email == "" || user.password == "") {
            // alert("if exe");
            return 1;
        }
        else {
            // alert('else exe')
            return 0;
        }
    }

    const login = () => {

        check() ? alert("Fields cannot be Empty") :

            axios.post("http://localhost:5000/Login", user)
                .then(history("/Home")).catch((e) => alert(e));
    }
    return (
        <body class="lgn_bgimg"> 

            <form class="lgn_table">
                <table>
                    <tbody font-color="white">
                        <tr>
                            <td colSpan="2" align="CENTER" ><h2 ><strong>  Login Form </strong> </h2></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td><label class="lgn_lb" htmlFor="email">Email  :</label></td>
                            <td><input class="lgn_ip" id="email" onChange={handleChange} maxLength="50" type="text"
                                name="email"
                                value={user.name}
                            /></td>
                        </tr>

                        <tr>
                            <td><label class="lgn_lb" htmlFor="password">Password:</label></td>
                            <td><input class="lgn_ip" type="password" id="password" onChange={handleChange} maxLength="50"
                                type="password"
                                name="password"
                                value={user.name}

                            /></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td colSpan="2" align="center"><input class="lgn_button" name="Submit" type="Submit" value="Login"
                                onClick={login}
                            /></td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </body>
    )
}

export default Login
