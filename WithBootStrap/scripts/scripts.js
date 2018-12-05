function feildcheck(form)
{
var username = document.getElementById('usernameid').value;
var password = document.getElementById('passwordid').value;
if(username == "") {
    alert("Error: Username cannot be blank!");
    return false;
}
re = /^\w+$/;
if(!re.test(username)) {
    alert("Error: Username must contain only letters, numbers and underscores!");
    document.getElementById('usernameid').focus();
    return false;
}
if(password != "") {
    if(password.length < 6) {
    alert("Error: Password must contain at least six characters!");
    document.getElementById('passwordid').focus();
    return false;
    }
    if(password == username) {
    alert("Error: Password must be different from Username!");
    document.getElementById('passwordid').focus();
    return false;
    }
    re = /[0-9]/;
    if(!re.test(password)) {
    alert("Error: password must contain at least one number (0-9)!");
   document.getElementById('passwordid').focus();
   return false;
    }
    re = /[a-z]/;
    if(!re.test(password)) {
    alert("Error: password must contain at least one lowercase letter (a-z)!");
    document.getElementById('passwordid').focus();
    return false;
    }
    re = /[A-Z]/;
    if(!re.test(password)) {
    alert("Error: password must contain at least one uppercase letter (A-Z)!");
    document.getElementById('passwordid').focus();
    return false;
    }
} else {
    alert("Error: Please check that you've entered and confirmed your password!");
    document.getElementById('passwordid').focus();
    return false;
}
return true;
}