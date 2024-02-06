import React, { useEffect, useState } from 'react'
import { APILINK } from './apiLink'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Puff } from 'react-loader-spinner'


function Home() {
let navigate = useNavigate()
 let [users, setUsers] = useState([])


//  getUser
let getData =  async()=>{
  const response = await axios.get(`${APILINK}`)
  setUsers(response.data)
 }

 useEffect(()=>{
  getData()
},[])

  // deleteUser

 let deleteUser = async (id)=>{
  try {
  let confirm = window.confirm('Do you want to delete User')
  if(confirm){
    await axios.delete(APILINK+id)
    .then(res=> {
      toast.warning('User removed Successfully!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        theme: "colored",
        });
      getData()
    })
}
  } catch (error) {
    alert(error)
  }
}

  // updateUser

let handleUpdate = (id)=>{
  navigate(`/update/${id}`)
}

  return (
  
    <div className='container'>
     {users ? <div className='row mt-5 tbl'>
        <div className='col-md-12 '>
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { users.map((user)=>(
              <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td className='content'>{user.name}</td>
              <td className='content'>{user.email}</td>
              <td className='content'>{user.website}</td>
              <td className='content'>{user.phone}</td>
              <td className='content'> {user.suite}, {user.street}, {user.city}, {user.zipcode}</td>
              <td> 
              <i title="Edit" className="bi bi-pencil-square" onClick={()=> handleUpdate(user.id)}></i> &nbsp; &nbsp;
              <i title="Delete" className="bi bi-trash-fill" onClick={()=> deleteUser(user.id)}></i>
              </td>
              
            </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div> : <Puff
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{position:"absolute", top:'45%', left:'50%', backGroundColor:'red'}}
  wrapperClass=""
  />}
    </div>
  )
}

export default Home
