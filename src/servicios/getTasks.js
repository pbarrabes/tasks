import { API_URL } from "../constantes/constantes";
export const getTasks=(recurso,callback)=>{

    fetch(API_URL+recurso)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=> callback(data))
    .catch((error)=>console.error(error))
}