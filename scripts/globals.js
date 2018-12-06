var gb_loginContent = "<div id='divLoginContainer' class='border-black align-center'>\
<div id='divLoginBlock' class='border-green display-inline-block'>\
    <form onsubmit='return checkfunction(this)' class='formblock'>\
        <legend id='headingForLogin'>Login</legend></br>\
        <p>Username: <input id='usernameid' class='username' type='text' placeholder='UserName' /></p></br>\
        <p>Password: <input id='passwordid' class='password' type='password' placeholder='Password' /></p> </br>\
        <input id='submitbtnid' class='btn btn-submit' type='submit' />\
    </form>\
</div>\
<div id='divRegisterBlock' class='border-blue display-inline-block'>\
    <p id='p1'>If you are a new user, Please register here</p> </br>\
    <button class='btn btn-register' id='btnregister' onclick='bindRegister ()'>Register</button>\
</div>\
</div>";

var gb_registerContent = "<div id='divRegisterContainer'>\
        <div id='divRegisterBlockContainer'>\
        <form onsubmit='return checkfunction(this)' class='formBlockForRegistration'>\
                <legend id='headingForRegister'>RegisterPage</legend><br />\
                <p>Username: <input id='usernameid' class='username' type='text' placeholder='UserName' /></p><br />\
                <p>Email-ID: <input id='useremailid' class='username' type='email' placeholder='UserEmailId' /></p><br />\
                <p>Password: <input id='passwordid' class='password' type='password' placeholder='Password' /></p> <br />\
                <p id='p2'>Reenter Password: <input id='reenterpasswordid' class='password' type='password' placeholder='Reenter Password' /></p> <br />\
                <input id='submitbtnid' class='btn btn-submit' type='submit' />\
            </form>\
        </div>\
    </div>";