var log = document.getElementById("login")
var reg = document.getElementById("register")
var button = document.getElementById("btn")

function register(){
  log.style.left = "-400px";
  reg.style.left = "50px";
  button.style.left = "110px"
}

function login(){
  log.style.left = "50px";
  reg.style.left = "450px";
  button.style.left = "0"
}

function store(){

  var name=document.getElementById("name");
  var email=document.getElementById("email");
  var password=document.getElementById("password");

    localStorage.setItem("name",name.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);

    alert("Registration Successful!")
}

function check(){
    var storedName = localStorage.getItem('name');
    var storedpass = localStorage.getItem("password")

    var userName = document.getElementById('userName');
    var userpass = document.getElementById("userpass")

    if(userName.value !== storedName && userpass.value !== storedpass){
      alert('Error on login');
    }else{
      alert('You are logged in.');
      window.open('webpage.html');
    }
}