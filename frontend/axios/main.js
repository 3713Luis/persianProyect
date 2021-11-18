const url = 'http://localhost:3050/api'

const fetchFunction = () => {  
    fetch(`${url}/consultar/articulos`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            insertDataA('fetch', JSON.stringify(data));
        }
    );
}

const insertDataA = (origin,data) => {
    if(origin === 'fetch') {
        let insertInHtml = document.getElementById('content-fetch');
        insertInHtml.innerHTML = data;
    } else if(origin === 'axios'){
        let insertInHtml = document.getElementById('content-axios');
        insertInHtml.innerHTML = JSON.stringify(data);
    }else {
        alert('Selecciona algún tipo de petición');
    }
  
}

const axioFunction = () => {
 axios({
     method: 'GET',
     url: `${url}/consultar/articulos`
 }).then(res=> {
     console.log(res);
     insertDataA('axios',res.data);
 }).catch(error => console.log(error)
 ).finally(console.log("Aqui va el codigo que queramos siempre y cuando no nos importe si la promesa se cumple o no... siempre se ejecuta esto y es antes del resolve o reject"))
}