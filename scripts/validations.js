function validateLoginForm() {
        
    // Initialising of variables from login page
    var loginUserName = document.getElementById('inpLoginName').value;
    var loginPassword = document.getElementById('inpPwdName').value;

    if ( (validateUsername(loginUserName) == true) && (validatePwd(loginPassword) == true) ) {
        return true;
    } else {
        return false;
    }  // IF-ELSE

}

function validateRegForm() {

    // Initialising variable from register page
    var regUserName = document.getElementById('inpRegName').value;
    var userEmailID = document.getElementById('inpRegEmailID').value;
    var regPwd = document.getElementById('inpRegPwd').value;
    var regReentPwd = document.getElementById('inpRegConfirmPwd').value;

    if ( (validateUsername(regUserName) == true) && (validateEmailID(userEmailID) == true) && (validatePwd(regPwd) == true) && (validateReenteredPwd(regPwd,regReentPwd) == true) ) {
        return true;
    } else {
        return false;
    }

}  // Fn validateRegForm

function validateUsername(UserName) {

    re = /^\w+$/;
    if ( UserName == "" ) {
        alert("Error: UserName cannot be blank!");
        return false;  // Checking for the empty field
    }  // IF-statement
    if( !re.test(UserName) ) {
        alert("Error: Username must contain only letters, numbers and underscore!");
        return false;  // Checking for the login UserName
    }   // IF-statement
    return true;

}  // Fn validateUsername

function validateEmailID(emailID) {

    if ( emailID == "" ) {
        alert("Error: User Email id cannot be blank!");
        return false;  // Checking for the empty field
    } else {
    return true;
    }  // IF-statement
    
}  // Fn validateEmailID

function validatePwd(pwd){

    if( pwd != "" ) {
        if( pwd.length < 6 ) {
        alert("Error: Password must contain at least six characters!");
        return false;
        }
        re = /[0-9]/;
        if( !re.test(pwd) ) {
        alert("Error: Password must contain at least one number (0-9)!");
        return false;
        }
        re = /[a-z]/;
        if( !re.test(pwd) ) {
        alert("Error: Password must contain at least one lowercase letter (a-z)!");
        return false;
        }
        re = /[A-Z]/;
        if( !re.test(pwd) ) {
        alert("Error: Password must contain at least one uppercase letter (A-Z)!");
        return false;
        }
    } else {
        alert("Error: Please check that you've entered your Password!");
        return false;
    }
    return true;

}  // Fn validatePwd

function validateReenteredPwd(regPwd,regReentPwd) {

    if( regReentPwd != "" ) {
        if(regPwd != regReentPwd) {
        alert("Error: Login password and re-entered password should be same !!!");
        return false;  // Checking for the reentering of loginPassword
        }
        return true;
    } else { 
        alert("Error: Please check that you've re-entered your Password!");
        return false;  // Checking for the empty field
    }  // IF-ELSE

}  // Fn validateReenteredPwd