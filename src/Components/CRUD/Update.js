import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';

function Update() {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, set_email] = useState("");
  const [age, set_age] = useState("");

  const navigate = useNavigate();

  const {id} = useParams(); 

  useEffect(() => {
    axios.get('https://65a811b994c2c5762da8393f.mockapi.io/newCRUD/'+ id).then((res) => {
      set_first_name(res.data.first_name)
      set_last_name(res.data.last_name)
      set_email(res.data.email)
      set_age(res.data.age)
    }).catch ((err) => {
      console.log(err)
    })
  }, [])

  const update_form_submit = (e) => {
    e.preventDefault();
    const formData = {
      id : id,
      first_name : first_name,
      last_name : last_name,
      email : email,
      age : age
    }

    axios.put('https://65a811b994c2c5762da8393f.mockapi.io/newCRUD/'+ id, formData).then((res) => {
      console.log(res)
      navigate('/')
    }).catch ((err) => {
      console.log(err)
    })
  }

  return (
    <div className="container-fluid  form-box">
      <div className="row d-flex flex-column w-100 min-vh-100 align-items-center justify-content-center ">
        <div className="col-md-4">
          <form onSubmit={update_form_submit}>

            <div className="form-group col-md-12">
              <label>First Name</label>
              <input type="text" required value={first_name} onChange={(e) => {set_first_name(e.target.value)}}  className="form-control"/>
            </div>

            <div className="form-group col-md-12">
              <label>Last Name</label>
              <input type="text" required value={last_name} onChange={(e) => {set_last_name(e.target.value);}} className="form-control" />
            </div>

            <div className="form-group col-md-12">
              <label>Email</label>
              <input type="text" required value={email} onChange={(e) => {set_email(e.target.value);}} className="form-control" />
            </div>

            <div className="form-group col-md-12">
              <label>Age</label>
              <input type="text" required value={age} onChange={(e) => {set_age(e.target.value);}} className="form-control" />
            </div><br/>

            <button type="submit" className="btn btn-primary">Updata data</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update
