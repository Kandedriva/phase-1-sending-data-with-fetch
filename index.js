// Add your code here
function submitData(name, email){
const configObject = {
  method:"POST",
  headers: {
    "Content-Type": "application/json",
"Accept": "application/json"
  },
  body:JSON.stringify({name, email})

}

  return fetch("http://localhost:3000/users", configObject)
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    const id = data.id;
    console.log(id)
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.textContent = id;
    body.appendChild(p)
  })
  .catch(function(err){
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.textContent = err.message;
    body.appendChild(p);
    
  })
}
