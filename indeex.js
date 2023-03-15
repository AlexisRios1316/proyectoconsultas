const urlBase = 'http://13.56.7.193:3001/api/v1/apoyos';


const descripcion = document.getElementById('descripcion');
const nombre = document.getElementById('nombre');
const url = document.getElementById('url');
const lugar = document.getElementById('lugar');
const tipo_Dependencia = document.getElementById('tipo_Dependencia');
const monto = document.getElementById('monto');
const form = document.getElementById('form');

form.addEventListener('submit',postData)


                                                                                                                    

// Peticiones GET/READ
const getApoyosSync = () => {
    fetch(urlBase).then(response => {
        console.log(response)
    })
    console.log("Hola Mundo!")
}


// Peticiones POST


async function postData(evt){
    evt.preventDefault()
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre:nombre.value,
            descripcion:descripcion.value,
            fecha: new Date(),
            imagen:url.value,
            lugar:lugar.value,
            activo:true,
            periodicidad: "Mensualmente",
            monto:monto.value,
            tipo_Dependencia:tipo_Dependencia.value
        })
    
    }
    
    const response = await fetch(urlBase,config)
    const json = await response.json()
    console.log(json)

}


// Peticion DELETE
const deleteApoyoAsync = async () => {
    const respons = await fetch(urlBase + 'icxcH3DAdAacvz8nSJb2', {
        method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
}