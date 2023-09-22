export const GetToken = () =>{
    const token = localStorage.getItem('JwtToken');

    if(!token) return "";

    return `Bearer ${token}`;
}