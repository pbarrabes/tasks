import { API_URL } from "../constantes/constantes";
export const postTasks =(recurso,data,callback)=>{
    const options={
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data) 
    }
    fetch(API_URL+recurso,options)
    .then(response=>{
        if(response.ok){
            return response.json();
        }       
    })
    .then(data=> {
        console.log(data);
        callback(data);
        })
    .catch(error=>console.error(error))

}