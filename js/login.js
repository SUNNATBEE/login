const elFormLogin = document.querySelector(".form-js-login");
const userEmailInput = elFormLogin.querySelector(".user-email-js");
const userPasswaordInput = elFormLogin.querySelector(".user-password-js ");
const eyeBtn = document.querySelector(".btn-eyes");


// Show eye Password btn
eyeBtn.addEventListener("click" , () =>{
    userPasswaordInput.type = "text";
    eyeBtn.classList.toggle("show");
})
eyeBtn.addEventListener("mousedown" , ()=>{
    userPasswaordInput.type = "text";
    eyeBtn.classList.add("show");
})
eyeBtn.addEventListener("mouseup", () => {
    userPasswaordInput.type = "password";
    eyeBtn.classList.remove("show");
});
eyeBtn.addEventListener("mouseout", () => {
    userPasswaordInput.type = "password";
    eyeBtn.classList.remove("show");
});

// Get token
const getToken = window.localStorage.getItem("login");
if(getToken){
    window.location.replace("/list.html")
}

// Try catch for get login
async function userLogin(){
    try {
        const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        }),
    });
    
    const data = await response.json();
    if(data.token){
        window.localStorage.setItem("login", data.token);
        window.location.replace("/list.html");
    }
    
} catch (error) {
    console.log(error);
}
}

// Listen form 
elFormLogin.addEventListener("submit" , (evt)=>{
    evt.preventDefault();
    userLogin();
})