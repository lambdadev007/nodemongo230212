let pathname = window.location.pathname;
if(pathname !== "/" && pathname !== "/login" && pathname !== "/register") {
    if(!localStorage.getItem("isSuccess") || localStorage.getItem("isSuccess") !== "true") {
        location.href = "/";
    }
}
/*** logout function */ 
let logoutElem = document.querySelector('li a.logout');
if (logoutElem) {
    logoutElem.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem("isSuccess", false);
        localStorage.setItem("token", "");
        setTimeout(()=>location.href = "/" , 100);
    })
}

let time = Date.now();
let loginTime = localStorage.getItem("loginTime") ? localStorage.getItem("loginTime") : time;
if (time - loginTime > 10 * 1000) {
    localStorage.setItem("isSuccess", false);
    localStorage.setItem("token", "");
    localStorage.setItem("loginTime", 0);
}