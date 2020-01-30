import axios from 'axios';
//import LOGIN_URL from './endpoints'

const LIST_URL ='http://54.207.31.19/api/heroes'
const RANKING_URL ='http://54.207.31.19/api/ranking'

export const listHeroes = (page) =>{  
    return(axios.get(LIST_URL+'?page='+page))
};
export const detail = (id) =>{
  
    return(axios.get(LIST_URL+'/'+id))

};

export const updateVote = (id,vote) =>{
  
    return(axios.patch(LIST_URL+'/'+id,{vote}))

};

export const ranking = () =>{
  
    return(axios.get(RANKING_URL))

};