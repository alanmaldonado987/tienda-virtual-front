import axios from 'axios';
export async function getElectronic(){
    try{
        const response = await axios({ //Devuelve una promesa
            url: 'http://localhost:4000/products/electronica',
            method: 'GET'
        })
        return response;
    }catch(e){
        console.error(e);
    }
}