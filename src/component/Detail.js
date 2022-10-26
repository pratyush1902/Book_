import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Book_Detail } from '../Api';



export default function Detail() {
    const[book,setBook]=useState({});
    const{id}=useParams();
     useEffect(()=>{
        axios.get(`${Book_Detail}/${id}`)
        .then(res=>{
           setBook(res.data) ;
        })
        .catch(err=>console.log(err));

     },[id])
  return (
    <div className='Details'>
      <div>
        <h2>{book?.title}</h2>
        <img src={book.image_url}  alt="@"/>
      </div>
      <div>
        <h2>Description</h2>
        <p>{book?.description}</p>
      </div>
    </div>
  )
}
