import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { APILINK } from './apiLink'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Puff } from 'react-loader-spinner'

function Update() {
    let navigate = useNavigate()
    let {id} = useParams()
    let [user, setUser] = useState(null)

    useEffect(()=>{
        axios.get(APILINK+id)
        .then((res)=> setUser(res.data))
    },[id])
    
  return user ? <EditForm navigate={navigate} id={id} user={user}/> : <Puff
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{position:"absolute", top:'45%', left:'50%', backGroundColor:'red'}}
  wrapperClass=""
  />
  
  
}

function EditForm({user, id, navigate}){
   let [load, setLoad] = useState(true)

    let [name, setName] = useState(user.name)
    let [email, setEmail] = useState(user.email)
    let [street, setStreet] = useState(user.street)
    let [suite, setSuite] = useState(user.suite)
    let [city, setCity] = useState(user.city)
    let [phone, setPhone] = useState(user.phone)
    let [website, setWebsite] = useState(user.website)
    return(
        <div className='container'>
        <div className='row'>
          <div className='frmPage'>
            <div className='col-md-4 formBg'>
              <h5 className='text-center my-3'>Update User</h5>
              <div className="mb-3">
                <input value={name} type="text" name='name' className="form-control mt-3" placeholder="name" onChange={(e)=> setName(e.target.value)}/>
                <input value={email} type="email" name='email' className="form-control mt-3" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
                <input value={street} type="text" name='street' className="form-control mt-3" placeholder="street" onChange={(e)=> setStreet(e.target.value)}/>
                <input value={suite} type="text" name='suite' className="form-control mt-3" placeholder="suite" onChange={(e)=> setSuite(e.target.value)}/>
                <input value={city} type="text" name='city' className="form-control mt-3" placeholder="city" onChange={(e)=> setCity(e.target.value)}/>
                <input value={phone} type="number" name='phone' className="form-control mt-3" placeholder="phone" onChange={(e)=> setPhone(e.target.value)}/>
                <input value={website} type="text" name='website' className="form-control mt-3" placeholder="website" onChange={(e)=> setWebsite(e.target.value)}/>
              </div>
              <button className='btn frm-btn'  onClick={()=>{
             setLoad(!true)
                axios.put(APILINK+id,{name, email, street, suite, city, phone, website})
                .then(()=> {
                
    toast.success('User Updated Successfully!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      theme: "colored",
      });
    navigate('/')
   })
                
              }}>{load? 'Update' : <div><i className="fa fa-circle-o-notch fa-spin" style={{fontSize:"17px", marginRight:'5px'}}></i> Updating...  </div> }</button>

            </div>
          </div>
        </div>
             
    </div>
    )
}

export default Update