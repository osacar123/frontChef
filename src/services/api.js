import axios from 'axios';
//import LOGIN_URL from './endpoints'

const LIST_URL ='http://54.207.31.19/api/heroes/'
const REGISTER_URL ='http://3.83.218.22/v1/users/'

export const listHeroes = () =>{  
    return(axios.get(LIST_URL))
};
export const register = (data) =>{
  
    return(
    axios.post(REGISTER_URL, {
      ...data
    })
    )

};