'use strikt'
//user can only login with these names.
let usernames = ['Rosita', 'ec', 'softhouse'];

//Function that calls all other functions in order
//--Don't modify--
function init() {
    initLoginForm();
    initLabel();
    initInput();
    initButton();
}
let form;
let label;
let input;
let btn;

function initLoginForm() {
    form = document.createElement('form');
    document.body.appendChild(form);
    //Add code here to:
    //create and add form element to the Dom.
}

function initLabel() {
    label = document.createElement('label');
    label.textContent = 'Username';
    form.appendChild(label);
    //Add code here to:
    //create label element and set the lable to "username" (TIP: use .textContent).
    //Add it to the form element. (TIP: use .appendChild).
}

function initInput() {
    input = document.createElement('input');
    input.required = true;
    form.appendChild(input);
    //Add code here to:
    //create input element and set it to be requried (TIP: use .required = true).
    //Add it to the form element. (TIP: use .appendChild).
}

function initButton() {
    btn = document.createElement('BUTTON');
    btn.textContent = 'Login';
    form.appendChild(btn);
    btn.addEventListener('click', () => {
        if (validateLoginInfo() == true) {
            alert('Welcome!');
        } else {
            input.style.border = '3px, solid red';
        }
    });

    //create button element and set the text to "login" (TIP: use .textContent)
    ////Add it to the form element. (TIP: use .appendChild).

    //Add click eventListener for button and call validateLoginInfo function inside it.
    //if validateLoginInfo is true alert user with "Welcome" text.
    //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).
}

function validateLoginInfo() {

    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === input.value) {
            return true;
        }
    }
    return false;

    //Get the input using form input element (TIP: use .value)
    //if the username is in the usernames array return true if not return false.
}

window.addEventListener('DOMContentLoaded', (event) => {
    init();
});

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)