
import React, { useState } from 'react'
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import '../CSS/register_sy.css';




const Register = () => {




    const navg = useNavigate();
    const [user, setUser] = useState({
        Firstname: "",
        Lastname: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value

        })

    }
    var flag = 0;





    //register function 
    const register = () => {

        // check() ? alert("Fileds Cannot be Empty") :

        const { Firstname, Lastname, email, password, cpassword } = user
        if (Firstname && Lastname && email && password && cpassword) {

            if (password != cpassword) {
                alert("Passwords Didn't Match");
                // window.location 
            }
            else {
                axios.post("http://localhost:5000/Register", user)
                    .then(navg("/Login")).catch(res => alert(res));
            }
            //    alert("details entred");

        }
        else {
            alert("Fields Cannot be Empty")
        }
    }


    return (
        <div class="reg_img">

            
            <form >
                <table class="reg_table">
                    <tbody font-color="white">
                        <tr>
                            <td colSpan="2" align="CENTER">
                                <h2 > <strong> Registration form </strong></h2>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td><label class="reg_lb" htmlFor="name">First Name: </  label></td>
                            <td><input class = "reg_ip" id="Firstname" onChange={handleChange} maxLength="50" type="text"
                                name="Firstname"
                                value={user.name}
                            /></td>
                        </tr>

                        <tr>
                            <td><label class="reg_lb" htmlFor="course">LastName: </ label></td>
                            <td><input class = "reg_ip" id="Lastname" onChange={handleChange} maxLength="50" type="text"
                                name="Lastname"
                                value={user.name}
                            /></td>
                        </tr>
                        <tr>
                            <td><label class="reg_lb" htmlFor="email">Email  :</label></td>
                            <td><input class = "reg_ip" id="email" onChange={handleChange} maxLength="50" type="text"
                                name="email"
                                value={user.name}
                            /></td>
                        </tr>

                        <tr>
                            <td><label class="reg_lb" htmlFor="password">Password:</label></td>
                            <td><input class = "reg_ip" type="password" id="password" onChange={handleChange} maxLength="50"
                                type="password"
                                name="password"
                                value={user.name}

                            /></td>
                        </tr>

                        <tr>
                            <td><label class="reg_lb" htmlFor="comfirm_password">Confirm Password:</label></td>
                            <td><input class = "reg_ip" type="password" id="password" onChange={handleChange}
                                maxLength="50"
                                type="password"
                                name="cpassword"
                                value={user.name}
                                onChange={handleChange}
                            /></td>
                        </tr>

                        <tr>
                            <td colspan="2" align="center"><input class ="reg_button" name="Submit" type="Submit" value="Register"
                                onClick={register}
                            /></td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </div>

    );
}
export default Register;