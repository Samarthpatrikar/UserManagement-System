import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Employee(){
    const [Employee,setEmployee] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setEmployee(res.data))
        .catch(err=>console.log(err)) ;
    },[]

    )
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
          <div className='w-50 bg-white rounded'>
            <Link to='/create' className='btn btn-success d-flex justify-content-right'>ADD+</Link>
            <table className='table'>
                <thread>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>

                    </tr>
                </thread>
                 <tbody>
                    {
                        Employee.map((data,i)=>(
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                    <Link to= {`update/${data.id}`} className='btn btn-primary'>Update</Link>
                                    <Link to='/deleteEmployee' className='btn btn-danger ms-2'>Delete</Link>
                            
                                </td>
                            </tr>
                        ))
                    }
                 </tbody>
            </table>
          </div>

        </div>
    )
}

export default Employee 