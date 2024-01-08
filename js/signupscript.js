const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

signinBtn.onclick = function(){
nameField.style.maxHeight = "0";
title.innerHTML = "Sign In";
signupBtn.classList.add("disable");
signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
nameField.style.maxHeight = "65px";
title.innerHTML = "Sign Up";
signupBtn.classList.remove("disable");
signinBtn.classList.add("disable");
}   