import axios from 'axios';
export default async function updateProduct(id, product){
    console.log(id, product)
    try{
        await axios.patch(`http://localhost:4000/products/${id}`, product)
    }catch(e){
        console.error(e);
    }
}