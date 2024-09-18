document.getElementById('bt_submit').addEventListener('click', function(event){
event.preventDefault();

 url = "https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp"

let idd = document.getElementById("id_").value
let name = document.getElementById('username').value
let email = document.getElementById('email').value
let pass = document.getElementById('password').value
let error = document.getElementById('error')



if(idd.length < 3){
error.textContent = "ID should be in upper case"
return;

}

if(name.length <3 ){
    error.textContent= " Name sholud be more than 3"
    return;
}

let emailpatren =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailpatren.test(email)){
    error.textContent = "Email should be valid"
 return;

}

if(pass.length < 4 ){
    error.textContent= " Pass sholud be more than 3"
    return;
}

fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      ID: idd,
      Name: name,
      Email: email,
      Password: pass
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) =>{
         console.log(data)
         window.location.href = "Home.html"



    });






   
  


})