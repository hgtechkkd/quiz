function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;

    if (password1 == '')
        alert("Please enter Password");

    else if (password2 == '')
        alert("Please enter confirm password");
  
    else if (password1 != password2) {
        alert("\nPassword did not match: Please try again...")
        return false;
    }

    else {
        alert("your registration is successfully. Please login")
        return true;
    }
}