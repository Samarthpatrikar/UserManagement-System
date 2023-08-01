// import React from 'react'
import axios from 'axios'
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom' ;


function UpdateEmployee() {
    const [values,setValues]=useState(
        {
            name:'',
            email:'',
            id:''
        }
    )
    // const {id}=useParams() ;
    const Navigate=useNavigate() ;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        axios.put('http://localhost:8081/update/',values)
        .then(res=>{
            console.log(res) ;
            Navigate('/') ;
        }).catch(err=>console.log(err)) ;
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-centre align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Employee</h2> 
                <div className='mb-2'>
                    <label htmlFor="">id</label>
                    <input type="text" placeholder='Enter ID' className='form-control' 
                    onChange={e=>setValues({...values,id:e.target.value})}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' 
                    onChange={e=>setValues({...values,name:e.target.value})}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control' 
                    onChange={e=>setValues({...values,email:e.target.value})}
                    />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
       
    </div>

  )
}

export default UpdateEmployee