import React,{useState, useEffect} from 'react'
import axios from 'axios'

function AxiosApiCall() {

    const [post, setPost]=useState([])
    const fetchPost= async()=>{
        const response= await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(response.data) 
        const data= await response.data;
        setPost(data) 
    }
    useEffect(()=>{
       fetchPost();
    },[])
    return (
    <div>
      {
          post.map((data)=><li key={data.id}> {data.name}</li>)
      }
    </div>
  )
}

export default AxiosApiCall