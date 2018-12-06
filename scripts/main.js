var elem_divContent = document.getElementById('divContent');

(function bindLogin () {
    elem_divContent.innerHTML = gb_loginContent;
}());

function bindRegister () {
    elem_divContent.innerHTML = gb_registerContent;
}

// function activate () {
//     bindLogin();
//     // bindRegister();
// } // FN ACTIVATE

// activate();
