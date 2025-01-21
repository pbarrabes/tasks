import { API_URL } from "../constantes/constantes";
export const delTasks =(recurso,callback)=>{
    const options={
        method:"DELETE",
    }
    fetch(API_URL+recurso,options)
    .then(response=>{
        if(response.ok){
            callback();
            return response.json();
        }       
    })
    .then(data=> {
        console.log(data);
        })
    .catch(error=>console.error(error))

}