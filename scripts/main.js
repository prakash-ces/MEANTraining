var elem_divContent = document.getElementById('divContent');

(function bindLogin(){
    elem_divContent.innerHTML = gb_loginContent;
}()); // making this function as an IIFE in order to load the login page visible on load.

function bindRegister(){
    elem_divContent.innerHTML = gb_registerContent;
} // fn to load the register page when the user clicks on register button
