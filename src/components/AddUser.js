import axios from 'axios'
import React, { useState } from 'react'
import { APILINK } from './apiLink'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddUser() {
 let [load, setLoad] = useState(true)
let navigate = useNavigate()
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [street, setStreet] = useState('')
  let [suite, setSuite] = useState('')
  let [city, setCity] = useState('')
  let [phone, setPhone] = useState('')
  let [website, setWebsite] = useState('')



 let handleSubmit = async()=>{
  setLoad(!true)
  await axios.post(APILINK, {name, email, street, suite, city, phone, website})
  .then(res=> {
    toast.success('User added Successfully!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      theme: "colored",
      });
    navigate('/')
   })
 }



  return (
      <div className='container'>
        <div className='row'>
          <div className='frmPage'>
            <div className='col-md-4 formBg'>
              <h5 className='text-center my-3'>Create User</h5>
              <div className="mb-3">
                <input type="text" name='name' className="form-control mt-3" placeholder="name" onChange={(e)=> setName(e.target.value)}/>
                <input type="email" name='email' className="form-control mt-3" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="text" name='street' className="form-control mt-3" placeholder="street" onChange={(e)=> setStreet(e.target.value)}/>
                <input type="text" name='suite' className="form-control mt-3" placeholder="suite" onChange={(e)=> setSuite(e.target.value)}/>
                <input type="text" name='city' className="form-control mt-3" placeholder="city" onChange={(e)=> setCity(e.target.value)}/>
               <input type="number" name='phone' className="form-control mt-3" placeholder="phone" onChange={(e)=> setPhone(e.target.value)}/>
                <input type="text" name='website' className="form-control mt-3" placeholder="website" onChange={(e)=> setWebsite(e.target.value)}/>
              </div>
              <button className='btn frm-btn' onClick={handleSubmit}> 
              {load? 'Create' : <div><i className="fa fa-circle-o-notch fa-spin" style={{fontSize:"17px", marginRight:'5px'}}></i> Creating...  </div> }
              </button>
            </div>
          </div>
        </div>
    </div>

  )
}

export default AddUser