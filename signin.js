document.getElementById('bt_submit').addEventListener('click', function(event){
    event.preventDefault();
    
     url = "https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp"
    
    let idd = document.getElementById("id_").value
    let pass = document.getElementById('password').value
    let error = document.getElementById('error')
    isFound = true;
    
    
    
    if(idd.length < 3){
    error.textContent = "ID should be in upper case"
    return;
    
    }

    
    if(pass.length < 4 ){
        error.textContent= " Pass sholud be more than 3"
        return;
    }
    
    fetch(url, {
        method: 'GET'
      })

      .then((response) => response.json())
      .then((data) =>{

        data.forEach(user => {
          if(user.Idd == user.id && user.Pass == user.Password){
            isFound; true
            localStorage.setItem("id_", user.idd);
          
         window.location.assign = "Home.html"

          } if(!isFound){
      error.textContent = "id and Password Not corect"
          }

        })
            
        });
          
          
  
  
  
      });
  
  
  
  

    