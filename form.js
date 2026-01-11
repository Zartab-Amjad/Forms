let form = document.getElementById('form');
let user = document.getElementById('user');
let fname = document.getElementById('fname');
let dob = document.getElementById('dob');
let genderfield = document.getElementById('genderfield');
let gender = document.getElementsByName('gender');
let mail = document.getElementById('mail'); 

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     let isValid = checkinputs();

//     if(isValid) {
//         alert("Form submitted successfully");
//         form.reset();  //clear all fields
//         window.location.reload();    //refresh page
//     }
// });

function checkinputs() {
    let uservalue = user.value.trim();
    let fnamevalue = fname.value.trim();
    let dobvalue = dob.value.trim();
    let mailvalue = mail.value.trim();

    let valid = true;

    //user name validation..........
    if(uservalue === '') {
        setError(user, 'Patient name is required');
        valid = false;
    }
    else if (!/^[A-Za-z\s]+$/.test(uservalue)) {
    setError(user, 'Special characters and numbers are not allowed');
        valid = false;
    }
    else {
        setSuccess(user);
    }

    //father/guardian name validation.........
    if(fnamevalue === '') {
        setError(fname, 'This field is required');
        valid = false;
    }
    else if (!/^[A-Za-z\s]+$/.test(fnamevalue)) {
        setError(fname, 'Special characters and numbers are not allowed');
        valid = false;
    }
    else {
        setSuccess(fname);
    }

    //date of birth validation.................
    if(dobvalue === '') {
        setError(dob, 'This field is required ');
        valid = false;
    }
    else {
        setSuccess(dob);
    }

    //gender validation........................
    let genderselected = false;
    for(let i = 0; i < gender.length; i++) {
        if(gender[i].checked) {
            genderselected = true;
            break;
        }
    } 
    if(!genderselected) {
        setErrorRadio(genderfield, "Please select your gender");
        valid = false;
    }
    else {
        setSuccessRadio(genderfield);
    }
 
    //email validation......................
    if(mailvalue === '') {
    setError(mail, 'Email is required');
    valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailvalue)) {
    setError(mail, 'Please enter a valid email address');
    valid = false;
    }
    else {
    setSuccess(mail);
    }

    return valid;
}

//Error handler for input fileds.......................................
function setError(input, message) {
    let field = input.parentElement;
    let errormsg = field.querySelector('.error');

    errormsg.innerText = message;
    field.classList.add('error');
    field.classList.remove('success');
}

function setSuccess(input) {
    let field = input.parentElement;
    let errormsg = field.querySelector('.error');

    errormsg.innerText = '';
    field.classList.add('success');
    field.classList.remove('error');
}

//Error handler for radio buttons.......................................
function setErrorRadio(field, message) {
    let errormsg = field.querySelector('.error');

    errormsg.innerText = message;
    field.classList.add('.error');
    field.classList.remove('.success');
}

function setSuccessRadio(field) {
    let errormsg = field.querySelector('.error');

    errormsg.innerText = "";
    field.classList.add('.success');
    field.classList.remove('.error');
}


