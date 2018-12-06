function checkfunction(form)
{
//initialising of variables
var username = document.getElementById('usernameid').value;
var password = document.getElementById('passwordid').value;
var useremailid = document.getElementById('useremailid').value;
var reenterpassword = document.getElementById('reenterpasswordid').value;

if(username == "") {
    alert("Error: Username cannot be blank!");
    return false;// checking for the empty feild
}
if(useremailid == ""){
    alert("Error: User Email id cannot be blank!");
    document.getElementById('useremailid').focus();
    return false;// checking for the empty feild
}

re = /^\w+$/;
if(!re.test(username)) {
    alert("Error: Username must contain only letters, numbers and underscores!");
    document.getElementById('usernameid').focus();
    return false;// checking for the username
}
if(password != "") {
    if(password.length < 6) {
    alert("Error: Password must contain at least six characters!");
    document.getElementById('passwordid').focus();
    return false;// checking for the length of the password
    }
    if(password == username) {
    alert("Error: Password must be different from Username!");
    document.getElementById('passwordid').focus();
    return false;// checking for the inclusion of similar username
    }
    re = /[0-9]/;
    if(!re.test(password)) {
    alert("Error: password must contain at least one number (0-9)!");
   document.getElementById('passwordid').focus();
   return false;// checking for the inclusion of numbers
    }
    re = /[a-z]/;
    if(!re.test(password)) {
    alert("Error: password must contain at least one lowercase letter (a-z)!");
    document.getElementById('passwordid').focus();
    return false;// checking for inclusion of alphabets letters
    }
    re = /[A-Z]/;
    if(!re.test(password)) {
    alert("Error: password must contain at least one uppercase letter (A-Z)!");
    document.getElementById('passwordid').focus();
    return false;// checking for inclision of alphabets-caps letters
    }
} else {
    alert("Error: Please check that you've entered your password!");
    document.getElementById('passwordid').focus();
    return false;
}
if(reenterpassword != ""){
    if(password != reenterpassword){
    alert("Error: Same password should be entered twice");
    document.getElementById('reenterpasswordid').focus();
    return false;// checking for the reentering of password
    }
}else{
    alert("Error: Please check that you've re-entered your password!");
    document.getElementById('reenterpasswordid').focus();
    return false;// checking for the empty feild
}
return true;
}