import React from 'react';
import { sem, submitNotes, submitOther } from './code';
// import '../../CSS/sem5style.css';
import '../CSS/Home_sy.css';
import NavBar2 from '../Navigation/NavBar2';

const Home = () => {
    return (
        <div>
            <html>
                <head>

                    <script src='code.js'></script>
                </head>
                <body class="hm_bgimg">
                    {/* <h1> - </h1> */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="hm_align">
                        <label id='lb'>Select semester:   </label>

                        <select id='semester' class="hm_drp">
                            <option>semester 1</option>
                            <option>semester 2</option>
                            <option value="sem 3">semester 3</option>
                            <option value="sem 4">semester 4</option>
                            <option value="sem 5">semester 5</option>
                            <option value="sem 6">semester 6</option>
                            <option value="sem 7">semester 7</option>
                            <option value="sem 8">semester 8</option>
                        </select>
                        <button class="hm1_button" id='select' onClick={sem}> select</button>
                        <br /><br />
                        <label id='lm'>Select subject:   </label>
                        <select id='subject' class="hm_drp">
                            <option>select subject</option>
                        </select><br /><br />
                        <button class="hm_button" id='submit' onClick={submitNotes}>Notes Resources</button>
                        <button class="hm_button" onClick={submitOther}>Other Resources</button>
                    </div>
                </body>
            </html>
        </div>

    )
}
export default Home;