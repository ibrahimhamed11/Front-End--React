import React from 'react'
import { useState } from 'react'

function AddBlog() {
    const [post,setPost]=useState('');
    const [file,setFile]=useState('');
    const [description,setDescription]=useState("");
    async function addBlog(){
        // console.warn(post,flie,description);
        const data = new Date();
        data.append('post',post);
        data.append('file',file);
        data.append('description',description);
        let result = await fetch("",
        {
            method:'POST',
            body:data
        });
        alert("تم النشر بنجاح ")
    }
  return (
    <div className='col-sm-6 offset-sm-3 container' >
        <h1 className='text-center mt-5 '>أضف منشور جديد </h1>
        <br/>
        <input type='text' className='form-control' placeholder='عنوان المنشور'
        onChange={(e)=>setPost(e.target.value)}/><br/>

        <input type='file' className='form-control' placeholder='صورة المنشور'
       onChange={(e)=>setFile(e.target.value)}/><br/>
        <input type='text' className='form-control' placeholder='الوصف' 
       onChange={(e)=>setDescription(e.target.value)}/><br/>

        <button onClick={addBlog} className='btn btn-outline-primary'>أضف منشور </button>
    </div>
  )
}

export default AddBlog