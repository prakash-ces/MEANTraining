var gb_loginContent = "<div id='divLoginContainer' class='border-black align-center'>\
<div id='divLoginBlock' class='border-green display-inline-block'>\
    <form onsubmit='return validateLoginForm()' class='formblock'>\
        <legend id='headingForLogin'>Login</legend></br>\
        <p>Username: <input id='inpLoginName' class='username' type='text' placeholder='UserName' /></p></br>\
        <p>Password: <input id='inpPwdName' class='password' type='password' placeholder='Password' /></p> </br>\
        <input id='inpBtnLogin' class='btn btn-submit' type='submit' value='Submit' />\
    </form>\
</div>\
<div id='divRegisterBlock' class='border-blue display-inline-block'>\
    <p id='p1'>If you are a new user, Please register here</p> </br>\
    <button class='btn btn-register' id='btnregister' onclick='bindRegister()'>Register</button>\
</div>\
</div>";  // HTML for login page content

var gb_registerContent = "<div id='divRegisterContainer'>\
<div id='divRegisterBlockContainer'>\
        <form onsubmit='return validateRegForm()' class='formBlockForRegistration'>\
                <legend id='headingForRegister'>RegisterPage</legend><br />\
                <p>Username: <input id='inpRegName' class='username' type='text' placeholder='UserName' /></p><br />\
                <p>Email-ID: <input id='inpRegEmailID' class='username' type='email' placeholder='UserEmailId' /></p><br />\
                <p>Password: <input id='inpRegPwd' class='password' type='password' placeholder='Password' /></p> <br />\
                <p id='p2'>Reenter Password: <input id='inpRegConfirmPwd' class='password' type='password' placeholder='Reenter Password' /></p> <br />\
                <input id='inpBtnRegister' class='btn btn-submit' type='submit' value='Submit' />\
            </form>\
        </div>\
    </div>";  // HTML for register page content