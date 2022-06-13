import axios from "axios";
import { useState,useEffect } from "react";
const PostComponent = (props) =>{
    const [blog,setBlog] = useState('')

    useEffect(()=>{
        axios
        .get(`${process.env.REACT_APP_API}/blog/test`)
        .then(response=>{
            setBlog(response.data)
        })
        .catch(err=>alert(err))
        // eslint-disable-next-line
    },[])
    return(
        <div>
            <h1>{blog.title}</h1>
        </div>
    )
}

export default PostComponent;